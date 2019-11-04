import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Accueil() {
  return (
    <View>
        <View style={styles.image}>
            <Image style={styles.img}
                source={require('../assets/logo.png')} />
        </View>

        <View style={styles.titre}>
            <Text style={styles.title}>G S O A F</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    titre: {
        flex: 2,
        alignItems: 'center',
        marginTop: 50,
    },
    title: {
        color: 'white',
    },
    img: {
        position: 'absolute',
        width: 200,
        height: 75,
        resizeMode: 'stretch'
    },
});
