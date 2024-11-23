import React from 'react';
import {View} from 'react-native';

// components
import Text from '@components/Text';

// styles
import styles from './styles';
import Colors from '@theme/Colors';

const StatusLabel: React.FC<{ status: StatusProps }> = ({ status }) => {
  const isSuccess = status === 'SUCCESS';
  return (
    <View style={[isSuccess ? styles.success : styles.pending]}>
      <Text style={[styles.statusText, {color: isSuccess ? Colors.WHITE : Colors.ALMOST_BLACK}]}>{isSuccess ? 'Berhasil' : 'Pengecekan'}</Text>
    </View>
  );
};

export default StatusLabel;
