import React, { Component } from 'react';
import { View, TextInput, Text, Picker, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class PickerPlayers extends React.Component {

   constructor(props){
      super(props);
    }

   state = { user: '' }
   updateUser = (user) => {
      this.setState({ user: user })
   }   
 
   render() {
      let inputs;
      if (this.state.user == 1) {
         inputs = <Text style={styles.uno}>PAS DE SOIFFARD SOLITAIRE</Text>;
      } else if (this.state.user == 2) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>                        
                     { this.props.users.map( (userName, id) => 
                        <Input inputStyle={styles.input} label='Nom du joueur 1' key={id} onChangeText={(text) => 
                           { this.props.monCallbackDeMiseAJourDuFutur(id, text)}} 
                        value={userName} /> 
                     )}
                     </ScrollView>
                  </View>
      } else if (this.state.user == 3) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1'                           
                           onChangeText={(text) => this.setState({input1: text})} />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2'                           
                           onChangeText={(text) => this.setState({input2: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3'                           
                           onChangeText={(text) => this.setState({input3: text})} /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == 4) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1'                           
                           onChangeText={(text) => this.setState({input1: text})} />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2'                           
                           onChangeText={(text) => this.setState({input2: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3'                           
                           onChangeText={(text) => this.setState({input3: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4'                           
                           onChangeText={(text) => this.setState({input4: text})} /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == 5) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1'                           
                           onChangeText={(text) => this.setState({input1: text})} />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2'                           
                           onChangeText={(text) => this.setState({input2: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3'                           
                           onChangeText={(text) => this.setState({input3: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4'                           
                           onChangeText={(text) => this.setState({input4: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5'                           
                           onChangeText={(text) => this.setState({input5: text})} /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == 6) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1'                           
                           onChangeText={(text) => this.setState({input1: text})} />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2'                           
                           onChangeText={(text) => this.setState({input2: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3'                           
                           onChangeText={(text) => this.setState({input3: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4'                           
                           onChangeText={(text) => this.setState({input4: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5'                           
                           onChangeText={(text) => this.setState({input5: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 6'                           
                           onChangeText={(text) => this.setState({input6: text})} /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == 7) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1'                           
                           onChangeText={(text) => this.setState({input1: text})} />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2'                           
                           onChangeText={(text) => this.setState({input2: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3'                           
                           onChangeText={(text) => this.setState({input3: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4'                           
                           onChangeText={(text) => this.setState({input4: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5'                           
                           onChangeText={(text) => this.setState({input5: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 6'                           
                           onChangeText={(text) => this.setState({input6: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 7'                           
                           onChangeText={(text) => this.setState({input7: text})} /></View>
                     </ScrollView>
                  </View>
      } else if (this.state.user == 8) {
         inputs = <View style={styles.inputView}>
                     <ScrollView>
                        <Input inputStyle={styles.input}
                           label='Nom du joueur 1'                           
                           onChangeText={(text) => this.setState({input1: text})} />
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 2'                           
                           onChangeText={(text) => this.setState({input2: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 3'                           
                           onChangeText={(text) => this.setState({input3: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 4'                           
                           onChangeText={(text) => this.setState({input4: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 5'                           
                           onChangeText={(text) => this.setState({input5: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 6'                           
                           onChangeText={(text) => this.setState({input6: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 7'                           
                           onChangeText={(text) => this.setState({input7: text})} /></View>
                        <View style={{marginTop:30}}><Input inputStyle={styles.input}
                           label='Nom du joueur 8'                           
                           onChangeText={(text) => this.setState({input8: text})} /></View>
                     </ScrollView>
                  </View>
               }
      
      return (         
            // <View style={styles.inputView}>
            //   {  this.props.users.map( (userName, id) => 
            //       <Input inputStyle={styles.input} label='Nom du joueur 6' key={id} onChangeText={(text) => 
            //         { this.props.monCallbackDeMiseAJourDuFutur(id, text)}} value={userName} /> )}
            // </View>

        <View style={{height: '55%'}}>
            <Picker style={styles.picker} selectedValue={this.state.user} onValueChange={this.updateUser}>
               <Picker.Item label="1" value={1} />
               <Picker.Item label="2" value={2} />
               <Picker.Item label="3" value={3} />
               <Picker.Item label="4" value={4} />
               <Picker.Item label="5" value={5} />
               <Picker.Item label="6" value={6} />
               <Picker.Item label="7" value={7} />
               <Picker.Item label="8" value={8} />
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