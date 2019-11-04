import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Accueil() {
  return (
    <View>
      <Image source={require('../assets/logo.svg')} />
      <Text style={styles.title}>G S O A F</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
  },
});
