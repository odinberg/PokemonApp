import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import Posts, {Post} from '../components/Posts'
import postList from '../../assets/postlist'
import Header from '../components/Header'

export default function Feed() {
    return (
     <SafeAreaView>
   
        <View style={styles.posts}>
                <FlatList
                data={postList}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({item}) => <Posts post={item}/>}/>
            </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({posts: {}})
