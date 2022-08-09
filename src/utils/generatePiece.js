const pieceTypes = ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'B']

const positions = ['1', '2', '3', '4']

export default function generatePiece(useB = false, piece = '') {
  let b = useB ? 1 : 0
  const pieceType = pieceTypes[Math.floor(Math.random() * (19 + b))]
  const position = positions[Math.floor(Math.random() * 4)]

  return `${piece || pieceType}${position}`
}