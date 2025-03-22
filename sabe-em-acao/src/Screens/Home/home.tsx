import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
  const handleGreenButtonPress = () => {
  };

  const handleOrangeButtonPress = () => {
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.greenContainer} onPress={handleGreenButtonPress}>
        <Text style={styles.buttonText}>Area dos País</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orangeContainer} onPress={handleOrangeButtonPress}>
        <Text style={styles.buttonText}>Area das Crianças</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenContainer: {
    height: 50,
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#008000',
    padding: 10,
    margin: 10,
    borderRadius: 5,

  },
  orangeContainer: {
    height: 50,
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#f37021',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },


});
