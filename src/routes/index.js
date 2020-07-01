import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

export default function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignInScreen" headerMode="none">
                <Stack.Screen name="SignInScreen" component={SignIn} />
                <Stack.Screen name="SignUpScreen" component={SignUp} />
                <Stack.Screen name="HomeScreen" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
