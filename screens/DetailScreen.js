import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const DetailScreen = () =>{
    return(
        <View style={styles.screen}>
            <Text>Detail Screen</Text>
        </View>
    )
}

export default DetailScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})