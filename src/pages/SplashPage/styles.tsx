import {Dimensions, StyleSheet} from 'react-native';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
  },
  splash: {
    flex: 1,
  },
});

export default styles;
