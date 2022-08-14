import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, useMemo } from 'react-native';
import { pipeBegin, pipeL, pipeReto } from '../icons';

export default function Piece({ item, onPressItem = () => {}, selected, onPath = false }) {

  const onPress = () => {
    let number = parseInt(item[1])
    if (typeof number === 'number') {
      if (number < 4) {
        number++
      } else {
        number = 1
      }

      item = `${item[0]}${number}`
      onPressItem(item)
    }
  }

  let image = null
  let viewStype = null
  let imageStyle = null
  let LStyle = null
  let rotate = '0deg'

  if (item[0] === 'L') {
    image = pipeL
    viewStype = styles.image
    imageStyle = styles.imageL
  } else if (item[0] === 'R') {
    image = pipeReto
    viewStype = styles.image
    imageStyle = styles.image
  } else if (item[0] === 'B') {
    image = pipeBegin
    viewStype = styles.image
    imageStyle = styles.image
  }

  if (item[1] === '1') {
    LStyle = styles.L1
    rotate = '0deg'
  } else if (item[1] === '2') {
    LStyle = styles.L2
    rotate = '90deg'
  } else if (item[1] === '3') {
    LStyle = styles.L3
    rotate = '180deg'
  } else if (item[1] === '4') {
    LStyle = styles.L4
    rotate = '270deg'
  }

  return (
    <TouchableOpacity onPress={onPress} style={[viewStype, LStyle, selected ? styles.selected : {}, onPath ? styles.onPath : {}]}>
      <Animated.Image style={[imageStyle, {transform: [{ rotate }]}]} source={image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  selected: {
    backgroundColor: 'yellow'
  },
  onPath: {
    backgroundColor: '#8483d6'
  },
  imageL: {
    width: 70 * 0.65,
    height: 70 * 0.65,
  },
  L1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  L2: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  L3: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  L4: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});
