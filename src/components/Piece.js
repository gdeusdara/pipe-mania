import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { pipeBegin, pipeL, pipeReto } from '../icons';

export default function Piece({ item }) {

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
    rotate = '270deg'
  } else if (item[1] === '4') {
    LStyle = styles.L4
    rotate = '180deg'
  }

  return (
    <View style={[viewStype, LStyle]}>
      <Animated.Image style={[imageStyle, {transform: [{ rotate }]}]} source={image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 4/4,
    flex: 1,
    width: 100,
    borderColor: 'black',
    borderWidth: 1
  },
  imageL: {
    aspectRatio: 4/4,
    width: 65,
    height: 65,
    borderColor: 'black',
    borderWidth: 1
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
    alignItems: 'flex-start',
  },
  L4: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
