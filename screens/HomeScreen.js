import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const HomeScreen = () =>{
    return(
        <View style={styles.screen}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})