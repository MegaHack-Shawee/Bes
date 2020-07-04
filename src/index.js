import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import ContextProvider from './hooks';
import store from './store';
import Routes from './routes';

const App = () => {
    return (
        <ContextProvider>
            <Provider store={store}>
                <StatusBar backgroundColor="#ffcc00" barStyle="dark-content" />
                <Routes />
            </Provider>
        </ContextProvider>
    );
};

export default App;
