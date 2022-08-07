import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import generatePiece from '../utils/generatePiece';
import Button from './Button';
import LineColumnActions from './LineColumnActions';

export default function AddLineColumn({ fase = [], onPress = () => {} }) {
  const addLine = () => {
    const newLine = []

    for (let i = 0; i < fase[0].length; i++) {
      if (i === 0 || i === fase[0].length - 1) {
        newLine.push('##')
      } else {
        newLine.push(generatePiece())
      }
    }

    fase.splice(fase.length - 1, 0, newLine)
    onPress(fase)
  }

  const addColumn = () => {
  
    for (let i = 0; i < fase.length; i++) {
      let newPiece = '##'
  
      if (!(i === 0 || i === fase.length - 1)) {
        newPiece = generatePiece()
      }

      fase[i].splice(fase[i].length - 1, 0, newPiece)
    }
  
    onPress(fase)
  }

  return (
    <LineColumnActions
      text1="Adicionar Linha"
      text2="Adicionar Coluna"
      action1={addLine}
      action2={addColumn}
      title="Adicionar"
    />
  );
}