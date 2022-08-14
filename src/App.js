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
import cratePath from './utils/createPath';
import dictStr from './utils/dictStr';


export default function App() {
  const [fase, setFase] = useState([])
  const [faseString, setFaseString] = useState('fase1')
  const [extraData, setExtraData] = useState(0)
  const [selected, setSelected] = useState([1, 1])
  const [solved, setSolved] = useState(false)
  const [solvedDict, setSolvedDict] = useState({})
  const [pathList, setPathList] = useState([])
  const [pathDict, setPathDict] = useState({})
  const [createPathMode, setCreatePathMode] = useState(false)


  useEffect(() => {
    const parse = parseFase(fases[faseString].trim())
    setFase(parse)
  }, [])

  useEffect(() => {
    if (!createPathMode && pathList.length) {
      setFase(cratePath(fase, pathList))
      setExtraData(extraData+1)
      setPathList([])
      setPathDict({})
    }
  }, [createPathMode])

  useEffect(() => {
    if (fase.length) {
      const { solved, path_dict: dict } = isSolved(fase)
      setSolved(solved)
      setSolvedDict(dict)
    }
  }, [fase, extraData])

  const onPressItemCreateMode = (i, j) => {
    let newPathList = pathList
    let newPathDict = pathDict
    if(newPathList.length) {
      if (newPathList[newPathList.length - 1][0] === i
        && newPathList[newPathList.length - 1][1] === j
      ) {
        newPathDict[dictStr(newPathList[newPathList.length - 1][0], newPathList[newPathList.length - 1][1])] = false
        newPathList.pop()
      } else {
        const iDiff = newPathList[newPathList.length - 1]?.[0] - i
        const jDiff = newPathList[newPathList.length - 1]?.[1] - j

        if ((iDiff && jDiff) || Math.abs(iDiff) > 1 || Math.abs(jDiff) > 1) {
          newPathList = [[i, j]]
          newPathDict = {}
          newPathDict[dictStr(i, j)] = true
        } else {
          newPathList.push([i, j])
          newPathDict[dictStr(i, j)] = true
        }
      }
    } else {
      newPathList.push([i, j])
      newPathDict[dictStr(i, j)] = true
    }
    setPathList(newPathList)
    setPathDict(newPathDict)
  }

  const onPressItem = (newItem, i, j) => {
    const newFase = fase
    if (createPathMode) {
      onPressItemCreateMode(i, j)
    } else {
      newFase[i][j] = newItem
      setSelected([i, j])
      setFase(newFase)
    }
    setExtraData(extraData+1)
  }

  const onChangeFase = (newFase) => {
    setFase(newFase)
    setExtraData(extraData+1)
  }

  const selectedPiece = (i, j) => {
    if (createPathMode) {
      return !!(pathDict[dictStr(i, j)])
    }

    return selected[0] === i && selected[1] === j
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
                  selected={selectedPiece(i, j)}
                  onPath={solvedDict[dictStr(i, j)]}
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
            createPathMode={createPathMode}
            setCreatePathMode={setCreatePathMode}
            onPressPieceType={(item) => onPressItem(item, selected[0], selected[1])}
            fase={fase}
            solved={solved}
            onChangeFase={onChangeFase}
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
