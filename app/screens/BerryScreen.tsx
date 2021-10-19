import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokeApi, { Berry } from '../api/PokeApi'
import useApi from '../hooks/useApi'

type Props = {berryId: number}

export default function BerryScreen({berryId}: Props) {


    const {data: berry, error, loading, request: getBerry} = useApi<Berry>(PokeApi.getBerry)

    

    useEffect(() => {
        getBerry(berryId)
    }, [berryId])

    return (
        <View style={styles.container}> 
            <Text> {berry?.name}</Text>
            <Text>  Growth time: {berry?.growth_time}</Text>
            <Text> Natural gift power: {berry?.natural_gift_power}</Text>
            <Text> Smoothness: {berry?.smoothness}</Text>
            <Text> Soil dryness: {berry?.soil_dryness}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#6cad7d",
        height: 500,
    },
    info: {
        backgroundColor: "white",
    }
})
