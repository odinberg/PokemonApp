import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../components/Button'
import { RootLoginParamList } from '../navigators/LoginNavigator'


export default function LoginScreen({navigation}: NativeStackScreenProps<RootLoginParamList, "Login">) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text>LOGIN TO ODIN WORLD</Text>
            <Text>Username</Text>
            <TextInput style={styles.input}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.input}></TextInput>
            <Button title="Login" onPress={() => navigation.navigate("Authenticated", {username: "Odin Sil",})}></Button>
            <Button title="Register" onPress={() => console.warn("Register")}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "#f0f0f0",
        },
    content: {
        alignItems: "center",
        height: 300,
        width: 300,
        backgroundColor: "#6cad7d",
        justifyContent: "space-evenly",
    },
    input: {
        borderWidth: 0.5,
        width: "60%",
        height: 30,
        backgroundColor: "white",
    },
    register: {
        borderWidth: 0.5,
        width: "60%",
        height: 20,
        alignItems: "center", 
    }
})
