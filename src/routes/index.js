import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Places/Home';
import Map from '../pages/Places/Map';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function placesStack() {
    return (
        <Stack.Navigator initialRouteName="MapScreen" headerMode="none">
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="MapScreen" component={Map} />
        </Stack.Navigator>
    );
}

function cashBesStack() {
    return (
        <Stack.Navigator initialRouteName="SignInScreen" headerMode="none">
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="MapScreen" component={Map} />
        </Stack.Navigator>
    );
}

function favoritesSTack() {
    return (
        <Stack.Navigator initialRouteName="SignInScreen" headerMode="none">
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="MapScreen" component={Map} />
        </Stack.Navigator>
    );
}

function checkStack() {
    return (
        <Stack.Navigator initialRouteName="SignInScreen" headerMode="none">
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="MapScreen" component={Map} />
        </Stack.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#ff5300',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Estabelecimentos" component={placesStack} />
                <Tab.Screen name="Cash Bes" component={cashBesStack} />
                <Tab.Screen name="Favoritos" component={favoritesSTack} />
                <Tab.Screen name="Comanda" component={checkStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
