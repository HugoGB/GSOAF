import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function CreateParty() {
  return (
    <View style={styles.container}>
        <Image style={styles.image}
            source={require('../assets/logo_unique.png')} />
        <Text style={styles.title}>G S O A F</Text>        
    </View>
  );
}

// creation variable Partie
class Partie {
    
}
// Ajouter joueurs  
//Questions(4) pour distribution de cartes
//montage pyramide 

const styles = StyleSheet.create({
    container:{
        display: 'flex' ,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
    },
    image: {
        width: 80,
        height: 75,
        left: 12,
        marginTop:75,
        resizeMode: 'stretch',
        // marginTop:75,
        // width: 200,
        // height: 75,
        // resizeMode: 'stretch'
    },
});