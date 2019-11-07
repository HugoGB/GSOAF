import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Input } from 'react-native-elements';

class PickerPlayers extends React.Component {
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
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                  </View>
      } else if (this.state.user == "trois") {
         inputs = <View style={styles.inputView}>
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 3' />
                  </View>
      } else if (this.state.user == "quatre") {
         inputs = <View style={styles.inputView}>
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 3' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 4' />
                  </View>
      } else if (this.state.user == "cinq") {
         inputs = <View style={styles.inputView}>
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 3' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 4' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 5' />
                  </View>
      } else if (this.state.user == "six") {
         inputs = <View style={styles.inputView}>
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 3' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 4' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 5' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 6' />
                  </View>
      } else if (this.state.user == "sept") {
         inputs = <View style={styles.inputView}>
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 3' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 4' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 5' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 6' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 7' />
                  </View>
      } else if (this.state.user == "huit") {
         inputs = <View style={styles.inputView}>
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 1' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 2' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 3' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 4' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 5' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 6' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 7' />
                     <Input inputStyle={styles.input}
                        label='Nom du joueur 8' />
                  </View>
      }
      return (
         <View>
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
   },
   input: {
      color: 'white',
   },
   picker: {
      marginTop: 50,
      width: 100,
      color: 'white',
      alignContent: 'center',
   },
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   uno: {
      color: 'red',
      fontSize: 18,
   }
})