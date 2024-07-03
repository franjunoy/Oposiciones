import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import userReducer from '../reducer/userReducer';
import cursoRedurcer from '../reducer/cursoRedurcer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer',cursoRedurcer]
};

const rootReducer = combineReducers({
  user: userReducer,
  cursoRedurcer: cursoRedurcer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

const persistor = persistStore(store);

export { store, persistor };
