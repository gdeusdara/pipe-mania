import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import fase1 from './fases/fase1';
import parseFase from './utils/parseFase';
import Piece from './components/Piece';
import isSolved from './utils/isSolved';

export default function App() {
  const [fase, setFase] = useState([])

  useEffect(() => {
    setFase(parseFase(fase1.trim()))
  }, [])

  useEffect(() => {
    if (fase.length) {
      console.log(isSolved(fase))
    }
  }, [fase])
  return (
    <View style={styles.container}>
      {fase.map((item, index) => {
        return (
          <View key={String(index+item[0])} style={styles.row}>
            {item.map((piece, index) => (
              <Piece key={String(piece+index)} item={piece} />
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
