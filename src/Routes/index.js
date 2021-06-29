import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//Components
import Home from '../Views/Home';
import Login from '../Views/Login';

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    headerShown: false,
                    animationEnabled: false
                }}
            >

                <Stack.Screen
                    name={'Home'}
                    component={Home}

                />
                <Stack.Screen
                    name={'Login'}
                    component={Login}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
