import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Feed from '../screens/Feed';
import PostScreen from '../screens/PostScreen';
import TabNavigator from './TabNavigator';

export type RootFeedParamList = {
    Feed: undefined;
    Post: {id: number, title: string;
        description: string;};

}

export default function FeedNavigator() {
    const Stack = createNativeStackNavigator<RootFeedParamList>()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Feed" component={Feed}></Stack.Screen>
            <Stack.Screen name="Post" component={PostScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
