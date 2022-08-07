import { useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { pipeBegin, pipeL, pipeReto } from '../icons';
import AddLineColumn from './AddLineColumn';
import PhaseString from './PhaseString';
import Piece from './Piece';

export default function Menu({ onPressPieceType = () => {}, selected, fase = [], solved, onChangeFase = () => {} }) {

  const pieceList = ['B1', 'R1', 'L1']
  const isSolved = useMemo(() => {
    if (solved) return 'Caminho encontrado!'
    return 'Não resolvido'
  }, [solved])

  return (
    <View style={styles.container}>
      <Text style={[styles.solved, solved ? styles.isSolved : styles.notSolved]}>
        {isSolved}
      </Text>
      <AddLineColumn fase={fase} onPress={onChangeFase} />
      <View style={styles.list}>
        {pieceList.map(item => (
          <Piece
            key={item}
            item={item}
            selected={selected[0] === item[0]}
            onPressItem={onPressPieceType}
          />
        ))}
      </View>
      <PhaseString fase={fase} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: {
    margin: 20
  },
  solved: {
    fontWeight: 'bold',
    fontSize: 15
  },
  isSolved: {
    color: 'blue'
  },
  notSolved: {
    color: 'red'
  }
});
