import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reducers from './reducers';

const loggerMiddleware = createLogger({
    level: 'info',
    collapse: true,
});

const develop = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
const production = applyMiddleware(thunkMiddleware);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

let store;
store = createStore(persistedReducer, develop);

const persistor = persistStore(store);

export {store, persistor};
