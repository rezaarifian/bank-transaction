import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';

// models
import {NavigationProps} from '@models/Transactions';

// view models
import { useTransactionsViewModel } from '@viewModels/Transactions';

// components
import TransactionItem from '@components/TransactionItem';

// styles
import Colors from '@theme/Colors';
import styles from './styles';

const TransactionsPage: React.FC<NavigationProps> = ({navigation}) => {
  const {transactionArray, navigateTransactionDetail} = useTransactionsViewModel({navigation});

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTintColor: Colors.WHITE,
      headerTitle: 'Transactions',
      headerStyle: {backgroundColor: Colors.PRIMARY_01},
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionArray}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <TransactionItem transaction={item} onPress={navigateTransactionDetail}/>}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default TransactionsPage;
