import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

export type RootLoginParamList = {
    Login: undefined;
    Authenticated: {username: string};

}

export default function LoginNavigator() {
    const Stack = createNativeStackNavigator<RootLoginParamList>()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Authenticated" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
    )
}
