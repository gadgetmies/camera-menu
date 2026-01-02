import { JSX, useState, useEffect, useRef } from 'react'
import './App.css'
import { getAllCustomCameras, saveCustomCamera, deleteCustomCamera, CustomCamera } from './utils/indexedDB'
import { createCustomCameraFromZip } from './utils/zipHandler'
import { downloadCameraAsZip, CameraDownloadData } from './utils/downloadCamera'
import { parseCSVRows } from './utils/csvParser'

const csvModules = import.meta.glob('./data/*.csv', { query: '?raw', import: 'default', eager: true })
const cssModules = import.meta.glob('./data/*.css', { query: '?url', import: 'default', eager: true })
const cssRawModules = import.meta.glob('./data/*.css', { query: '?raw', import: 'default', eager: true })

const cssFileMap: Record<string, string> = {}
const cssRawMap: Record<string, string> = {}
Object.keys(cssModules).forEach((path) => {
  const fileName = path.replace('./data/', '').replace('.css', '')
  cssFileMap[fileName] = cssModules[path] as string
})
Object.keys(cssRawModules).forEach((path) => {
  const fileName = path.replace('./data/', '').replace('.css', '')
  cssRawMap[fileName] = cssRawModules[path] as string
})

const cameraCsvs: Record<string, string> = {}
const cameraBrands: Record<string, string> = {}
const cameraModels: Record<string, string> = {}
const cameraDisplayNames: Record<string, string> = {}
const cameraCssFiles: Record<string, string> = {}
const customCameraCssBlobs: Record<string, string> = {}

Object.keys(csvModules).forEach((path) => {
  const fileName = path.replace('./data/', '').replace('.csv', '')
  const key = fileName
  const csvContent = csvModules[path] as string
  cameraCsvs[key] = csvContent

  const allRows = parseCSVRows(csvContent)
  const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
  if (configRowIndex >= 0) {
    const configRows = allRows.slice(configRowIndex + 1)
    for (const row of configRows) {
      if (row.length === 0) continue
      if (row[0] === 'brand' && row.length > 1) {
        cameraBrands[key] = row[1].trim()
      } else if (row[0] === 'model' && row.length > 1) {
        cameraModels[key] = row[1].trim()
      } else if (row[0] === 'display_name' && row.length > 1) {
        cameraDisplayNames[key] = row[1].trim()
      } else if (row[0] === 'css_file' && row.length > 1) {
        cameraCssFiles[key] = row[1].trim()
      }
    }
  }

  if (!cameraBrands[key] && cameraDisplayNames[key]) {
    const parts = cameraDisplayNames[key].split(' ')
    if (parts.length > 1) {
      cameraBrands[key] = parts[0]
      cameraModels[key] = parts.slice(1).join(' ')
    } else {
      cameraBrands[key] = cameraDisplayNames[key]
      cameraModels[key] = ''
    }
  }

  if (!cameraBrands[key]) {
    cameraBrands[key] = fileName
  }
  if (!cameraModels[key]) {
    cameraModels[key] = fileName
  }
  if (!cameraDisplayNames[key]) {
    cameraDisplayNames[key] = `${cameraBrands[key]} ${cameraModels[key]}`.trim()
  }
  if (!cameraCssFiles[key]) {
    cameraCssFiles[key] = fileName
  }
})

const process = (acc: Record<string, any>, value: string): void => {
  const trimmedValue = value.trim()
  if (trimmedValue === '') {
    return
  }
  const parts = trimmedValue.split(',').map(p => p.trim()).filter(p => p !== '')
  if (parts.length === 0) {
    return
  }
  
  let current: Record<string, any> = acc
  if (!current.__order__) {
    current.__order__ = []
  }
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (part === '') {
      continue
    }
    if (i === parts.length - 1) {
      if (!(part in current)) {
        current[part] = ''
        if (Array.isArray(current.__order__)) {
          current.__order__.push(part)
        }
      }
    } else {
      if (!(part in current) || typeof current[part] !== 'object' || current[part] === null) {
        const newObj: Record<string, any> = { __order__: [] }
        current[part] = newObj
        if (Array.isArray(current.__order__) && !current.__order__.includes(part)) {
          current.__order__.push(part)
        }
      }
      current = current[part] as Record<string, any>
      if (!current.__order__) {
        current.__order__ = []
      }
    }
  }
}

type SetSelectedFn = (level: number, index: number) => void

type EditFunctions = {
  onEditText: (level: number, index: number, newText: string) => void
  onAddSubItem: (level: number, index: number) => void
  onAddTopLevelItem: () => void
  onDeleteItem: (level: number, index: number) => void
}

