import JSZip from 'jszip'

const base64ToBlob = (base64: string, mimeType: string = 'image/png'): Blob => {
  const byteCharacters = atob(base64)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

const extractIconsFromCsv = (csvContent: string): Array<{ name: string; base64: string }> => {
  const icons: Array<{ name: string; base64: string }> = []
  const configIndex = csvContent.indexOf('camera_menu_config')
  
  if (configIndex === -1) {
    return icons
  }

  const configSection = csvContent.substring(configIndex)
  const lines = configSection.split('\n')
  
  for (const line of lines) {
    if (line.startsWith('icon:')) {
      const colonIndex = line.indexOf(':')
      const commaIndex = line.indexOf(',')
      if (colonIndex !== -1 && commaIndex !== -1) {
        const iconName = line.substring(colonIndex + 1, commaIndex)
        const base64 = line.substring(commaIndex + 1).trim()
        if (iconName && base64) {
          icons.push({ name: iconName, base64 })
        }
      }
    }
  }

  return icons
}

export interface CameraDownloadData {
  csvContent: string
  cssContent: string
  cssFileName: string
  iconData?: string
}

export const downloadCameraAsZip = async (cameraData: CameraDownloadData): Promise<void> => {
  const zip = new JSZip()

  const csvFileName = `${cameraData.cssFileName}.csv`
  const cssFileName = `${cameraData.cssFileName}.css`

  zip.file(csvFileName, cameraData.csvContent)
  zip.file(cssFileName, cameraData.cssContent)

  const icons = extractIconsFromCsv(cameraData.csvContent)

  if (cameraData.iconData) {
    const iconBlob = base64ToBlob(cameraData.iconData)
    zip.file('icon.png', iconBlob)
  }

  for (const icon of icons) {
    try {
      const iconBlob = base64ToBlob(icon.base64)
      zip.file(`${icon.name}.png`, iconBlob)
    } catch (error) {
      console.warn(`Failed to add icon ${icon.name}:`, error)
    }
  }

  const blob = await zip.generateAsync({ type: 'blob' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${cameraData.cssFileName}.zip`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

