import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import Posts from '../components/Posts'
import PokeApi, { Pokemon, PokemonColor } from '../api/PokeApi'
import useApi from '../hooks/useApi'
import PokemonScreen from './PokemonScreen'
import Sprite from '../components/Sprite'
import ProfilePicture from '../components/ProfilePicture'
import randomId from '../components/RandomId'


type Props = {pokemon: Pokemon, pokemonId: number}

export default function Profile({pokemon}: Props) {

    const {data, request: getPokemonColor} = useApi<PokemonColor>(PokeApi.getPokemonColor)

    useEffect(() => {
        getPokemonColor(pokemon)
    }, [pokemon])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
            <View style={styles.profileHeader}/>
            <View style={styles.profilePicture}>
                <ProfilePicture pokemon={randomId()}/>
            </View>
            <View style={styles.about}><Text>Jeg er en homofil gutt som elsker å stå på sparkesykkel og suge pikk! Bor på Svinesund og studerer medisin </Text></View>
            <View style={styles.posts}>
                <ScrollView>
                <PokemonScreen pokemonId={randomId()}
                />
                </ScrollView>
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
