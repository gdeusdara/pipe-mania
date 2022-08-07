import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';

export default function LineColumnActions({ text1, text2, action1, action2, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.buttons}>
        <Button text={text1} onPress={action1} />
        <Button text={text2} onPress={action2} />
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
