import React, { Component } from 'react';
import { View, TextInput, Text, Picker, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class PickerPlayers extends React.Component {

   constructor(props){
      super(props);
    }

   
   render() {
 
      return (
         <View style={{height: '55%'}}>
            <Picker  style={styles.picker} selectedValue={this.props.users.length} onValueChange={this.props.setPlayersNumber}>
               <Picker.Item label="2 joueurs" value={2} />
               <Picker.Item label="3 joueurs" value={3} />
               <Picker.Item label="4 joueurs" value={4} />
               <Picker.Item label="5 joueurs" value={5} />
               <Picker.Item label="6 joueurs" value={6} />
               <Picker.Item label="7 joueurs" value={7} />
               <Picker.Item label="8 joueurs" value={8} />
            </Picker>

            <ScrollView style={styles.inputView}>
              { this.props.users.map( (userName, id) => 
                  <Input inputStyle={styles.input} label={'Nom du joueur #' + (id+1)} key={id} onChangeText={(text) => 
                    { this.props.monCallbackDeMiseAJourDuFutur(id, text)}} value={userName} /> )}
            </ScrollView>
         
         </View>
      )
   }
}
export default PickerPlayers

const styles = StyleSheet.create({
   inputView: {
      width: 225,
      maxHeight: '80%',
   },
   input: {
      color: 'white',
      backgroundColor: '#3e7e87',
   },
   picker: {
      marginTop: 50,
      marginBottom: 25,
      color: 'white',
      alignContent: 'center',
      justifyContent: 'center'
   },
   uno: {
      color: 'red',
      fontSize: 18,
   }
})