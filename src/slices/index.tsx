import {combineReducers} from 'redux';
import getTransactionListReducer from './transaction/getTransactionListSlice';

const rootReducer = combineReducers({
    getTransactionListReducer,
});

export default rootReducer;
