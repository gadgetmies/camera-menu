import JSZip from 'jszip'
import { CustomCamera } from './indexedDB'
import { parseCSVRows } from './csvParser'

export interface ZipFileContents {
  csvContent: string
  cssContent: string
  iconData?: string
  displayName?: string
  brand?: string
  model?: string
  cssFileName?: string
}

export const extractZipFile = async (file: File): Promise<ZipFileContents> => {
  const zip = await JSZip.loadAsync(file)
  const result: ZipFileContents = {
    csvContent: '',
    cssContent: '',
  }

  const filenamesInRoot = Object.keys(zip.files).filter((name) => !name.startsWith('__MACOSX/'))
  const csvFiles = filenamesInRoot.filter((name) => name.endsWith('.csv'))
  const cssFiles = filenamesInRoot.filter((name) => name.endsWith('.css'))
  const pngFiles = filenamesInRoot.filter((name) => name.toLowerCase().endsWith('.png'))

  if (csvFiles.length === 0) {
    throw new Error('No CSV file found in zip')
  }
  if (csvFiles.length > 1) {
    throw new Error('Multiple CSV files found in zip. Please include only one CSV file.')
  }

  if (cssFiles.length === 0) {
    throw new Error('No CSS file found in zip')
  }
  if (cssFiles.length > 1) {
    throw new Error('Multiple CSS files found in zip. Please include only one CSS file.')
  }

  const csvFile = zip.files[csvFiles[0]]
  const cssFile = zip.files[cssFiles[0]]

  let csvContent = await csvFile.async('string')
  result.cssContent = await cssFile.async('string')

  const cssFileName = cssFiles[0].replace('.css', '').split('/').pop() || ''
  result.cssFileName = cssFileName

  const configIndex = csvContent.indexOf('camera_menu_config')
  if (configIndex !== -1) {
    const beforeConfig = csvContent.substring(0, configIndex + 'camera_menu_config'.length + 1)
    const afterConfig = csvContent.substring(configIndex + 'camera_menu_config'.length + 1)
    const configLines = afterConfig.split('\n')
    
    let cssFileLineIndex = -1
    for (let i = 0; i < configLines.length; i++) {
      if (configLines[i].startsWith('css_file,')) {
        cssFileLineIndex = i
        break
      }
    }

    if (cssFileLineIndex !== -1) {
      configLines[cssFileLineIndex] = `css_file,${cssFileName}`
    } else {
      const displayNameIndex = configLines.findIndex((line) => line.startsWith('display_name,'))
      if (displayNameIndex !== -1) {
        configLines.splice(displayNameIndex + 1, 0, `css_file,${cssFileName}`)
      } else {
        configLines.unshift(`css_file,${cssFileName}`)
      }
    }

    csvContent = beforeConfig + configLines.join('\n')
  } else {
    csvContent = csvContent.trim() + '\ncamera_menu_config,\ncss_file,' + cssFileName + '\n'
  }

  result.csvContent = csvContent

  if (pngFiles.length > 0) {
    const iconFile = zip.files[pngFiles[0]]
    const iconBlob = await iconFile.async('blob')
    const base64 = await blobToBase64(iconBlob)
    result.iconData = base64
  }

  const allRows = parseCSVRows(result.csvContent)
  const configRowIndex = allRows.findIndex((row) => row.length > 0 && row[0] === 'camera_menu_config')
  if (configRowIndex >= 0) {
    const configRows = allRows.slice(configRowIndex + 1)
    for (const row of configRows) {
      if (row.length === 0) continue
      if (row[0] === 'brand' && row.length > 1) {
        result.brand = row[1].trim()
      } else if (row[0] === 'model' && row.length > 1) {
        result.model = row[1].trim()
      } else if (row[0] === 'display_name' && row.length > 1) {
        result.displayName = row[1].trim()
      }
    }
  }

  if (!result.displayName && result.brand && result.model) {
    result.displayName = `${result.brand} ${result.model}`.trim()
  }

  return result
}

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1]
      resolve(base64String)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export const createCustomCameraFromZip = async (file: File, customDisplayName?: string): Promise<CustomCamera> => {
  const contents = await extractZipFile(file)
  const csvFileName = Object.keys((await JSZip.loadAsync(file)).files)
    .find((name) => name.endsWith('.csv')) || 'custom'
  const cameraId = `custom-${Date.now()}-${Math.random().toString(36).substring(7)}`

  let brand = contents.brand
  let model = contents.model
  let displayName = customDisplayName?.trim()

  if (customDisplayName && !brand && !model) {
    const parts = customDisplayName.split(' ')
    if (parts.length > 1) {
      brand = parts[0]
      model = parts.slice(1).join(' ')
    } else {
      brand = customDisplayName
      model = ''
    }
  }

  if (!displayName) {
    if (brand && model) {
      displayName = `${brand} ${model}`.trim()
    } else {
      displayName = contents.displayName || csvFileName.replace('.csv', '')
    }
  }

  if (contents.csvContent) {
    const configIndex = contents.csvContent.indexOf('camera_menu_config')
    if (configIndex !== -1) {
      const beforeConfig = contents.csvContent.substring(0, configIndex + 'camera_menu_config'.length + 1)
      const afterConfig = contents.csvContent.substring(configIndex + 'camera_menu_config'.length + 1)
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
          configLines[brandLineIndex] = `brand,${brand}`
        } else {
          configLines.unshift(`brand,${brand}`)
        }
      }

      if (model !== undefined) {
        if (modelLineIndex !== -1) {
          configLines[modelLineIndex] = `model,${model}`
        } else {
          const insertIndex = brandLineIndex !== -1 ? brandLineIndex + 1 : 0
          configLines.splice(insertIndex, 0, `model,${model}`)
        }
      }

      if (displayNameLineIndex !== -1) {
        configLines[displayNameLineIndex] = `display_name,${displayName}`
      } else {
        configLines.push(`display_name,${displayName}`)
      }

      contents.csvContent = beforeConfig + configLines.join('\n')
    } else {
      const configLines = []
      if (brand) configLines.push(`brand,${brand}`)
      if (model !== undefined) configLines.push(`model,${model}`)
      configLines.push(`display_name,${displayName}`)
      contents.csvContent = contents.csvContent.trim() + '\ncamera_menu_config,\n' + configLines.join('\n') + '\n'
    }
  }

  return {
    id: cameraId,
    displayName: displayName,
    brand: brand,
    model: model,
    csvContent: contents.csvContent,
    cssContent: contents.cssContent,
    cssFileName: contents.cssFileName || csvFileName.replace('.csv', ''),
    iconData: contents.iconData,
    createdAt: Date.now(),
  }
}

