import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

const App = () => {
    return (
        <>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <Routes />
        </>
    );
};

export default App;
