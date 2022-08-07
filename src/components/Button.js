import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button({ text, onPress, color = 'blue', textColor = 'white' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={{ color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
