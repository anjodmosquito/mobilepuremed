import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const defaultEmail = 'admin';
  const defaultPassword = 'admin';

  const handleLogin = () => {
    if (email === defaultEmail && password === defaultPassword) {
      navigation.navigate('Dashboard');
      Alert.alert('Success', 'Welcome!');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/puremed.jpg')} style={styles.logo} />

      <Text style={styles.createAccount}>Login to your Account</Text>
      <Text style={styles.welcomeMessage}>
        Welcome to PureMed Pharmacy, log in to get started.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.registerText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.accountText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.accountText}>Register?</Text>
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
    color: 'black',
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
