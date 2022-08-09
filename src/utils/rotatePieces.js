import generatePiece from "./generatePiece";

const rotatePieces = (fase) => {

  for (let i = 0; i < fase.length; i++) {
    const row = fase[i];
    for (let j = 0; j < row.length; j++) {
      if (fase[i][j][0] !== 'B') {
        fase[i][j] = generatePiece(false, fase[i][j][0])
      }
    }
  }

  return fase
}

export default rotatePieces
