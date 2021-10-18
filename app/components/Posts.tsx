import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { RootFeedParamList } from '../navigators/FeedNavigator'
import PokemonScreen from '../screens/PokemonScreen'
import BerryPost from './BerryPost'


// export type Post = {
//     id: number;
//     title: string;
//     description: string;
// }

// type Props = ({
//     post: Post;

// })

export default function Posts({navigation}: NativeStackScreenProps<RootFeedParamList, "Feed">) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>title</Text>
            {/* <TouchableOpacity key={id} onPress={() => navigation.navigate("Post", {id})}> */}
            <View style={styles.description} ><PokemonScreen pokemonId={6}/></View>
            <View style={styles.description} ><PokemonScreen pokemonId={2}/></View>
            <View style={styles.description} ><PokemonScreen pokemonId={70}/></View>
            {/* </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.3,
        backgroundColor: "gray",

    },
    title: {
        fontWeight: "bold",
        padding: 5,

    },
    description: {
        padding: 10,
    }
})
