import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import Posts from '../components/Posts'
import postList from '../../assets/postlist'
import PokeApi, { Pokemon, PokemonColor } from '../api/PokeApi'
import useApi from '../hooks/useApi'


type Props = {pokemon: Pokemon}

export default function Profile({pokemon}: Props) {

    const {data, request} = useApi<PokemonColor>(PokeApi.getPokemonColor)

    useEffect(() => {
        request(pokemon.id)
    }, [pokemon])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
            <View style={styles.profileHeader}/>
            <View style={styles.profilePicture}>
                <Image source={{
                    uri: pokemon.sprites.front_shiny,
                    width: 50,
                    height: 50,
                }}/>

            </View>
            <View style={styles.about}><Text>Jeg er en homofil gutt som elsker å stå på sparkesykkel og suge pikk! Bor på Svinesund og studerer medisin </Text></View>
            <View style={styles.posts}>
                <FlatList
                data={postList}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({item}) => <Posts />}
                />
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    profile:{
        backgroundColor: "#f0f0f0",
        height: "100%",
        width: "100%",
    },
    profileHeader:{
        height: "15%",
        width: "100%",
        backgroundColor: "red",
        borderWidth: 1,
    },
    profilePicture: {
        top: -50,
        left: 20,
        width: 100,
        height: 100,
        borderWidth: 2,
        backgroundColor: "blue",
        borderRadius: 30,
    },
    about: {
        alignItems: "center",
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        top: -40,
    },
    posts: {
        top: -30,
    }

})
