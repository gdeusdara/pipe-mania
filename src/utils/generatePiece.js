const pieceTypes = ['R', 'L']
const positions = ['1', '2', '3', '4']

export default function generatePiece() {
  const pieceType = pieceTypes[Math.floor(Math.random() * 2)]
  const position = positions[Math.floor(Math.random() * 4)]

  return `${pieceType}${position}`
}