import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Pokemon } from '../api/PokeApi'
import PokemonCharacteristic from './PokemonCharacteristic'
import Sprite from './Sprite'

type Props = {pokemon: Pokemon}

export default function PokemonContainer({pokemon}: Props) {

    
    return (
        
                <>
                <Text style={[styles.text, styles.pokemonId]}> {pokemon.id}</Text>
                <Sprite pokemon={pokemon}/>
                <Text style={[styles.text, styles.pokemonName]}>{pokemon.name}</Text>
                <Text style={[styles.text, styles.pokemonName]}>{pokemon.base_experience}</Text>
                
                <PokemonCharacteristic pokemon={pokemon}/>
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
