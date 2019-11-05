import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function Accueil() {
  return (
    <View>
        <View style={styles.head}>
            <Text style={styles.title}>G S O A F</Text>
            <Text style={styles.subtitle}>Jeux de carte pour boire</Text>
            <Image style={styles.image}
                source={require('../assets/logo_unique.png')} />
        </View>

        <View style={styles.content}>
            <View>
                <Button 
                    color="#FFB341"
                    title="Jouer"
                    onPress={() => Alert.alert('Components Joueurs')} />
            </View>
            <View style={{marginTop:50}}>
                <Button 
                    color="#FFB341"
                    title="Règles"
                    onPress={() => Alert.alert('Components Regles')} />
            </View>            
            <Text style={styles.prevention}>Attention l'abus d'alcool est très bon pour la santé.
                En poursuivant, vous confirmez que vous ouvrez cette application pour vous mettre une méga murge.
                Merci de bien finir vos bouteilles d'alcool et de les jeter dans les poubelles prévues pour. 
                {'\n'}{'\n'} #EcoloMonGars</Text>
        </View>        
    </View>
  );
}

const styles = StyleSheet.create({    
    head: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    title: {
        top: 100,
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
    },
    subtitle: {
        top: 125,
        color: 'white',
        fontSize: 18,
    },
    prevention: {
        textAlign: 'center',
        top: 75,
        width: 350,
        color: 'white',
        fontSize: 18,
    },
    image: {
        top: 175,
        width: 110,
        height: 100,
        left: 10,
        resizeMode: 'stretch',
    },
});
