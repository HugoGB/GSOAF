import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Accueil from './components/Accueil';
import Regles from './components/Regles';

export default function App() {
  return (
    <View style={styles.container}>
      <Accueil/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b586b',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
