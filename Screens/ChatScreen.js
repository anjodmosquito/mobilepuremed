import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import BottomNavigation from './BottomNavigation';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      
      <BottomNavigation />
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
      position: 'relative', // Add relative positioning to the container
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
      backgroundColor: '#FFC0CB',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#FF69B4',
      shadowColor: '#000',
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
      width: width * 0.6,
      height: width * 0.6,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
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
      padding: 10,
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#fff',
      borderTopWidth: 1,  // Add border only to the top
  borderTopColor: '#ccc',  // Border color for the top
    },
    bottomIcon: {
      borderRadius: 10,
      padding: 5,
      width: 60,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
  });
  

export default HomeScreen;
