// screens/SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.replace('Register'); // Navigate to Home screen when button is pressed
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/puremed.jpg')} style={styles.image} />
      <Text style={styles.text}>Welcome to Puremed Pharmacy</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50, // Fully round the button
    alignItems: 'center', // Ensure the text is centered
    justifyContent: 'center', // Ensure the text is centered
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SplashScreen;
