import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PokeApi, { Berry } from '../api/PokeApi'
import useApi from '../hooks/useApi'

type Props = {berryId: number}

export default function BerryScreen({berryId}: Props) {

    const getBerryApi = useApi<Berry>(PokeApi.getBerry)

    useEffect(() => {
        getBerryApi.request(berryId)
    }, [berryId])

    return (
        <View>
            <Text></Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#6cad7d",
        height: 100,
    },
    info: {
        backgroundColor: "white",
    }
})
