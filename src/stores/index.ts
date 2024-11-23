import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../slices';
import {WHITELIST} from './whitelist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer, Persistor} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: WHITELIST,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor: Persistor = persistStore(store);
