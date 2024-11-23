import {StyleSheet} from 'react-native';
import Colors from '@theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_02,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  transactionId: {
    fontSize: 16,
    color: Colors.ALMOST_BLACK,
  },
  transactionIdHighlight: {
    fontWeight: 'bold',
    color: Colors.ALMOST_BLACK,
  },
  copyIcon: {
    fontSize: 14,
    color: Colors.PENDING,
    marginLeft: 10,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.ALMOST_BLACK,
  },
  details: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    marginBottom: 8,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  column: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    color: Colors.ALMOST_BLACK,
    fontSize: 14,
  },
  label: {
    color: Colors.ALMOST_BLACK,
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  textName: {
    color: Colors.ALMOST_BLACK,
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    color: Colors.ALMOST_BLACK,
    fontSize: 14,
  },
  flex1: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default styles;