const render = (
  config: Record<string, any>,
  node: Record<string, any>,
  parent: string | undefined,
  level: number,
  selected: Array<number>,
  setSelected: SetSelectedFn,
  classNames: string = '',
  helpMap: Record<string, string> = {},
  helpMode: boolean = false,
  onHelpClick?: (helpText: string, path: string) => void,
  currentPath: string[] = [],
  editMode: boolean = false,
  editFunctions?: EditFunctions,
  editingItemKey?: string | null,
  setEditingItemKey?: (key: string | null) => void,
  editingText?: string,
  setEditingText?: (text: string) => void,
): JSX.Element => {
  const deepestLevel = selected.length
  const isDeepestLevel = level === deepestLevel
  const nodeKeys = Array.isArray(node.__order__) ? node.__order__ : Object.keys(node).filter(k => k !== '__order__')
  if (nodeKeys.length === 0 && !(editMode && isDeepestLevel)) {
    return <></>
  }
  return (
    <>
      <div className={`scroll-container level-${level} level`}>
        <div className={`level-${level} container ${classNames}`} key={`level-${level}-container`}>
          <div className={`level-heading`}>{parent ? parent : ''}</div>
          {nodeKeys.map((key, i) => {
            const iconMatch = key.match(/<i name="([^"]+)"\/>/)
            const iconName = iconMatch ? iconMatch[1] : null
            const label = key.replace(/<i name="[^"]+"\/>/g, '')
            const itemPath = [...currentPath, label]
            const pathString = itemPath.join(' > ')
            const nodeValue = node[key]
            const hasHelpFromNode = nodeValue && typeof nodeValue === 'object' && (nodeValue as any).__help__
            const hasHelp = helpMap[pathString] !== undefined || hasHelpFromNode
            const helpText = helpMap[pathString]

            const handleClick = () => {
              if (editMode) {
                setSelected(level, i)
                return
              }
              if (helpMode && hasHelp && helpText && onHelpClick) {
                onHelpClick(helpText, pathString)
              } else {
                setSelected(level, i)
              }
            }

            const isSelected = selected[level] === i
            const isEditing = editMode && isDeepestLevel && editingItemKey === key
            const canEdit = editMode && isDeepestLevel

            const handleLabelClick = (e: React.MouseEvent) => {
              if (editMode && isDeepestLevel && setEditingItemKey && setEditingText) {
                e.stopPropagation()
                setEditingItemKey(key)
                setEditingText(label)
              }
            }

            const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              if (setEditingText) {
                setEditingText(e.target.value)
              }
            }

            const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
              const value = e.currentTarget.value.trim()
              if (editFunctions) {
                if (value === '') {
                  editFunctions.onDeleteItem(level, i)
                } else {
                  editFunctions.onEditText(level, i, value)
                }
              }
              if (setEditingItemKey) {
                setEditingItemKey(null)
              }
            }

            const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                const value = e.currentTarget.value.trim()
                if (editFunctions) {
                  if (value === '') {
                    editFunctions.onDeleteItem(level, i)
                  } else {
                    editFunctions.onEditText(level, i, value)
                  }
                }
                if (setEditingItemKey) {
                  setEditingItemKey(null)
                }
              } else if (e.key === 'Escape') {
                e.preventDefault()
                if (setEditingItemKey) {
                  setEditingItemKey(null)
                }
              }
            }

            return (
              <div
                className={`${isSelected ? 'selected' : ''} item-${i} item ${canEdit ? 'edit-mode' : ''}`}
                key={key}
                onClick={handleClick}
              >
                <span className={'index'}>{i + 1}</span>
                <span className={'label'} onClick={canEdit ? handleLabelClick : undefined} style={canEdit ? { cursor: 'text' } : {}}>
                  {iconName && config.icons[iconName] && (
                    <span className={'icon'}>
                      <img alt={iconName} src={`data:image/png;base64, ${config.icons[iconName]}`} />
                    </span>
                  )}
                  {isEditing && editFunctions ? (
                    <input
                      type="text"
                      className="edit-text-input"
                      value={editingText ?? label}
                      onClick={(e) => e.stopPropagation()}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onKeyDown={handleInputKeyDown}
                      autoFocus
                    />
                  ) : (
                    label
                  )}
                </span>
                <div className={`${helpMode && hasHelp ? 'has-help' : ''}`}></div>
                {canEdit && editFunctions && (
                  <div className="edit-controls" onClick={(e) => e.stopPropagation()}>
                    {isSelected && typeof nodeValue === 'object' && nodeValue !== null && (
                      <button
                        className="edit-add-sub-item"
                        onClick={() => editFunctions.onAddSubItem(level, i)}
                        title="Add sub-item"
                      >
                        +
                      </button>
                    )}
                    <button
                      className="edit-delete-item"
                      onClick={() => editFunctions.onDeleteItem(level, i)}
                      title="Delete item"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            )
          })}
          {editMode && isDeepestLevel && editFunctions && (
            <div className="edit-add-top-level">
              <button
                className="edit-add-top-level-button"
                onClick={() => editFunctions.onAddTopLevelItem()}
                title="Add item"
              >
                + Add Item
              </button>
            </div>
          )}
        </div>
      </div>
      {nodeKeys.map((key, index) => {
        const value = node[key]
        const isSelected = selected[level] === index
        const shouldRenderNextLevel = isSelected && (
          (value instanceof Object && value !== null) ||
          (editMode && level === deepestLevel - 1)
        )
        return shouldRenderNextLevel
          ? render(
              config,
              value instanceof Object && value !== null ? value : { __order__: [] },
              key,
              level + 1,
              selected,
              setSelected,
              `${classNames} ${level === 0 ? `category-${index}` : ''}`,
              helpMap,
              helpMode,
              onHelpClick,
              [...currentPath, key.replace(/<i name="[^"]+"\/>/g, '')],
              editMode,
              editFunctions,
              editingItemKey,
              setEditingItemKey,
              editingText,
              setEditingText,
            )
          : null
      })}
    </>
  )
}

const setSelected = (update: UpdateFn, memo: Array<number>) => (level: number, index: number) => {
  const updated = memo.slice()
  updated.splice(level, updated.length - level, index)
  update(updated)
}

type UpdateFn = (memo: Array<number>) => void

const crumbPath = (structure: Record<string, any>, selected: Array<number>) => {
  const res = selected.reduce(
    (
      [result, current]: [Array<JSX.Element>, Record<string, any>],
      index: number,
    ): [Array<JSX.Element>, Record<string, any>] => {
      const currentKeys = Array.isArray(current.__order__) ? current.__order__ : Object.keys(current).filter(k => k !== '__order__')
      const currentKey = currentKeys[index]
      if (!currentKey) {
        return [result, current]
      }
      const label = currentKey.replace(/<i name="[^"]+"\/>/g, '')
      return [
        [
          ...result,
          <div className={'crumb'} key={currentKey}>
            {label}
          </div>,
          <div className={'crumb-separator'}></div>,
        ],
        current[currentKey],
      ]
    },
    [[], structure],
  )
  return (
    <div className="scroll-container crumb-path">
      <div className={'container'}>
        <div className={'crumb-separator'}></div>
        {res[0]}
      </div>
    </div>
  )
}

const renderSearch = (
  structure: Record<string, any>,
  searchString: string,
  path: Array<number>,
  keys: Array<string>,
  select: UpdateFn,
  config: { icons: Record<string, string> },
): JSX.Element[] => {
  const renderKey = (key: string) => {
    const label = key.replace(/<i name="[^"]+"\/>/g, '')
    return <span>{label}</span>
  }

  const structureKeys = Array.isArray(structure.__order__) ? structure.__order__ : Object.keys(structure).filter(k => k !== '__order__')
  return [
    ...structureKeys.map((key, index) =>
      key.toLowerCase().includes(searchString.toLowerCase()) ? (
        <div key={key} onClick={() => select([...path, index])}>
          {[...keys.map((k) => renderKey(k)), renderKey(key)].map((rendered, i) => (
            <>
              <span key={i}>{rendered}</span>
              <span className={'search-crumb-separator'}></span>
            </>
          ))}
        </div>
      ) : null,
    ),
    ...structureKeys.map((key, i) => {
      const value = structure[key]
      return value instanceof Object ? renderSearch(value, searchString, [...path, i], [...keys, key], select, config) : []
    }),
  ].filter(Boolean) as JSX.Element[]
}

