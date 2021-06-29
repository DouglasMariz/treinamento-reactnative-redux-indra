import {combineReducers} from 'redux';

import HomeProvider from './providers/Home';
import LoginProvider from './providers/Login';

const Reducers = combineReducers({
    HomeProvider,
    LoginProvider
});

export default Reducers;
