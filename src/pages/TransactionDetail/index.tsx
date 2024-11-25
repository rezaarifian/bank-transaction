import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';

// components
import Text from '@components/Text';
import TouchableOpacity from '@components/TouchableOpacity';

// utils
import { currencyConverter, formatDate } from '@utils';

// styles
import Colors from '@theme/Colors';
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'TransactionDetail'>;
  route: RouteProp<RootStackParamList, 'TransactionDetail'>;
};

const TransactionDetailPage: React.FC<Props> = ({navigation, route}) => {
  const {params} = route || {};
  const {transactionItem} = params || {};

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: Colors.WHITE,
      headerTitle: 'Transaction Detail',
      headerStyle: {backgroundColor: Colors.PRIMARY_01},
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.transactionId}>
          ID TRANSAKSI:{' '}
          <Text style={styles.transactionIdHighlight}>#{transactionItem?.id}</Text>
        </Text>
        <TouchableOpacity onPress={() => Clipboard.setString(transactionItem?.id)}>
          <Text style={styles.copyIcon}>Copy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailHeader}>
        <Text style={styles.detailHeaderText}>DETAIL TRANSAKSI</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.boldText}>
            {transactionItem?.sender_bank?.toUpperCase()} ➔{' '}
            {transactionItem?.beneficiary_bank?.toUpperCase()}
          </Text>
        </View>

        <View style={styles.section}>
            <View style={styles.flex1}>
                <Text style={styles.textName}>- {transactionItem?.beneficiary_name?.toUpperCase()}</Text>
                <Text style={styles.text}>{transactionItem?.account_number}</Text>
            </View>
            <View style={styles.flex1}>
                <Text style={styles.label}>NOMINAL</Text>
                <Text style={styles.boldText}>
                {currencyConverter(transactionItem?.amount)}
                </Text>
            </View>
        </View>

        <View style={styles.section}>
            <View style={styles.flex1}>
            <Text style={styles.label}>BERITA TRANSFER</Text>
            <Text style={styles.text}>{transactionItem?.remark}</Text>
            </View>
            <View style={styles.flex1}>
            <Text style={styles.label}>KODE UNIK</Text>
            <Text style={styles.text}>{transactionItem?.unique_code}</Text>
            </View>
        </View>

        <View style={styles.section}>
            <View style={styles.flex1}>
            <Text style={styles.label}>WAKTU DIBUAT</Text>
            <Text style={styles.text}>
              {formatDate(transactionItem?.created_at)}
            </Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TransactionDetailPage;
