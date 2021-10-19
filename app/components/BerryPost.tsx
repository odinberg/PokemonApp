import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BerryScreen from '../screens/BerryScreen'

export default function BerryPost() {
    return (
        <View>
                <BerryScreen berryId={40}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#6cad7d",
        height: 100,
    },
    info: {
        backgroundColor: "white",
    }
})
