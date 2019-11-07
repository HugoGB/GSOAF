import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { AuthSession } from 'expo';

export default class Accueil extends React.Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#114147'
    },
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

            <View style={styles.head}>
                <Text style={styles.title}>G S O A F</Text>
                <Image style={styles.image}
                    source={require('../assets/logo_unique.png')} />
                <Text style={styles.subtitle}>Jeux de carte pour boire</Text>
            </View>

            <View style={styles.content}>
                <View style={{width:250}}>
                    <Button
                        color="#FFB341"
                        title="Jouer"
                        onPress={() => navigate('CreateParty')} />
                </View>
                <View style={{marginTop:25, width:250}}>
                    <Button 
                        color="#FFB341"
                        title="Règles"
                        onPress={() => navigate('Regles')} />
                </View>               
            </View>

            <Text style={styles.prevention}>Attention l'abus d'alcool est très bon pour la santé.
                En poursuivant, vous confirmez que vous ouvrez cette application pour vous mettre une méga murge.
                Merci de bien finir vos bouteilles d'alcool et de les jeter dans les poubelles prévues pour.</Text> 

        </View>
    );
  }
}

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#195C65',
    },
    head: {
        alignItems: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prevention: {
        flex: 1,
        textAlign: 'justify',
        color: 'white',
        fontSize: 18,
    },
    title: {
        padding: 5,
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
    },
    subtitle: {
        padding: 5,
        color: 'white',
        fontSize: 18,
        
    },
    image: {
        padding: 5,
        aspectRatio: 1,
        height: 100,
        left: 10,
        resizeMode: 'stretch',
    },
});
