import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import fase1 from './fases/fase1';
import fase2 from './fases/fase2';
import fase3 from './fases/fase3';
import fase4 from './fases/fase4';
import fase5 from './fases/fase5';
import fase6 from './fases/fase6';
import fase6solved from './fases/fase6solved';
import smallFase1 from './fases/smallFase1';
import parseFase from './utils/parseFase';
import Piece from './components/Piece';
import isSolved from './utils/isSolved';

export default function App() {
  const [fase, setFase] = useState([])
  const [extraData, setExtraData] = useState(0)

  useEffect(() => {
    const parse = parseFase(fase1.trim())
    console.log(parse)
    setFase(parse)
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
          <View key={String(item[0] + topIndex)} style={styles.row}>
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
