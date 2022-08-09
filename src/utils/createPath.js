export default function cratePath(fase = [[]], piecesList) {

  // 1 - esquerda
  // 2 - cima
  // 3 - direita
  // 4 - embaixo
  let previous = 0;

  for (let i = 0; i < piecesList.length; i++) {
    let type = ''
    let rotation = ''
    const iDiff = piecesList[i]?.[0] - piecesList[i + 1]?.[0]
    const jDiff = piecesList[i]?.[1] - piecesList[i + 1]?.[1]

    if (i === 0 || i === piecesList.length - 1) {
      type = 'B'
      if (i === 0) {
        if (iDiff == 0) {
          rotation == '1'
          if (jDiff > 0) {
            previous = 3
          } else {
            previous = 1
          }
        } else if (iDiff > 0) {
          previous = 4
        } else {
          previous = 3
        }
      } else {
        rotation = String(previous)
      }
      fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
      continue
    }

    if ((previous === 1 ||  previous === 3) && iDiff == 0) {
        type = 'R'
        position = '1'
        fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
        continue
    }

    if ((previous === 2 ||  previous === 4) && jDiff == 0) {
      type = 'R'
      position = '2'
      fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
      continue
    }

    type = 'L'

    if (previous === 1) {
      if (iDiff > 0) {
        position = '1'
        previous = 4
      } else {
        position = '4'
        previous = 2
      }
      fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
      continue
    }

    if (previous === 2) {
      if (jDiff > 0) {
        position = '1'
        previous = 3
      } else {
        position = '2'
        previous = 1
      }
      fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
      continue
    }

    if (previous === 3) {
      if (iDiff > 0) {
        position = '2'
        previous = 4
      } else {
        position = '3'
        previous = 2
      }
      fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
      continue
    }

    if (previous === 4) {
      if (jDiff > 0) {
        position = '4'
        previous = 3
      } else {
        position = '3'
        previous = 1
      }
      fase[piecesList[i][0]][piecesList[i][0]] = `${type}${rotation}`
    }
  }

  return fase
}
