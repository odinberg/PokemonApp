import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { Pokemon } from '../api/PokeApi'
import Posts from '../components/Posts'
import PokemonScreen from './PokemonScreen'

type Props = {pokemon: Pokemon}

export default function Feed({pokemon}: Props) {


    return (
     <SafeAreaView>
   
        <View style={styles.posts}>
            <ScrollView>
                <Posts/>
            </ScrollView>
            </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({posts: {}})
