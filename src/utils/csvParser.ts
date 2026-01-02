export function parseCSVLine(line: string): string[] {
  const cells: string[] = []
  let currentCell = ''
  let inQuotes = false
  let i = 0

  while (i < line.length) {
    const char = line[i]
    const nextChar = i + 1 < line.length ? line[i + 1] : null

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentCell += '"'
        i += 2
        continue
      } else if (inQuotes && nextChar === ',') {
        inQuotes = false
        i += 2
        cells.push(currentCell)
        currentCell = ''
        continue
      } else if (!inQuotes) {
        inQuotes = true
        i++
        continue
      } else {
        inQuotes = false
        i++
        continue
      }
    }

    if (char === ',' && !inQuotes) {
      cells.push(currentCell)
      currentCell = ''
      i++
      continue
    }

    currentCell += char
    i++
  }

  cells.push(currentCell)
  return cells
}

export function parseCSVRows(csvContent: string): string[][] {
  const rows: string[][] = []
  let currentRow: string[] = []
  let currentCell = ''
  let inQuotes = false
  let i = 0

  while (i < csvContent.length) {
    const char = csvContent[i]
    const nextChar = i + 1 < csvContent.length ? csvContent[i + 1] : null

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentCell += '"'
        i += 2
        continue
      } else {
        inQuotes = !inQuotes
        i++
        continue
      }
    }

    if (char === '\n' && !inQuotes) {
      currentRow.push(currentCell)
      rows.push(currentRow)
      currentRow = []
      currentCell = ''
      i++
      if (i < csvContent.length && csvContent[i] === '\r') {
        i++
      }
      continue
    }

    if (char === '\r' && !inQuotes) {
      if (nextChar === '\n') {
        currentRow.push(currentCell)
        rows.push(currentRow)
        currentRow = []
        currentCell = ''
        i += 2
        continue
      }
    }

    if (char === ',' && !inQuotes) {
      currentRow.push(currentCell)
      currentCell = ''
      i++
      continue
    }

    currentCell += char
    i++
  }

  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell)
    rows.push(currentRow)
  }

  return rows
}

