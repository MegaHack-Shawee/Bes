import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import places_grey_icon from '../assets/icons/places_grey_icon.png';
import places_red_icon from '../assets/icons/places_red_icon.png';
import cashbes_grey_icon from '../assets/icons/cashbes_grey_icon.png';
import cashbes_red_icon from '../assets/icons/cashbes_red_icon.png';
import favorite_grey_icon from '../assets/icons/favorite_grey_icon.png';
import favorite_red_icon from '../assets/icons/favorite_red_icon.png';
import check_grey_icon from '../assets/icons/check_grey_icon.png';
import check_red_icon from '../assets/icons/check_red_icon.png';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Places/Home';
import Map from '../pages/Places/Map';
import Order from '../pages/Check/Order';
import Favorites from '../pages/Favorites';

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
        <Stack.Navigator initialRouteName="Favorites" headerMode="none">
            <Stack.Screen name="Favorites" component={Favorites} />
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

                    if (route.name === 'Estabelecimentos') {
                        icon = focused ? places_red_icon : places_grey_icon;
                    } else if (route.name === 'Cash Bes') {
                        icon = focused ? cashbes_red_icon : cashbes_grey_icon;
                    } else if (route.name === 'Favoritos') {
                        icon = focused ? favorite_red_icon : favorite_grey_icon;
                    } else if (route.name === 'Comanda') {
                        icon = focused ? check_red_icon : check_grey_icon;
                    }

                    return <Image source={icon} />;
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
            <Tab.Screen name="Cash Bes" component={cashBesStack} />
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
