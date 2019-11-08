import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import PickerPlayers from '../components/PickerPlayers.js';
import update from 'immutability-helper';
import { Updates } from 'expo';

export default class CreateParty extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users: ['', ''],
    };
  }

  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#114147'
    },
  };

  userNameChangedCallback( id, newName ){
    //  users[id] = newName
    this.setState({
      users: update(this.state.users, {[id]: {$set: newName}})
    })
  }
  setPlayersNumber(number){    
    let newUsers= JSON.parse(JSON.stringify(this.state.users))
    for(let i = this.state.users.length ; i < number ; i ++){
      newUsers.push('')
    }      
    newUsers = newUsers.slice(0, number)
    this.setState({
      users: newUsers
    })
  }

  render() {    
    const {navigate} = this.props.navigation;
    
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={require('../assets/logo_unique.png')} />
            <Text style={styles.title}>G S O A F</Text>
            <PickerPlayers monCallbackDeMiseAJourDuFutur={ this.userNameChangedCallback.bind(this /*  on envoie en plus le contexte
                                                                                                      c'est à dire CreateParty  */ )  }
            //             monCallbackDeMiseAJourDuFutur={ (id, text) => this.userNameChangedCallback(id, text)  }
                  setPlayersNumber={this.setPlayersNumber.bind(this)}
                   users={ this.state.users} />
          <View style={{width:250, marginTop:50}}>
             <Button
                color="#FFB341"
                title="Jouer"
                onPress={() => navigate('DeroulePartie', {
                  users: this.state.users
                })} />
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