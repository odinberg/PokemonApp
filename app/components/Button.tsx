import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View } from 'react-native'


type Props = {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    type?: "primary" | "secondary" | "light" | "danger";
}
export default function Button({onPress, title, type ="primary"}: Props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: "gray",
            marginBottom: 15,
            padding: 12,
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "grey",
        }, 
        text: {
            fontSize: 15, 
            textTransform: "uppercase",
            color: "black",
            fontWeight: "500",
        }
    })
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}> {title}</Text>
        </TouchableHighlight>
    )
}


