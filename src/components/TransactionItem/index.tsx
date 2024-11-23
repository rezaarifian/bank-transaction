import React from 'react';
import {View} from 'react-native';

// components
import Text from '@components/Text';
import TouchableOpacity from '@components/TouchableOpacity';
import StatusLabel from '@components/StatusLabel';

// utils
import { currencyConverter, formatDate } from '@utils';

// styles
import styles from './styles';
import Colors from '@theme/Colors';

type Props = {
  transaction: Transaction;
  onPress: (item: Transaction) => void;
};

const TransactionItem: React.FC<Props> = (props) => {
  const {transaction, onPress} = props;
  const isSuccess = transaction?.status === 'SUCCESS';
  return (
    <TouchableOpacity onPress={() => onPress(transaction)} style={styles.transactionContainer}>
      <View style={styles.row}>
        <View
          style={[
            styles.highlightStatus,
            {backgroundColor: isSuccess ? Colors.SUCCESS : Colors.PENDING},
          ]}
        />
        <View style={styles.flex1}>
          <View style={styles.row}>
            <Text style={styles.bankText}>
              {transaction?.sender_bank?.toUpperCase()} ➔{' '}
              {transaction?.beneficiary_bank?.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.beneficiaryText}>
            {transaction?.beneficiary_name?.toUpperCase()}
          </Text>
          <Text style={styles.amountText}>
            {currencyConverter(transaction?.amount)} • {formatDate(transaction?.completed_at)}
          </Text>
        </View>
        <StatusLabel status={transaction?.status} />
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
