

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/puremed.jpg')} style={styles.logo} />
      
      <Text style={styles.createAccount}>Create an Account</Text>
      <Text style={styles.welcomeMessage}>
        Welcome to PureMed Pharmacy, create an account with us to get started.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#aaa" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.accountText}>I already have an account.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 20,
  },
  createAccount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  welcomeMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    color: '#666',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
  },
  registerButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
