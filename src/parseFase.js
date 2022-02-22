const getPiece = (text, index1, index2) => {
  console.log((index1 + 1) * index2)
  return text[(index1 + 1) * index2]
}

const parseFase = (text) => {
  const fase = []

  const rows = text.split(`\n`)

  rows.forEach(row => {
    const elements = []
    for (let index = 0; index < row.length; index+=2) {
      const element = row[index] + row[index+1];
      elements.push(element)
    }
    fase.push(elements)
  });

  return fase
}

export default parseFase
