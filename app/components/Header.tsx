import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={styles.header}>
            <FontAwesome5 name="camera" style={styles.icon} />
            <FontAwesome5 name="allergies" style={styles.icon} />
            <FontAwesome5 name="angellist" style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: "red",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'row',
    },
    icon: {
        color: "white",
        fontSize: 30,
        marginTop: 20,

    }
})
