import React, { useEffect } from 'react'
import { View, Dimensions, Image, StyleSheet } from 'react-native'
import PokeApi, { Pokemon, PokemonColor } from '../api/PokeApi';
import useApi from '../hooks/useApi';

type Props = {pokemon: Pokemon;}

export default function ProfilePicture({pokemon}: Props) {
    const {data: pokemonData, request: getPokemonColor} = useApi<Pokemon>(PokeApi.getPokemon)

    useEffect(() => {
        getPokemonColor(pokemon)
    }, [pokemon])


    return (
        <View style={styles.image}>
            <Image source={{
                    uri: pokemonData?.sprites.front_shiny,
                    width: 100,
                    height: 100,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: "green",
        zIndex: 1001,
        
    }
})