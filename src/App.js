import React from 'react';
import Routes from './Routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './Store';

const App = (props) => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes/>
            </PersistGate>
        </Provider>
    );
}

export default App;