function App() {
  const [customCameras, setCustomCameras] = useState<CustomCamera[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [cameraName, setCameraName] = useState('')
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [settingsCameraName, setSettingsCameraName] = useState('')

  const loadCustomCameras = async () => {
    try {
      const cameras = await getAllCustomCameras()
      setCustomCameras(cameras)

      cameras.forEach((camera) => {
        cameraCsvs[camera.id] = camera.csvContent
        cameraDisplayNames[camera.id] = camera.displayName
        cameraCssFiles[camera.id] = camera.cssFileName

        if (camera.brand) {
          cameraBrands[camera.id] = camera.brand
        }
        if (camera.model) {
          cameraModels[camera.id] = camera.model
        }

        const allRows = parseCSVRows(camera.csvContent)
        const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
        if (configRowIndex >= 0) {
          const configRows = allRows.slice(configRowIndex + 1)
          for (const row of configRows) {
            if (row.length === 0) continue
            if (row[0] === 'brand' && row.length > 1) {
              cameraBrands[camera.id] = row[1].trim()
            } else if (row[0] === 'model' && row.length > 1) {
              cameraModels[camera.id] = row[1].trim()
            }
          }
        }

        if (!cameraBrands[camera.id]) {
          const parts = camera.displayName.split(' ')
          if (parts.length > 1) {
            cameraBrands[camera.id] = parts[0]
            cameraModels[camera.id] = parts.slice(1).join(' ')
          } else {
            cameraBrands[camera.id] = camera.displayName
            cameraModels[camera.id] = ''
          }
        }
        if (!cameraModels[camera.id]) {
          cameraModels[camera.id] = ''
        }

        const cssBlob = new Blob([camera.cssContent], { type: 'text/css' })
        const cssUrl = URL.createObjectURL(cssBlob)
        customCameraCssBlobs[camera.id] = cssUrl
      })
    } catch (error) {
      console.error('Failed to load custom cameras:', error)
    }
  }

  useEffect(() => {
    loadCustomCameras()

    return () => {
      Object.values(customCameraCssBlobs).forEach((url) => {
        URL.revokeObjectURL(url)
      })
    }
  }, [])

  const handleFileSelect = (file: File) => {
    if (file.type === 'application/zip' || file.name.endsWith('.zip')) {
      setUploadFile(file)
      setUploadError(null)
    } else {
      setUploadError('Please select a ZIP file')
    }
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleUpload = async () => {
    if (!uploadFile) {
      setUploadError('Please select a ZIP file')
      return
    }

    setIsUploading(true)
    setUploadError(null)

    try {
      const customCamera = await createCustomCameraFromZip(uploadFile, cameraName || undefined)
      await saveCustomCamera(customCamera)

      cameraCsvs[customCamera.id] = customCamera.csvContent
      cameraDisplayNames[customCamera.id] = customCamera.displayName
      cameraCssFiles[customCamera.id] = customCamera.cssFileName

      if (customCamera.brand) {
        cameraBrands[customCamera.id] = customCamera.brand
      }
      if (customCamera.model) {
        cameraModels[customCamera.id] = customCamera.model
      }

      const allRows = parseCSVRows(customCamera.csvContent)
      const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
      if (configRowIndex >= 0) {
        const configRows = allRows.slice(configRowIndex + 1)
        for (const row of configRows) {
          if (row.length === 0) continue
          if (row[0] === 'brand' && row.length > 1) {
            cameraBrands[customCamera.id] = row[1].trim()
          } else if (row[0] === 'model' && row.length > 1) {
            cameraModels[customCamera.id] = row[1].trim()
          }
        }
      }

      if (!cameraBrands[customCamera.id]) {
        const parts = customCamera.displayName.split(' ')
        if (parts.length > 1) {
          cameraBrands[customCamera.id] = parts[0]
          cameraModels[customCamera.id] = parts.slice(1).join(' ')
        } else {
          cameraBrands[customCamera.id] = customCamera.displayName
          cameraModels[customCamera.id] = ''
        }
      }
      if (!cameraModels[customCamera.id]) {
        cameraModels[customCamera.id] = ''
      }

      const cssBlob = new Blob([customCamera.cssContent], { type: 'text/css' })
      const cssUrl = URL.createObjectURL(cssBlob)
      customCameraCssBlobs[customCamera.id] = cssUrl

      setCustomCameras((prev) => [...prev, customCamera])

      _setSelectedCamera(customCamera.id)
      _setCameraData(cameraSettings(customCamera.id))

      setIsUploadModalOpen(false)
      setUploadFile(null)
      setCameraName('')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Failed to upload camera')
      console.error('Upload error:', error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleCloseModal = () => {
    if (!isUploading) {
      setIsUploadModalOpen(false)
      setUploadFile(null)
      setCameraName('')
      setUploadError(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleDeleteCamera = async (cameraId: string) => {
    try {
      await deleteCustomCamera(cameraId)
      delete cameraCsvs[cameraId]
      delete cameraBrands[cameraId]
      delete cameraModels[cameraId]
      delete cameraDisplayNames[cameraId]
      delete cameraCssFiles[cameraId]
      if (customCameraCssBlobs[cameraId]) {
        URL.revokeObjectURL(customCameraCssBlobs[cameraId])
        delete customCameraCssBlobs[cameraId]
      }
      setCustomCameras((prev) => prev.filter((c) => c.id !== cameraId))

      if (selectedCamera === cameraId) {
        const availableCameras = Object.keys(cameraCsvs)
        if (availableCameras.length > 0) {
          _setSelectedCamera(availableCameras[0])
          _setCameraData(cameraSettings(availableCameras[0]))
        }
      }
    } catch (error) {
      console.error('Failed to delete camera:', error)
    }
  }

  const handleDownloadCamera = async (cameraId: string) => {
    try {
      const customCamera = customCameras.find((c) => c.id === cameraId)

      if (customCamera) {
        const cameraData: CameraDownloadData = {
          csvContent: customCamera.csvContent,
          cssContent: customCamera.cssContent,
          cssFileName: customCamera.cssFileName,
          iconData: customCamera.iconData,
        }
        await downloadCameraAsZip(cameraData)
      } else {
        const csvContent = cameraCsvs[cameraId]
        if (!csvContent) {
          console.error('Camera CSV not found')
          return
        }

        const cssFileName = cameraCssFiles[cameraId] || cameraId
        const cssContent = cssRawMap[cssFileName]

        if (!cssContent) {
          console.error('Camera CSS not found')
          return
        }

        const cameraData: CameraDownloadData = {
          csvContent,
          cssContent,
          cssFileName,
        }
        await downloadCameraAsZip(cameraData)
      }
    } catch (error) {
      console.error('Failed to download camera:', error)
    }
  }

  const handleOpenSettings = () => {
    const currentDisplayName = cameraDisplayNames[selectedCamera] || getCameraLabel(selectedCamera)
    setSettingsCameraName(currentDisplayName)
    setIsSettingsModalOpen(true)
  }

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false)
    setSettingsCameraName('')
  }

  const handleRenameCamera = async () => {
    const newName = settingsCameraName.trim()
    if (!newName) {
      return
    }

    const currentCamera = customCameras.find((c) => c.id === selectedCamera)
    const isCustom = !!currentCamera

    if (isCustom) {
      const parts = newName.split(' ')
      let brand = currentCamera.brand
      let model = currentCamera.model

      if (parts.length > 1) {
        brand = parts[0]
        model = parts.slice(1).join(' ')
      } else {
        brand = newName
        model = ''
      }

      const updatedCamera: CustomCamera = {
        ...currentCamera,
        displayName: newName,
        brand,
        model,
      }

      const allRows = parseCSVRows(updatedCamera.csvContent)
      const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
      
      if (configRowIndex >= 0) {
        const beforeConfig = updatedCamera.csvContent.substring(0, configRowIndex + 'camera_menu_config'.length + 1)
        const afterConfig = updatedCamera.csvContent.substring(configRowIndex + 'camera_menu_config'.length + 1)
        const configLines = afterConfig.split('\n')

        let brandLineIndex = -1
        let modelLineIndex = -1
        let displayNameLineIndex = -1

        for (let i = 0; i < configLines.length; i++) {
          if (configLines[i].startsWith('brand,')) {
            brandLineIndex = i
          } else if (configLines[i].startsWith('model,')) {
            modelLineIndex = i
          } else if (configLines[i].startsWith('display_name,')) {
            displayNameLineIndex = i
          }
        }

        if (brand) {
          if (brandLineIndex !== -1) {
            configLines[brandLineIndex] = `brand,"${brand.replace(/"/g, '""')}"`
          } else {
            configLines.unshift(`brand,"${brand.replace(/"/g, '""')}"`)
          }
        }

        if (model !== undefined) {
          if (modelLineIndex !== -1) {
            configLines[modelLineIndex] = `model,"${model.replace(/"/g, '""')}"`
          } else {
            const insertIndex = brandLineIndex !== -1 ? brandLineIndex + 1 : 0
            configLines.splice(insertIndex, 0, `model,"${model.replace(/"/g, '""')}"`)
          }
        }

        if (displayNameLineIndex !== -1) {
          configLines[displayNameLineIndex] = `display_name,"${newName.replace(/"/g, '""')}"`
        } else {
          configLines.push(`display_name,"${newName.replace(/"/g, '""')}"`)
        }

        updatedCamera.csvContent = beforeConfig + configLines.join('\n')
      }

      await saveCustomCamera(updatedCamera)
      setCustomCameras((prev) => prev.map((c) => (c.id === updatedCamera.id ? updatedCamera : c)))
      
      cameraCsvs[updatedCamera.id] = updatedCamera.csvContent
      cameraDisplayNames[updatedCamera.id] = updatedCamera.displayName
      if (updatedCamera.brand) {
        cameraBrands[updatedCamera.id] = updatedCamera.brand
      }
      if (updatedCamera.model) {
        cameraModels[updatedCamera.id] = updatedCamera.model
      }

      _setCameraData(cameraSettings(updatedCamera.id))
    } else {
      const parts = newName.split(' ')
      let brand = cameraBrands[selectedCamera]
      let model = cameraModels[selectedCamera]

      if (parts.length > 1) {
        brand = parts[0]
        model = parts.slice(1).join(' ')
      } else {
        brand = newName
        model = ''
      }

      const csvContent = cameraCsvs[selectedCamera]
      const cssFileName = cameraCssFiles[selectedCamera] || selectedCamera
      const cssContent = cssRawMap[cssFileName] || ''

      const allRows = parseCSVRows(csvContent)
      const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
      
      let newCsvContent = csvContent
      if (configRowIndex >= 0) {
        const beforeConfig = csvContent.substring(0, configRowIndex + 'camera_menu_config'.length + 1)
        const afterConfig = csvContent.substring(configRowIndex + 'camera_menu_config'.length + 1)
        const configLines = afterConfig.split('\n')

        let brandLineIndex = -1
        let modelLineIndex = -1
        let displayNameLineIndex = -1

        for (let i = 0; i < configLines.length; i++) {
          if (configLines[i].startsWith('brand,')) {
            brandLineIndex = i
          } else if (configLines[i].startsWith('model,')) {
            modelLineIndex = i
          } else if (configLines[i].startsWith('display_name,')) {
            displayNameLineIndex = i
          }
        }

        if (brand) {
          if (brandLineIndex !== -1) {
            configLines[brandLineIndex] = `brand,"${brand.replace(/"/g, '""')}"`
          } else {
            configLines.unshift(`brand,"${brand.replace(/"/g, '""')}"`)
          }
        }

        if (model !== undefined) {
          if (modelLineIndex !== -1) {
            configLines[modelLineIndex] = `model,"${model.replace(/"/g, '""')}"`
          } else {
            const insertIndex = brandLineIndex !== -1 ? brandLineIndex + 1 : 0
            configLines.splice(insertIndex, 0, `model,"${model.replace(/"/g, '""')}"`)
          }
        }

        if (displayNameLineIndex !== -1) {
          configLines[displayNameLineIndex] = `display_name,"${newName.replace(/"/g, '""')}"`
        } else {
          configLines.push(`display_name,"${newName.replace(/"/g, '""')}"`)
        }

        newCsvContent = beforeConfig + configLines.join('\n')
      } else {
        const configLines = []
        if (brand) configLines.push(`brand,"${brand.replace(/"/g, '""')}"`)
        if (model !== undefined) configLines.push(`model,"${model.replace(/"/g, '""')}"`)
        configLines.push(`display_name,"${newName.replace(/"/g, '""')}"`)
        newCsvContent = csvContent.trim() + '\ncamera_menu_config,\n' + configLines.map(line => line).join('\n') + '\n'
      }

      const cameraId = `custom-${Date.now()}-${Math.random().toString(36).substring(7)}`
      const newCamera: CustomCamera = {
        id: cameraId,
        displayName: newName,
        brand,
        model,
        csvContent: newCsvContent,
        cssContent,
        cssFileName,
        createdAt: Date.now(),
      }

      await saveCustomCamera(newCamera)
      setCustomCameras((prev) => [...prev, newCamera])

      cameraCsvs[newCamera.id] = newCamera.csvContent
      cameraDisplayNames[newCamera.id] = newCamera.displayName
      cameraCssFiles[newCamera.id] = newCamera.cssFileName
      if (newCamera.brand) {
        cameraBrands[newCamera.id] = newCamera.brand
      }
      if (newCamera.model) {
        cameraModels[newCamera.id] = newCamera.model
      }

      const cssBlob = new Blob([newCamera.cssContent], { type: 'text/css' })
      const cssUrl = URL.createObjectURL(cssBlob)
      customCameraCssBlobs[newCamera.id] = cssUrl

      _setSelectedCamera(newCamera.id)
      _setCameraData(cameraSettings(newCamera.id))
    }

    setIsSettingsModalOpen(false)
    setSettingsCameraName('')
  }

  const cameraSettings = (camera: string) => {
    if (!camera) return { data: {}, config: { icons: {} }, helpMap: {} }

    const data: Record<string, any> = { __order__: [] }
    const helpMap: Record<string, string> = {}

    const config: { icons: Record<string, string>; brand?: string; model?: string; displayName?: string; cssFile?: string } = { icons: {} }
    const csvContent = cameraCsvs[camera]
    if (!csvContent) return { data: {}, config: { icons: {} }, helpMap: {} }
    
    const allRows = parseCSVRows(csvContent)
    if (allRows.length === 0) return { data: {}, config: { icons: {} }, helpMap: {} }
    
    const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
    const menuRows = configRowIndex >= 0 ? allRows.slice(1, configRowIndex) : allRows.slice(1)
    const configRows = configRowIndex >= 0 ? allRows.slice(configRowIndex + 1) : []

    let previousRowCells: string[] = []
    let hasHelpColumn = false
    let helpColumnIndex = -1

    if (menuRows.length > 0) {
      for (const row of menuRows) {
        if (row.length === 0 || row.every((cell) => cell.trim() === '')) {
          continue
        }

        if (row[0] === 'camera_menu_config') {
          break
        }

        const lastColumnIndex = row.length - 1
        const lastColumnValue = row[lastColumnIndex]?.trim() || ''

        if (lastColumnValue !== '') {
          let hasEmptyBeforeLast = false
          for (let i = lastColumnIndex - 1; i > 0; i--) {
            if (row[i]?.trim() === '') {
              hasEmptyBeforeLast = true
              break
            }
          }

          if (hasEmptyBeforeLast) {
            hasHelpColumn = true
            helpColumnIndex = lastColumnIndex
            break
          }
        }
      }
    }

    for (const row of menuRows) {
      if (row.length === 0 || row[0] === 'camera_menu_config') {
        break
      }

      const currentRowCells = row

      fillEmptyCellsFromPreviousRow(currentRowCells)

      let helpText: string | undefined = undefined
      let cellsForProcessing = currentRowCells

      if (helpColumnIndex > 0 && helpColumnIndex < currentRowCells.length) {
        helpText = currentRowCells[helpColumnIndex]?.trim() || undefined
        if (helpText) {
          cellsForProcessing = currentRowCells.slice(0, helpColumnIndex)
        }
      }

      const filledLine = cellsForProcessing.join(',')
      if (filledLine.trim() !== '') {
        if (hasHelpColumn && helpText) {
          const pathParts: string[] = []
          let current: Record<string, any> = data
          if (!current.__order__) {
            current.__order__ = []
          }
          const allCells = cellsForProcessing.filter((c) => c.trim() !== '')

          for (let i = 0; i < allCells.length; i++) {
            const cell = allCells[i].trim()
            if (cell !== '') {
              const cellLabel = cell.replace(/<i name="[^"]+"\/>/g, '')
              pathParts.push(cellLabel)
              if (i < allCells.length - 1) {
                if (!current[cell]) {
                  current[cell] = { __order__: [] }
                }
                if (Array.isArray(current.__order__) && !current.__order__.includes(cell)) {
                  current.__order__.push(cell)
                }
                current = current[cell] as Record<string, any>
                if (!current.__order__) {
                  current.__order__ = []
                }
              } else {
                if (!current[cell]) {
                  current[cell] = { __order__: [] }
                }
                if (Array.isArray(current.__order__) && !current.__order__.includes(cell)) {
                  current.__order__.push(cell)
                }
                helpMap[pathParts.join(' > ')] = helpText
              }
            }
          }
        } else {
          process(data, filledLine)
        }
      }

      previousRowCells = currentRowCells
    }

    for (const row of configRows) {
      if (row.length === 0) continue
      
      if (row[0] === 'brand' && row.length > 1) {
        config.brand = row[1].trim()
      } else if (row[0] === 'model' && row.length > 1) {
        config.model = row[1].trim()
      } else if (row[0] === 'display_name' && row.length > 1) {
        config.displayName = row[1].trim()
      } else if (row[0] === 'css_file' && row.length > 1) {
        config.cssFile = row[1].trim()
      } else if (row[0]?.startsWith('icon')) {
        if (row[0].startsWith('icon:')) {
          const colonIndex = row[0].indexOf(':')
          const commaIndex = row[0].indexOf(',')
          if (colonIndex !== -1 && commaIndex !== -1) {
            const iconName = row[0].substring(colonIndex + 1, commaIndex)
            const iconValue = row.length > 1 ? row[1] : row[0].substring(commaIndex + 1)
            config.icons[iconName] = iconValue
          } else if (colonIndex !== -1 && row.length > 1) {
            const iconName = row[0].substring(colonIndex + 1)
            config.icons[iconName] = row[1]
          }
        } else {
          const commaIndex = row[0].indexOf(',')
          if (commaIndex !== -1 && row.length > 1) {
            config.icons[row[0].substring(5, commaIndex)] = row[1] || row[0].substring(commaIndex + 1)
          }
        }
      }
    }

    return { data, config, helpMap }

    function fillEmptyCellsFromPreviousRow(currentRowCells: string[]) {
      if (previousRowCells.length > 0) {
        for (let i = 0; i < helpColumnIndex; i++) {
          const isEmpty = currentRowCells[i]?.trim() === ''
          const hasLaterValues = currentRowCells.some(
            (cell, index) => index > i && index < helpColumnIndex && cell?.trim() !== '',
          )

          if (isEmpty && hasLaterValues && i < previousRowCells.length && previousRowCells[i]?.trim() !== '') {
            currentRowCells[i] = previousRowCells[i]
          }
        }
      }
    }
  }

  const getInitialCamera = () => {
    const params = new URLSearchParams(window.location.search)
    const cameraParam = params.get('camera')
    if (cameraParam && cameraCsvs[cameraParam]) {
      return cameraParam
    }
    return Object.keys(cameraCsvs)[0] || ''
  }

  const [selectedCamera, _setSelectedCamera] = useState(getInitialCamera())
  const [cameraData, _setCameraData] = useState(cameraSettings(selectedCamera))
  const data = cameraData.data
  const config = cameraData.config
  const helpMap = cameraData.helpMap || {}
  const [selected, _setSelected] = useState([0, 0])
  const [searchString, setSearchString] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [helpMode, setHelpMode] = useState(false)
  const [helpModalOpen, setHelpModalOpen] = useState(false)
  const [helpModalContent, setHelpModalContent] = useState<{ text: string; path: string } | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [editingData, setEditingData] = useState<Record<string, any> | null>(null)
  const [editingItemKey, setEditingItemKey] = useState<string | null>(null)
  const [editingText, setEditingText] = useState<string>('')

  const handleSearchBlur = () => {
    setTimeout(() => {
      const activeElement = document.activeElement
      if (!activeElement || !activeElement.closest('.search-group')) {
        setIsSearchFocused(false)
      }
    }, 200)
  }

  useEffect(() => {
    const cssFile = config.cssFile || cameraCssFiles[selectedCamera] || selectedCamera
    const linkId = 'camera-specific-css'

    let link = document.getElementById(linkId) as HTMLLinkElement

    if (!link) {
      link = document.createElement('link')
      link.id = linkId
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }

    const cssUrl = customCameraCssBlobs[selectedCamera] || cssFileMap[cssFile]
    if (cssUrl) {
      link.href = cssUrl
    }
  }, [selectedCamera, config.cssFile])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (selectedCamera) {
      params.set('camera', selectedCamera)
    } else {
      params.delete('camera')
    }
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', newUrl)
  }, [selectedCamera])

  const select = setSelected(_setSelected, selected)

  const allCameras = Object.keys(cameraCsvs)
  const isCustomCamera = (cameraId: string) => customCameras.some((c) => c.id === cameraId)

  const getCameraLabel = (cameraId: string) => {
    const brand = cameraBrands[cameraId] || ''
    const model = cameraModels[cameraId] || ''
    if (brand && model) {
      return `${brand} ${model}`.trim()
    }
    return cameraDisplayNames[cameraId] || cameraId
  }

  const camerasByBrand = allCameras.reduce((acc, cameraId) => {
    const brand = cameraBrands[cameraId] || 'Other'
    if (!acc[brand]) {
      acc[brand] = []
    }
    acc[brand].push(cameraId)
    return acc
  }, {} as Record<string, string[]>)

  Object.keys(camerasByBrand).forEach((brand) => {
    camerasByBrand[brand].sort((a, b) => {
      const labelA = getCameraLabel(a)
      const labelB = getCameraLabel(b)
      return labelA.localeCompare(labelB)
    })
  })

  const handleHelpClick = (helpText: string, path: string) => {
    setHelpModalContent({ text: helpText, path })
    setHelpModalOpen(true)
  }

  const getNodeAtPath = (data: Record<string, any>, path: number[]): Record<string, any> | null => {
    let current = data
    for (const index of path) {
      const keys = Array.isArray(current.__order__) ? current.__order__ : Object.keys(current).filter(k => k !== '__order__')
      if (index >= keys.length) return null
      const key = keys[index]
      current = current[key]
      if (!current || typeof current !== 'object') return null
    }
    return current
  }

  const handleEditText = (level: number, index: number, newText: string) => {
    if (!editingData) return
    
    const path = selected.slice(0, level)
    const parent = path.length > 0 ? getNodeAtPath(editingData, path) : editingData
    if (!parent) return

    const keys = Array.isArray(parent.__order__) ? parent.__order__ : Object.keys(parent).filter(k => k !== '__order__')
    if (index >= keys.length) return

    const oldKey = keys[index]
    const value = parent[oldKey]
    const iconMatch = oldKey.match(/<i name="([^"]+)"\/>/)
    const iconTag = iconMatch ? `<i name="${iconMatch[1]}"/>` : ''
    const newKey = iconTag ? `${iconTag}${newText}` : newText

    if (newKey !== oldKey) {
      const newData = JSON.parse(JSON.stringify(editingData))
      const newParent = path.length > 0 ? getNodeAtPath(newData, path) : newData
      if (!newParent) return

      const newKeys = Array.isArray(newParent.__order__) ? newParent.__order__ : Object.keys(newParent).filter(k => k !== '__order__')
      const oldKeyInNew = newKeys[index]
      
      delete newParent[oldKeyInNew]
      newParent[newKey] = value
      
      if (Array.isArray(newParent.__order__)) {
        newParent.__order__[index] = newKey
      }
      
      setEditingData(newData)
      if (editingItemKey === oldKey) {
        setEditingItemKey(newKey)
      }
    }
  }

  const handleAddSubItem = (level: number, index: number) => {
    if (!editingData) return
    
    const path = selected.slice(0, level + 1)
    const parentPath = path.slice(0, -1)
    const parent = parentPath.length > 0 ? getNodeAtPath(editingData, parentPath) : editingData
    if (!parent) return

    const keys = Array.isArray(parent.__order__) ? parent.__order__ : Object.keys(parent).filter(k => k !== '__order__')
    if (index >= keys.length) return

    const targetKey = keys[index]

    const newData = JSON.parse(JSON.stringify(editingData))
    const newParent = parentPath.length > 0 ? getNodeAtPath(newData, parentPath) : newData
    if (!newParent) return

    let newTarget = newParent[targetKey]
    if (typeof newTarget !== 'object' || newTarget === null || Array.isArray(newTarget)) {
      newTarget = { __order__: [] }
      newParent[targetKey] = newTarget
    }

    if (!newTarget.__order__) {
      newTarget.__order__ = []
    }
    const newKey = 'New Item'
    newTarget[newKey] = { __order__: [] }
    if (Array.isArray(newTarget.__order__)) {
      newTarget.__order__.push(newKey)
    }

    setEditingData(newData)
    _setSelected(path)
  }

  const handleAddTopLevelItem = () => {
    if (!editingData) return

    const path = selected
    const targetNode = path.length > 0 ? getNodeAtPath(editingData, path) : editingData
    if (!targetNode) return

    const newData = JSON.parse(JSON.stringify(editingData))
    const newTarget = path.length > 0 ? getNodeAtPath(newData, path) : newData
    if (!newTarget) return

    if (!newTarget.__order__) {
      newTarget.__order__ = []
    }
    const newKey = 'New Item'
    newTarget[newKey] = { __order__: [] }
    if (Array.isArray(newTarget.__order__)) {
      newTarget.__order__.push(newKey)
    }

    setEditingData(newData)
    _setSelected(path)
  }

  const handleDeleteItem = (level: number, index: number) => {
    if (!editingData) return

    const path = selected.slice(0, level)
    const parent = path.length > 0 ? getNodeAtPath(editingData, path) : editingData
    if (!parent) return

    const keys = Array.isArray(parent.__order__) ? parent.__order__ : Object.keys(parent).filter(k => k !== '__order__')
    if (index >= keys.length) return

    const keyToDelete = keys[index]
    const newData = JSON.parse(JSON.stringify(editingData))
    const newParent = path.length > 0 ? getNodeAtPath(newData, path) : newData
    if (!newParent) return

    delete newParent[keyToDelete]
    if (Array.isArray(newParent.__order__)) {
      newParent.__order__ = newParent.__order__.filter((k: string) => k !== keyToDelete)
    }

    setEditingData(newData)
    
    const newKeys = Array.isArray(newParent.__order__) ? newParent.__order__ : Object.keys(newParent).filter(k => k !== '__order__')
    
    if (newKeys.length === 0 && path.length > 0) {
      _setSelected(path.slice(0, -1))
    } else {
      _setSelected(path)
    }
  }

  const convertDataToCSV = (data: Record<string, any>): string => {
    const rows: string[] = []
    
    const traverse = (node: Record<string, any>, path: string[] = []) => {
      const keys = Array.isArray(node.__order__) ? node.__order__ : Object.keys(node).filter(k => k !== '__order__')
      
      for (const key of keys) {
        const value = node[key]
        const label = key.replace(/<i name="[^"]+"\/>/g, '')
        const currentPath = [...path, label]
        
        if (value && typeof value === 'object' && value !== null && !Array.isArray(value)) {
          const hasChildren = Object.keys(value).some(k => k !== '__order__')
          if (hasChildren) {
            const row = currentPath.map(p => `"${p.replace(/"/g, '""')}"`).join(',')
            rows.push(row)
            traverse(value, currentPath)
          } else {
            const row = currentPath.map(p => `"${p.replace(/"/g, '""')}"`).join(',')
            rows.push(row)
          }
        } else {
          const row = currentPath.map(p => `"${p.replace(/"/g, '""')}"`).join(',')
          rows.push(row)
        }
      }
    }
    
    traverse(data)
    return rows.join('\n')
  }

  const handleSaveEditedCamera = async (editedData: Record<string, any>) => {
    try {
      const menuCSV = convertDataToCSV(editedData)
      const existingCustomCamera = customCameras.find(c => c.id === selectedCamera)
      const isExistingCustom = !!existingCustomCamera
      
      const originalCsv = existingCustomCamera?.csvContent || cameraCsvs[selectedCamera]
      
      if (!originalCsv) {
        throw new Error('Original camera CSV not found')
      }
      
      const allRows = parseCSVRows(originalCsv)
      const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
      
      const originalBrand = cameraBrands[selectedCamera] || ''
      const originalModel = cameraModels[selectedCamera] || ''
      const originalDisplayName = cameraDisplayNames[selectedCamera] || ''
      const cssFile = cameraCssFiles[selectedCamera] || selectedCamera
      
      let updatedDisplayName = originalDisplayName
      let updatedModel = originalModel
      
      if (!isExistingCustom) {
        updatedDisplayName = `${originalDisplayName} (Edited)`
        updatedModel = originalModel ? `${originalModel} (Edited)` : '(Edited)'
      }
      
      let configSection = ''
      if (configRowIndex >= 0) {
        const configRows = allRows.slice(configRowIndex)
        const updatedConfigRows = configRows.map(row => {
          if (row.length > 0) {
            if (row[0] === 'display_name' && !isExistingCustom) {
              return ['display_name', updatedDisplayName]
            } else if (row[0] === 'model' && !isExistingCustom && originalModel) {
              return ['model', updatedModel]
            }
          }
          return row
        })
        configSection = '\n' + updatedConfigRows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\n')
      } else {
        configSection = `\ncamera_menu_config,\n`
        if (originalBrand) configSection += `brand,"${originalBrand.replace(/"/g, '""')}"\n`
        if (updatedModel) configSection += `model,"${updatedModel.replace(/"/g, '""')}"\n`
        if (updatedDisplayName) configSection += `display_name,"${updatedDisplayName.replace(/"/g, '""')}"\n`
        if (cssFile) configSection += `css_file,"${cssFile.replace(/"/g, '""')}"\n`
      }
      
      const newCsvContent = menuCSV + configSection
      
      const cssContent = existingCustomCamera?.cssContent || cssRawMap[cssFile] || ''
      const cssFileName = cssFile
      
      let iconData = existingCustomCamera?.iconData
      if (!iconData && !isExistingCustom) {
        const originalConfig = cameraSettings(selectedCamera)
        const iconEntries = Object.entries(originalConfig.config.icons)
        if (iconEntries.length > 0) {
          iconData = iconEntries[0][1]
        }
      }
      
      let customCamera: CustomCamera
      
      if (isExistingCustom) {
        customCamera = {
          ...existingCustomCamera,
          csvContent: newCsvContent,
          cssContent,
          cssFileName,
          iconData,
        }
      } else {
        const cameraId = `custom-${Date.now()}-${Math.random().toString(36).substring(7)}`
        
        customCamera = {
          id: cameraId,
          displayName: updatedDisplayName,
          brand: originalBrand,
          model: updatedModel,
          csvContent: newCsvContent,
          cssContent,
          cssFileName,
          iconData,
          createdAt: Date.now(),
        }
      }
      
      await saveCustomCamera(customCamera)
      
      cameraCsvs[customCamera.id] = customCamera.csvContent
      cameraDisplayNames[customCamera.id] = customCamera.displayName
      cameraCssFiles[customCamera.id] = customCamera.cssFileName
      
      if (customCamera.brand) {
        cameraBrands[customCamera.id] = customCamera.brand
      }
      if (customCamera.model) {
        cameraModels[customCamera.id] = customCamera.model
      }
      
      if (customCameraCssBlobs[customCamera.id]) {
        URL.revokeObjectURL(customCameraCssBlobs[customCamera.id])
      }
      const cssBlob = new Blob([customCamera.cssContent], { type: 'text/css' })
      const cssUrl = URL.createObjectURL(cssBlob)
      customCameraCssBlobs[customCamera.id] = cssUrl
      
      if (isExistingCustom) {
        setCustomCameras((prev) => prev.map(c => c.id === customCamera.id ? customCamera : c))
      } else {
        setCustomCameras((prev) => [...prev, customCamera])
      }
      
      _setSelectedCamera(customCamera.id)
      _setCameraData(cameraSettings(customCamera.id))
      setEditMode(false)
      setEditingData(null)
    } catch (error) {
      console.error('Failed to save edited camera:', error)
      alert('Failed to save edited camera. Please try again.')
    }
  }

  const editFunctions: EditFunctions = {
    onEditText: handleEditText,
    onAddSubItem: handleAddSubItem,
    onAddTopLevelItem: handleAddTopLevelItem,
    onDeleteItem: handleDeleteItem,
  }

  const hasChanges = (): boolean => {
    if (!editMode || !editingData) return false
    return JSON.stringify(editingData) !== JSON.stringify(data)
  }

  const displayData = editMode && editingData ? editingData : data

  return (
    <div className={'root'}>
      <div className={'controls-header'}>
        <div className={`control-group camera-select-group ${isSearchFocused ? 'hidden' : ''}`}>
          <div className={'camera-select-wrapper has-buttons'}>
            <select
              className={'camera-select'}
              value={selectedCamera}
              onChange={({ target: { value } }) => {
                _setSelectedCamera(value)
                _setCameraData(cameraSettings(value))
              }}
            >
              {Object.keys(camerasByBrand).sort().map((brand) => (
                <optgroup key={brand} label={brand}>
                  {camerasByBrand[brand].map((cameraId) => (
                    <option key={cameraId} value={cameraId}>
                      {getCameraLabel(cameraId)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className={'camera-select-buttons'}>
              <button
                className={'settings-camera-button'}
                onClick={handleOpenSettings}
                title="Camera settings"
                aria-label="Camera settings"
              >
                ⚙
              </button>
            </div>
          </div>
          {!editMode && (
            <button className={'upload-button'} onClick={() => setIsUploadModalOpen(true)} title="Upload camera" aria-label="Upload camera">
              ⬆
            </button>
          )}
          <button
            className={`help-mode-button ${helpMode ? 'active' : ''}`}
            onClick={() => {
              setHelpMode(!helpMode)
              if (!helpMode) setEditMode(false)
            }}
            title="Toggle help mode"
            aria-label="Toggle help mode"
          >
            ?
          </button>
          <button
            className={`edit-mode-button ${editMode ? 'active' : ''}`}
            onClick={() => {
              if (!editMode) {
                setHelpMode(false)
                setEditingData(JSON.parse(JSON.stringify(data)))
                setEditMode(true)
                setEditingItemKey(null)
                setEditingText('')
              } else {
                setEditMode(false)
                setEditingItemKey(null)
                setEditingText('')
              }
            }}
            title="Toggle edit mode"
            aria-label="Toggle edit mode"
          >
            {editMode ? '↶' : '✎'}
          </button>
          {editMode && (
            <button
              className="save-edit-button"
              onClick={async () => {
                if (editingData) {
                  await handleSaveEditedCamera(editingData)
                }
              }}
              disabled={!hasChanges()}
              title="Save edited camera"
              aria-label="Save edited camera"
            >
              <img src="/camera-menu/assets/SaveIcon.svg" alt="" />
            </button>
          )}
        </div>
        {!editMode && (
          <div className={`control-group search-group ${isSearchFocused ? 'expanded' : ''}`}>
          <div className={'search-container'}>
            <span className={'search-icon'}>⌕</span>
            <input
              className={'search-input'}
              type="text"
              placeholder="Search menu items..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={handleSearchBlur}
            />
            {searchString !== '' && (
              <button className={'search-clear'} onClick={() => setSearchString('')} aria-label="Clear search">
                ×
              </button>
            )}
          </div>
          {searchString !== '' && (
            <div className={'search-results'}>{renderSearch(data, searchString, [], [], _setSelected, config)}</div>
          )}
        </div>
        )}
      </div>
      <div className={'wrapper'}>
        <div
          className={`menu scroll-container ${Array.from({ length: selected.length })
            .map((_, i) => `level-${i}-open`)
            .join(' ')}`}
        >
          <div className={'container'}>
            {crumbPath(displayData, selected)}
            {render(config, displayData, undefined, 0, selected, select, '', helpMap, helpMode, handleHelpClick, [], editMode, editMode ? editFunctions : undefined, editingItemKey, setEditingItemKey, editingText, setEditingText)}
            <div className={'nav-buttons'}>
              <div className={'back-button'} onClick={() => _setSelected(selected.slice(0, -1))}></div>
            </div>
          </div>
        </div>
      </div>
      {isUploadModalOpen && (
        <div className={'modal-overlay'} onClick={handleCloseModal}>
          <div className={'modal-content'} onClick={(e) => e.stopPropagation()}>
            <div className={'modal-header'}>
              <h2>Upload Camera</h2>
              <button className={'modal-close'} onClick={handleCloseModal} disabled={isUploading}>
                ×
              </button>
            </div>
            <div className={'modal-body'}>
              <div className={'form-group'}>
                <label htmlFor="camera-name-input">Camera Name</label>
                <input
                  id="camera-name-input"
                  type="text"
                  className={'camera-name-input'}
                  value={cameraName}
                  onChange={(e) => setCameraName(e.target.value)}
                  placeholder="Enter camera model name"
                  disabled={isUploading}
                />
              </div>
              <div className={'form-group'}>
                <label>ZIP File</label>
                <div
                  className={`drop-area ${isDragging ? 'dragging' : ''} ${uploadFile ? 'has-file' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".zip"
                    onChange={handleFileInputChange}
                    style={{ display: 'none' }}
                    id="camera-upload-input"
                    disabled={isUploading}
                  />
                  {uploadFile ? (
                    <div className={'file-selected'}>
                      <span className={'file-name'}>{uploadFile.name}</span>
                      <button
                        className={'remove-file-button'}
                        onClick={() => {
                          setUploadFile(null)
                          if (fileInputRef.current) {
                            fileInputRef.current.value = ''
                          }
                        }}
                        disabled={isUploading}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className={'drop-area-content'}>
                      <img src="/camera-menu/assets/UploadLargeIcon.svg" alt="" />
                      <p>Drag and drop a ZIP file here, or</p>
                      <label htmlFor="camera-upload-input" className={'browse-button'}>
                        Browse
                      </label>
                      <p className={'file-hint'}>ZIP file containing CSV, CSS, and optional PNG files</p>
                    </div>
                  )}
                </div>
              </div>
              {uploadError && <div className={'upload-error'}>{uploadError}</div>}
            </div>
            <div className={'modal-footer'}>
              <button className={'modal-cancel-button'} onClick={handleCloseModal} disabled={isUploading}>
                Cancel
              </button>
              <button className={'modal-upload-button'} onClick={handleUpload} disabled={!uploadFile || isUploading}>
                {isUploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </div>
        </div>
      )}
      {helpModalOpen && helpModalContent && (
        <div className={'modal-overlay'} onClick={() => setHelpModalOpen(false)}>
          <div className={'modal-content'} onClick={(e) => e.stopPropagation()}>
            <div className={'modal-header'}>
              <h2>Help</h2>
              <button className={'modal-close'} onClick={() => setHelpModalOpen(false)}>
                ×
              </button>
            </div>
            <div className={'modal-body'}>
              <div className={'help-path'}>{helpModalContent.path.replace(/<i name="[^"]+"\/>/g, '')}</div>
              <div className={'help-text'}>{helpModalContent.text}</div>
            </div>
            <div className={'modal-footer'}>
              <button className={'modal-cancel-button'} onClick={() => setHelpModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {isSettingsModalOpen && (
        <div className={'modal-overlay'} onClick={handleCloseSettingsModal}>
          <div className={'modal-content'} onClick={(e) => e.stopPropagation()}>
            <div className={'modal-header'}>
              <h2>Camera Settings</h2>
              <button className={'modal-close'} onClick={handleCloseSettingsModal}>
                ×
              </button>
            </div>
            <div className={'modal-body'}>
              <div className={'form-group'}>
                <label htmlFor="settings-camera-name-input">Camera Name</label>
                <input
                  id="settings-camera-name-input"
                  type="text"
                  className={'camera-name-input'}
                  value={settingsCameraName}
                  onChange={(e) => setSettingsCameraName(e.target.value)}
                  placeholder="Enter camera model name"
                />
              </div>
              <div className={'form-group'}>
                <button
                  className={'modal-upload-button'}
                  onClick={handleRenameCamera}
                  disabled={!settingsCameraName.trim() || settingsCameraName.trim() === (cameraDisplayNames[selectedCamera] || getCameraLabel(selectedCamera))}
                  style={{ width: '100%', marginBottom: '12px' }}
                >
                  Rename
                </button>
                {isCustomCamera(selectedCamera) && (
                  <button
                    className={'modal-delete-button'}
                    onClick={async () => {
                      if (confirm('Are you sure you want to delete this camera?')) {
                        await handleDeleteCamera(selectedCamera)
                        setIsSettingsModalOpen(false)
                      }
                    }}
                    style={{ width: '100%', marginBottom: '12px' }}
                  >
                    Delete
                  </button>
                )}
                <button
                  className={'modal-upload-button'}
                  onClick={async () => {
                    await handleDownloadCamera(selectedCamera)
                  }}
                  style={{ width: '100%' }}
                >
                  Download
                </button>
              </div>
            </div>
            <div className={'modal-footer'}>
              <button className={'modal-cancel-button'} onClick={handleCloseSettingsModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
