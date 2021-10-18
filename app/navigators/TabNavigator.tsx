import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import PostScreen from '../components/BerryPost';
import Profile from '../screens/Profile';
import FeedNavigator from './FeedNavigator';

export type RootBottomTabPropTypes = {
    FeedNavigtor: undefined;
    Post: undefined;
    Profile: {username: string};
}

export default function TabNavigator() {


    const Tab = createBottomTabNavigator<RootBottomTabPropTypes>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="FeedNavigtor" component={FeedNavigator}/>
            <Tab.Screen name="Post" component={PostScreen} />
            {
            //Må fikse dette
            /* <Tab.Screen name="Profile" component={Profile}/> */}

        </Tab.Navigator>
    )
}

