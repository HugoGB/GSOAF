import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Partie extends React.Component {

    render() {        
        const { navigation } = this.props;
        return (
            <View>
                <Text>Pour la suite de ce jeu il faut un narrateur désigner le narrateur :</Text>
                
                <Text>itemId: {JSON.stringify(navigation.getParam('users'))}</Text>
            </View>
        )
        //Rouge ou Noir
        //Plus ou moins
        //Intene ou externe
        //Pique Coeur Carreau Trefle ?
    }
}