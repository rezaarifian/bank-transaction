import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

// service
import {get} from '@services';

// constans
import {API_URL} from '@constants/api';

export const getTransactionsList = createAsyncThunk<TransactionsData>(
  'GET/TransactionList',
  async (_, {rejectWithValue}) => {
    try {
      const response = await get(API_URL.LIST_TRANSACTIONS);
      return response as TransactionsData;
    } catch (error) {
      return rejectWithValue({message: String((error as Error)?.message)});
    }
  },
);

type InitStateProps = {
  data: TransactionsData;
  isLoading: boolean;
  isError: boolean;
  error: SerializedError;
};

const initialState: InitStateProps = {
  data: {} as TransactionsData,
  isLoading: false,
  isError: false,
  error: {} as SerializedError,
};

export const getTransactionListSlice = createSlice({
  name: 'getTransactionList',
  initialState,
  reducers: {
    resetTransactionList: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactionsList.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getTransactionsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getTransactionsList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
    });
  },
});

export const {resetTransactionList} = getTransactionListSlice.actions;
export default getTransactionListSlice.reducer;
