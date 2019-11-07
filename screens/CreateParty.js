import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PickerPlayers from '../components/PickerPlayers.js';

export default class CreateParty extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../assets/logo_unique.png')} />
                <Text style={styles.title}>G S O A F</Text>
                <View style={styles.picker}>
                    <PickerPlayers />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195C65',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        color: 'white',
    },
    image: {
        width: 80,
        height: 75,
        left: 12,
        marginTop: 25,
        resizeMode: 'stretch',
    },
    picker: {
        marginTop: 50,
        width: 100,
        color: 'white',
        backgroundColor: '#558187'
    },
});