    import React from 'react'
    import { StyleSheet, Text, View } from 'react-native'
  
    import PokemonScreen from '../screens/PokemonScreen'

    type Props = {pokemonId: PokemonInfo}
    
    export default function PokemonInfoContainer({pokemonId}: Props) {
        return (
            <>
                <PokemonScreen pokemonId={12}/>
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
    