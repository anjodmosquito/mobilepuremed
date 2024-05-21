// BottomNavigation.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomIconsContainer}>
      <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('Home')}>
        <Feather name="home" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('User')}>
        <Feather name="user" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('Search')}>
        <Feather name="search" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcon} onPress={() => navigation.navigate('Chat')}>
        <Feather name="message-circle" size={24} color="blue" />
      </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 10, // Adjust borderRadius to make corners less rounded
    padding: 5,
    width: 60, // Adjust width to make it rectangular
    height: 40, // Adjust height to make it rectangular
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Optional: Add background color to distinguish the button
    
  },
});

export default BottomNavigation;