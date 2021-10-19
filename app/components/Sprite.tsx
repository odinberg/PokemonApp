import React, { useEffect } from 'react'
import { View, Dimensions, Image } from 'react-native'
import PokeApi, { Pokemon, PokemonColor } from '../api/PokeApi';
import useApi from '../hooks/useApi';

type Props = {pokemon: Pokemon;}

export default function Sprite({pokemon}: Props) {
    const {data: pokemonData, request: getPokemonColor} = useApi<Pokemon>(PokeApi.getPokemon)

    useEffect(() => {
        getPokemonColor(pokemon)
    }, [pokemon])


    const width = Dimensions.get("window").width / 2;
    return (
        <View style={{
            width,
            height: width,
            borderColor: pokemonData?.name ?? "red",
            borderWidth: 2,
            borderRadius: width,
            marginBottom: 8,
            overflow: "hidden",
        }}>
            <Image source={{
                    uri: pokemon.sprites.front_shiny,
                    width,
                    height: width,
                }}
            />
        </View>
    )
}
