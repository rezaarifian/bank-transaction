import {useEffect, useMemo, useState} from 'react';

// models
import {NavigationProps} from '@models/Transactions';

// stores
import {useAppSelector, useAppDispatch} from '@stores/hooks';
import {getTransactionsList} from '@slices/transaction/getTransactionListSlice';

export function useTransactionsViewModel({navigation}: NavigationProps) {
  const dispatch = useAppDispatch();

  const {data: transactions} = useAppSelector(
    state => state.getTransactionListReducer,
  );

  const transactionArray = Object.values(transactions);

  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(getTransactionsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTransactions = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return transactionArray.filter((transaction) => {
      return (
        transaction.beneficiary_name.toLowerCase().includes(query) ||
        transaction.sender_bank.toLowerCase().includes(query) ||
        transaction.beneficiary_bank.toLowerCase().includes(query) ||
        transaction.amount.toString().includes(query)
      );
    });
  }, [searchQuery, transactionArray]);

  const navigateTransactionDetail = (item: Transaction) => {
    navigation.push('TransactionDetail', {transactionItem: item});
  };

  const onPressFilter = () => {
    alert('onPressFilter');
  };

  return {
    transactionArray,
    navigateTransactionDetail,
    setSearchQuery,
    searchQuery,
    filteredTransactions,
    onPressFilter,
  };
}
