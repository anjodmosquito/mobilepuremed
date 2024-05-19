import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');

const CallScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Call Screen</Text>

      <Image source={require('../assets/puremed.jpg')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonreg} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonTextreg}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('Home')}>
          <Feather name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('User')}>
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('Call')}>
          <Feather name="phone-call" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>

    

    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 5,
    },
  iconContainer: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  container1: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFC0CB', // Pink background
    borderRadius: 10, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#FF69B4', // Border color
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    alignSelf: 'center', // Center-align the image horizontally
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    width: width * 0.4,
    alignItems: 'center',
  },
  buttonreg: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    width: width * 0.4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonTextreg: {
    color: '#fff',
    fontSize: 18,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  bottomIcon: {
    backgroundColor: '#ddd',
    borderRadius: 25,
    padding: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CallScreen;
