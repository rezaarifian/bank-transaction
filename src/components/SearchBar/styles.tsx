import {StyleSheet} from 'react-native';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  input: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.GREY_01,
    fontSize: 14,
    color: Colors.ALMOST_BLACK,
    width: '80%',
  },
  textFilter: {
    color: Colors.PENDING,
    fontWeight: 'bold',
  },
});

export default styles;
