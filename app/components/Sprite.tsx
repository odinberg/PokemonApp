import React, { useEffect } from 'react'
import { View, Dimensions, Image } from 'react-native'
import PokeApi, { Pokemon, PokemonColor } from '../api/PokeApi';
import useApi from '../hooks/useApi';

type Props = {pokemon: Pokemon}

export default function Sprite({pokemon}: Props) {
    const {data, request} = useApi<PokemonColor>(PokeApi.getPokemonColor)

    useEffect(() => {
        request(pokemon.id)
    }, [pokemon])


    const width = Dimensions.get("window").width / 2;
    return (
        <View style={{
            width,
            height: width,
            borderColor: data?.name ?? "red",
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
