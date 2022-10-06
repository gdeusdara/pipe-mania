import { useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { pipeBegin, pipeL, pipeReto } from '../icons';
import rotatePieces from '../utils/rotatePieces';
import AddLineColumn from './AddLineColumn';
import Button from './Button';
import GeneratePhase from './GeneratePhase';
import PhaseString from './PhaseString';
import Piece from './Piece';
import RemoveLineColumn from './RemoveLineColumn';

export default function Menu({
  onPressPieceType = () => {},
  selected,
  fase = [],
  solved,
  onChangeFase = () => {},
  createPathMode,
  setCreatePathMode = () => {},
  solvedDict = {}
}) {

  const pieceList = ['B1', 'R1', 'L1']
  const isSolved = useMemo(() => {
    if (solved) return 'Caminho encontrado!'
    return 'Não resolvido'
  }, [solved])

  const rotateAll = () => {
    const newFase = rotatePieces(fase)
    onChangeFase(newFase);
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.solved, solved ? styles.isSolved : styles.notSolved]}>
        {isSolved}
      </Text>
      <Text style={[styles.solved, solved ? styles.isSolved : styles.notSolved]}>
        {Object.keys(solvedDict).length}
      </Text>
      <GeneratePhase onPress={onChangeFase} />
      <Button
        text={createPathMode ? 'Finalizar caminho' : 'Criar caminho'}
        onPress={() => setCreatePathMode(!createPathMode)}
      />
      <Button
        text="Rotacionar peças"
        onPress={rotateAll}
      />
      <AddLineColumn title="Adicionar" fase={fase} onPress={onChangeFase} />
      <RemoveLineColumn title="Remover" fase={fase} onPress={onChangeFase} />
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
    margin: 20,
    flexDirection: 'row'
  },
  solved: {
    fontWeight: 'bold',
    fontSize: 20
  },
  isSolved: {
    color: 'blue'
  },
  notSolved: {
    color: 'red'
  }
});
