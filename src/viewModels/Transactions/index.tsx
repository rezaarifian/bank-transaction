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
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getTransactionsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTransactions = useMemo(() => {
    const query = searchQuery.toLowerCase();
    const filtered = transactionArray.filter((transaction) =>
      [transaction.beneficiary_name, transaction.sender_bank, transaction.beneficiary_bank, transaction.amount.toString()]
        .some((field) => field.toLowerCase().includes(query))
    );

    switch (selectedSort) {
      case 'name-asc':
        return filtered.sort((a, b) =>
          a.beneficiary_name.localeCompare(b.beneficiary_name)
        );
      case 'name-desc':
        return filtered.sort((a, b) =>
          b.beneficiary_name.localeCompare(a.beneficiary_name)
        );
      case 'date-newest':
        return filtered.sort(
          (a, b) =>
            new Date(b.completed_at).getTime() -
            new Date(a.completed_at).getTime()
        );
      case 'date-oldest':
        return filtered.sort(
          (a, b) =>
            new Date(a.completed_at).getTime() -
            new Date(b.completed_at).getTime()
        );
      default:
        return filtered;
    }
  }, [searchQuery, transactionArray, selectedSort]);

  const navigateTransactionDetail = (item: Transaction) => {
    navigation.push('TransactionDetail', {transactionItem: item});
  };

  const onPressSorted = () => {
    setSortModalVisible(!sortModalVisible);
  };

  return {
    transactionArray,
    navigateTransactionDetail,
    setSearchQuery,
    searchQuery,
    filteredTransactions,
    onPressSorted,
    sortModalVisible,
    selectedSort,
    setSelectedSort,
  };
}
