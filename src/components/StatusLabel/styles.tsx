import {StyleSheet} from 'react-native';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  statusContainer: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  success: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: Colors.SUCCESS,
  },
  pending: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor:  Colors.PENDING,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
