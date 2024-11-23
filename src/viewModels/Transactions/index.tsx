import {useEffect} from 'react';

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

  useEffect(() => {
    dispatch(getTransactionsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTransactionDetail = (item: Transaction) => {
    navigation.push('TransactionDetail', {transactionItem: item});
  };

  const transactionArray = Object.values(transactions);
  return {transactionArray, navigateTransactionDetail};
}
