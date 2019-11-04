import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Accueil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>G S O A F</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b586b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
});
