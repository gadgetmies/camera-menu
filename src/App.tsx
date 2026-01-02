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
  const commaPosition = value.indexOf(',')
  if (commaPosition !== -1) {
    const key = value.substring(0, commaPosition)
    if (key === '') {
      return
    }
    if (!acc[key]) {
      acc[key] = {}
    }
    process(acc[key], value.substring(commaPosition + 1))
  } else {
    acc[value] = ''
  }
}

type SetSelectedFn = (level: number, index: number) => void

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
): JSX.Element => {
  if (Object.keys(node).length === 0) {
    return <></>
  }
  return (
    <>
      <div className={`scroll-container level-${level} level`}>
        <div className={`level-${level} container ${classNames}`} key={`level-${level}-container`}>
          <div className={`level-heading`}>{parent ? parent : ''}</div>
          {Object.keys(node).map((key, i) => {
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
              if (helpMode && hasHelp && helpText && onHelpClick) {
                onHelpClick(helpText, pathString)
              } else {
                setSelected(level, i)
              }
            }

            return (
              <div
                className={`${selected[level] === i ? 'selected' : ''} item-${i} item`}
                key={key}
                onClick={handleClick}
              >
                <span className={'index'}>{i + 1}</span>
                <span className={'label'}>
                  {iconName && config.icons[iconName] && (
                    <span className={'icon'}>
                      <img alt={iconName} src={`data:image/png;base64, ${config.icons[iconName]}`} />
                    </span>
                  )}
                  {label}
                </span>
                <div className={`${helpMode && hasHelp ? 'has-help' : ''}`}></div>
              </div>
            )
          })}
        </div>
      </div>
      {Object.values(node).map((value, index) =>
        value instanceof Object && selected[level] === index
          ? render(
              config,
              value,
              Object.keys(node)[selected[level]],
              level + 1,
              selected,
              setSelected,
              `${classNames} ${level === 0 ? `category-${index}` : ''}`,
              helpMap,
              helpMode,
              onHelpClick,
              [...currentPath, Object.keys(node)[selected[level]].replace(/<i name="[^"]+"\/>/g, '')],
            )
          : null,
      )}
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
      const currentKey = Object.keys(current)[index]
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

  return [
    ...Object.keys(structure).map((key, index) =>
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
    ...Object.entries(structure).map(([key, value], i) =>
      value instanceof Object ? renderSearch(value, searchString, [...path, i], [...keys, key], select, config) : [],
    ),
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

  const cameraSettings = (camera: string) => {
    if (!camera) return { data: {}, config: { icons: {} }, helpMap: {} }

    const data = {}
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
          const allCells = cellsForProcessing.filter((c) => c.trim() !== '')

          for (let i = 0; i < allCells.length; i++) {
            const cell = allCells[i].trim()
            if (cell !== '') {
              const cellLabel = cell.replace(/<i name="[^"]+"\/>/g, '')
              pathParts.push(cellLabel)
              if (i < allCells.length - 1) {
                if (!current[cell]) {
                  current[cell] = {}
                }
                current = current[cell] as Record<string, any>
              } else {
                if (!current[cell]) {
                  current[cell] = {}
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

  return (
    <div className={'root'}>
      <div className={'controls-header'}>
        <div className={`control-group camera-select-group ${isSearchFocused ? 'hidden' : ''}`}>
          <div
            className={`camera-select-wrapper has-buttons ${isCustomCamera(selectedCamera) ? 'has-delete-button' : ''}`}
          >
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
                className={'download-camera-button'}
                onClick={() => handleDownloadCamera(selectedCamera)}
                title="Download camera files"
                aria-label="Download camera files"
              >
                ↓
              </button>
              {isCustomCamera(selectedCamera) && (
                <button
                  className={'delete-camera-button'}
                  onClick={() => handleDeleteCamera(selectedCamera)}
                  title="Delete custom camera"
                  aria-label="Delete custom camera"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          <button className={'upload-button'} onClick={() => setIsUploadModalOpen(true)}>
            Upload
          </button>
          <button
            className={`help-mode-button ${helpMode ? 'active' : ''}`}
            onClick={() => setHelpMode(!helpMode)}
            title="Toggle help mode"
            aria-label="Toggle help mode"
          >
            ?
          </button>
        </div>
        <div className={`control-group search-group ${isSearchFocused ? 'expanded' : ''}`}>
          <div className={'search-container'}>
            <svg
              className={'search-icon'}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 10.5L9.5 8.5M10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
      </div>
      <div className={'wrapper'}>
        <div
          className={`menu scroll-container ${Array.from({ length: selected.length })
            .map((_, i) => `level-${i}-open`)
            .join(' ')}`}
        >
          <div className={'container'}>
            {crumbPath(data, selected)}
            {render(config, data, undefined, 0, selected, select, '', helpMap, helpMode, handleHelpClick)}
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
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
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
              <div className={'help-path'}>{helpModalContent.path}</div>
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
    </div>
  )
}

export default App
