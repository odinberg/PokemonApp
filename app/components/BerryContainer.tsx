import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Berry } from '../api/PokeApi'

type Props = {berry: Berry}

export default function BerryContainer({berry}: Props) {
    return (
        <>
                <Text style={[styles.text, styles.pokemonId]}>{berry.id}</Text>
                {/* <Sprite pokemon={pokemon}/> */}
                <Text style={[styles.text, styles.pokemonName]}>{berry.name}</Text>
                <Text style={[styles.text, styles.pokemonName]}>Natural gift power: {berry.natural_gift_power}</Text>
                <Text style={[styles.text, styles.pokemonName]}>Co: {berry.growth_time}</Text>
                </>
    )
}

const styles = StyleSheet.create({

    text: {
        color: "gray",
    
    },
    pokemonId: {
        marginBottom: 20
    },
    pokemonName: {
        fontSize: 24,
        textTransform: "capitalize",
        marginBottom: 8,
    }
})
