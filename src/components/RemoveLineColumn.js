import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import generatePiece from '../utils/generatePiece';
import Button from './Button';
import LineColumnActions from './LineColumnActions';

export default function RemoveLineColumn({ fase = [], onPress = () => {} }) {
  const removeLine = () => {
    fase.splice(fase.length - 2, 1)
    onPress(fase)
  }

  const removeColumn = () => {
    for (let i = 0; i < fase.length; i++) {
      fase[i].splice(fase[i].length - 2, 1)
    }
    onPress(fase)
  }

  return (
    <LineColumnActions
      text1="Remover Linha"
      text2="Remover Coluna"
      action1={removeLine}
      action2={removeColumn}
      title="Remover"
    />
  );
}