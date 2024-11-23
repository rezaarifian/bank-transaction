import {StyleSheet} from 'react-native';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  transactionContainer: {
    backgroundColor: Colors.WHITE,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
    padding: 10,
  },
  bankText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.ALMOST_BLACK,
  },
  beneficiaryText: {
    fontSize: 14,
    color: Colors.ALMOST_BLACK,
    marginVertical: 4,
  },
  amountText: {
    fontSize: 14,
    color: Colors.ALMOST_BLACK,
    marginBottom: 8,
  },
  highlightStatus: {
    height: '100%',
    width: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

export default styles;
