import { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import generatePiece from '../utils/generatePiece';
import Button from './Button';

export default function GeneratePhase({ onPress }) {
  const [lines, setLines] = useState('10')
  const [columns, setColumns] = useState('10')
  const [invalid, setInvalid] = useState(false)

  const validateNumbers = () => {
    if (!lines.length) {
      return false
    }
    if (!columns.length) {
      return false
    }

    if (isNaN(parseInt(lines))) {
      return false
    }

    if (isNaN(parseInt(columns))) {
      return false
    }

    if (parseInt(lines) <= 0) {
      return false
    }

    if (parseInt(columns) <= 0) {
      return false
    }
  
    return true
  }

  const generatePhase = () => {
    if (!validateNumbers()) {
      setInvalid(true)
      return
    }
    let Bqtd = 2

    const intLines = parseInt(lines)
    const intColumns = parseInt(columns)

    setInvalid(false)
    let newPhase = []
    for (let i = 0; i < intLines + 2; i++) {
      let column = []
      if (i === 0 || i === intLines + 1) {
        column = new Array(intColumns + 2).fill('##')
      } else {
        for (let j = 0; j < intColumns + 2; j++) {
          let piece = generatePiece(!!Bqtd);
          if ((j === 0 || j === intColumns + 1)) {
            piece = '##'
          }
          if (piece[0] === 'B') {
            Bqtd--
          }
          column.push(piece)
        }
      }
      newPhase.push(column)
    }

    console.log(newPhase)
    onPress(newPhase)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput style={styles.input} value={lines} onChangeText={number => setLines(number)} />
        <TextInput style={styles.input} value={columns} onChangeText={number => setColumns(number)} />
      </View>
        <Button text="Gerar nova fase" onPress={generatePhase} />
        {invalid ? (
          <Text style={styles.invalid}>Linha ou coluna inválida</Text>
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },  
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgb(51 128 92)',
    margin: 5
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  invalid: {
    color: 'red',
    textAlign: 'center'
  }
});
