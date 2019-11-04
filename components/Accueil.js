import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function Accueil() {
  return (
    <View>
        <View style={styles.titre}>
            <Text style={styles.title}>G S O A F</Text>
        </View>

        <View style={styles.image}>
            <Image style={styles.img}
                source={require('../assets/logo.png')} />
        </View>

        <View style={styles.bouton}>
            <Button
                title="Jouer"
                onPress={() => Alert.alert('Components Jeux')} />
            <Button
                title="Règles"
                onPress={() => Alert.alert('Components Regles')} />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    bouton: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titre: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    title: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold'
    },
    img: {
        position: 'absolute',
        width: 300,
        height: 100,
        resizeMode: 'stretch',
    },
});
