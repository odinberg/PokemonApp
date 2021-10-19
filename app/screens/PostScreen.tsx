
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PokeApi from '../api/PokeApi'
import BerryPost from '../components/BerryPost'
import PokemonContainer from '../components/PokemonContainer'
import Posts from '../components/Posts'
import BerryScreen from './BerryScreen'
import PokemonScreen from './PokemonScreen'



export default function PostScreen() {


    return (
        <View>
                <PokemonScreen pokemonId={Math.floor(Math.random() * 800)}/>
        </View>
    )
}

const styles = StyleSheet.create({})
