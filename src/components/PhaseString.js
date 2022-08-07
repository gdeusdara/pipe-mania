import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard'
import Button from './Button';

export default function PhaseString({ fase }) {
  const copyToClipboard = async () => {
    let strToCopy = ''

    fase.forEach(element => {
      strToCopy += element.join('') + `\n`

    });

    Clipboard.setString(strToCopy);
  };

  return (
    <View style={styles.phaseContainer}>
      {fase.map((item, i) => {
        return (
          <View key={item[0] + i} style={styles.row}>
            {item.map((piece, j) => (
              <Text key={j + piece} style={{ width: 20 }}>
                {piece}
              </Text>
            ))}
          </View>
        )
      })}
      <Button onPress={copyToClipboard} text="Copiar" />
    </View>
  );
}

const styles = StyleSheet.create({
  phaseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
