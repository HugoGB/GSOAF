import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerPlayers extends React.Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker style={styles.picker} selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "1" value = "un" />
               <Picker.Item label = "2" value = "deux" />
               <Picker.Item label = "3" value = "trois" />
               <Picker.Item label = "4" value = "quatre" />
               <Picker.Item label = "5" value = "cinq" />
               <Picker.Item label = "6" value = "six" />
               <Picker.Item label = "7" value = "sept" />
               <Picker.Item label = "8" value = "huit" />
            </Picker>
         </View>
      )
   }
}
export default PickerPlayers

const styles = StyleSheet.create({
    picker: {
        color: 'white',
    },
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})