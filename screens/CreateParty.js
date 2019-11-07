import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import PickerPlayers from '../components/PickerPlayers.js';

export default class CreateParty extends React.Component {
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
            <Image style={styles.image}
                source={require('../assets/logo_unique.png')} />
            <Text style={styles.title}>G S O A F</Text>
            <PickerPlayers /> 
            <View style={{width:250, marginTop:50}}>
                <Button
                    color="#FFB341"
                    title="Jouer"
                    onPress={() => navigate('Accueil')} />
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
        marginTop:25,
        resizeMode: 'stretch',
    },
});