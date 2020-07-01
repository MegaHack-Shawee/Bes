import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';

// import { Container } from './styles';

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <Routes />
        </Provider>
    );
};

export default App;
