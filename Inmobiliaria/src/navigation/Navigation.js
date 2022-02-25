import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}>

            </Stack.Screen>
        </Stack.Navigator>
    );
}