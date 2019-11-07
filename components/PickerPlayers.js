import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class PickerPlayers extends React.Component {

   // constructor(props){
   //    super(props);
   //    this.state= {
   //       names: props.navigation.state.params.names,
   //    }
   // }

   // componentWillReceiveProps(newProps) {
   //    this.setState({names: newProps.names});
   // }

   // state = { user: '' }
   // updateUser = (name, id) => {
   //    this.setState({ names.set: name })
   // }

   // updateUsers(){
   //    for (var i=0; i < this.state.user; i++){
         
   //    }
   // }
   
   state = { user: '' }
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      let inputs;
      if (this.state.user == "un") {
         inputs = <Text style={styles.uno}>PAS DE SOIFFARD SOLITAIRE</Text>;
      } else if (this.state.user == "deux") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == "trois") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3' /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == "quatre") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4' /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == "cinq") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5' /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == "six") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 6' /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == "sept") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 6' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 7' /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == "huit") {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1' />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 6' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 7' /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 8' /></View>
                     </ScrollView>
                  </View>
               
      }
      return (
         <View style={{height: '55%'}}>
            <Picker style={styles.picker} selectedValue={this.state.user} onValueChange={this.updateUser}>
               <Picker.Item label="1" value="un" />
               <Picker.Item label="2" value="deux" />
               <Picker.Item label="3" value="trois" />
               <Picker.Item label="4" value="quatre" />
               <Picker.Item label="5" value="cinq" />
               <Picker.Item label="6" value="six" />
               <Picker.Item label="7" value="sept" />
               <Picker.Item label="8" value="huit" />
            </Picker>

            {inputs}
         
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
      width: 100,
      color: 'white',
      alignContent: 'center',
      justifyContent: 'center'
   },
   uno: {
      color: 'red',
      fontSize: 18,
   }
})