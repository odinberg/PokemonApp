
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PokeApi from '../api/PokeApi'
import BerryPost from '../components/BerryPost'
import PokemonContainer from '../components/PokemonContainer'
import PokemonScreen from './PokemonScreen'

export default function PostScreen() {


    return (
        <View>
            <BerryPost berryId={2}/>
            
        </View>
    )
}

const styles = StyleSheet.create({})
