import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Partie extends React.Component {
    static navigationOptions = {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#114147'
      },
    };
    render() {        
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../assets/logo_unique.png')} />
                <Text style={styles.text}>G S O A F</Text>

                <Text style={styles.text2}>Pour la suite de ce jeu il faut un narrateur désigner le narrateur :</Text>                
                <Text style={styles.text}>Tableau des joueurs: {JSON.stringify(navigation.getParam('users'))}</Text>
            </View>
        )

        //Rouge ou Noir
        //Plus ou moins
        //Intene ou externe
        //Pique Coeur Carreau Trefle ?

    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#195C65',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        color: 'white',
    },
    text2: {
        color: 'white',
        marginTop: 25,
    },
    image: {
        width: 80,
        height: 75,
        left: 12,
        marginTop:25,
        resizeMode: 'stretch',
    },
});