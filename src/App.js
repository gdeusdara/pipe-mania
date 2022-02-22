import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import fase1 from './fases/fase1';
import parseFase from './utils/parseFase';
import Piece from './components/Piece';
import isSolved from './utils/isSolved';

export default function App() {
  const [fase, setFase] = useState([])
  const [extraData, setExtraData] = useState(0)

  useEffect(() => {
    setFase(parseFase(fase1.trim()))
  }, [])

  useEffect(() => {
    if (fase.length) {
      console.log(isSolved(fase))
    }
  }, [fase, extraData])

  const onPressItem = (newItem, index, topIndex) => {
    const newFase = fase
    newFase[topIndex][index] = newItem
    setFase(newFase)
    setExtraData(extraData+1)
  }

  return (
    <View style={styles.container}>
      {fase.map((item, topIndex) => {

        return (
          <View style={styles.row}>
            {item.map((piece, index) => (
              <Piece key={String(piece+index)} item={piece} onPressItem={(newItem) => onPressItem(newItem, index, topIndex)} />
            ))}
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});
