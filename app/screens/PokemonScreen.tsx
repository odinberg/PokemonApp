import React, { useEffect } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PokeApi, { Pokemon } from '../api/PokeApi'
import PokemonContainer from '../components/PokemonContainer'
import useApi from '../hooks/useApi'

type Props = {pokemonId: number}



export default function PokemonScreen({pokemonId}: Props) {

    const {data: pokemon, error, loading, request: getPokemon} = useApi<Pokemon>(PokeApi.getPokemon)
    
    useEffect(() => {
        getPokemon(pokemonId);
        
    }, [pokemonId])

    
    
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ActivityIndicator animating={loading} size="large" />
                {error && (
                    <>
                <Text>Ooops dette gikk ikke bra</Text>
                <Button title="prøv igjen" onPress={() => getPokemon(pokemonId)}/>
                    </>
                )}
                {!error && !loading && !!pokemon && <PokemonContainer pokemon={pokemon}/>}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
            padding: 20,
            alignItems: "center",
            backgroundColor: "white",
    },
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
