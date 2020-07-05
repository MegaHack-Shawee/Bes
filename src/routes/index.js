import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Places/Home';
import Map from '../pages/Places/Map';
import Order from '../pages/Check/Order';
import Favorites from '../pages/Favorites';
import CashBes from '../pages/CashBes';

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
        <Stack.Navigator initialRouteName="CashBes" headerMode="none">
            <Stack.Screen name="CashBes" component={CashBes} />
        </Stack.Navigator>
    );
}

function favoritesSTack() {
    return (
        <Stack.Navigator initialRouteName="Favorites" headerMode="none">
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    );
}

function checkStack() {
    return (
        <Stack.Navigator initialRouteName="OrderScreen" headerMode="none">
            <Stack.Screen name="OrderScreen" component={Order} />
        </Stack.Navigator>
    );
}

function TabScreens() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let icon;

                    switch (route.name) {
                        case 'Estabelecimentos':
                            icon = 'shopping-store';
                            break;
                        case 'CashBes':
                            icon = 'dollar';
                            break;
                        case 'Favorites':
                            icon = 'heart-alt';
                            break;
                        case 'Comanda':
                            icon = 'nav-icon-a';
                            break;
                    }

                    return (
                        <Icon
                            name={icon}
                            size={25}
                            color={focused ? '#ff5300' : '#dfe1e5'}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: '#ff5300',
                inactiveTintColor: 'gray',
                style: {
                    borderTopColor: '#ff5300',
                },
            }}>
            <Tab.Screen name="Estabelecimentos" component={placesStack} />
            <Tab.Screen name="CashBes" component={cashBesStack} />
            <Tab.Screen name="Favorites" component={favoritesSTack} />
            <Tab.Screen name="Comanda" component={checkStack} />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignInScreen" headerMode="none">
                <Stack.Screen name="SignInScreen" component={SignIn} />
                <Stack.Screen name="SignUpScreen" component={SignUp} />
                <Stack.Screen name="TabsScreen" component={TabScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
