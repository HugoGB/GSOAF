import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

import Accueil from './components/Accueil';
import Regles from './components/Regles';

export default function App() {
  return (
    <View style={styles.container}>
      <Accueil/>
    </View>
  );
}

// const AppNavigator = createStackNavigator({
//   Home: { screen: Accueil },
//   Players: { screen: Joueurs }
// },{ 
//   initialRouteName: "Home" 
// });

// const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b586b',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
