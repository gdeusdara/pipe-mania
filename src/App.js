import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import fases from './fases';
import fase6solved from './fases/fase6solved';
import smallFase1 from './fases/smallFase1';
import parseFase from './utils/parseFase';
import Piece from './components/Piece';
import isSolved from './utils/isSolved';
import Menu from './components/Menu';

export default function App() {
  const [fase, setFase] = useState([])
  const [faseString, setFaseString] = useState('fase1')
  const [extraData, setExtraData] = useState(0)
  const [selected, setSelected] = useState([1, 1])
  const [solved, setSolved] = useState(false)

  useEffect(() => {
    const parse = parseFase(fases[faseString].trim())
    setFase(parse)
  }, [])

  useEffect(() => {
    if (fase.length) {
      setSolved(isSolved(fase))
    }
  }, [fase, extraData])

  const onPressItem = (newItem, i, j) => {
    const newFase = fase
    newFase[i][j] = newItem
    setSelected([i, j])
    setFase(newFase)
    setExtraData(extraData+1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.phaseContainer}>
        {fase.map((item, i) => {

          return (
            <View key={String(item[0] + i)} style={styles.row}>
              {item.map((piece, j) => (
                <Piece
                  key={String(piece+j)}
                  item={piece}
                  selected={selected[0] === i && selected[1] === j}
                  onPressItem={(newItem) => onPressItem(newItem, i, j)}
                />
              ))}
            </View>
          )
        })}
      </View>
      <View style={styles.menu}>
        {fase.length ? (
          <Menu
            selected={fase[selected[0]][selected[1]]}
            onPressPieceType={(item) => onPressItem(item, selected[0], selected[1])}
            fase={fase}
            solved={solved}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phaseContainer: {
    flex: 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});
