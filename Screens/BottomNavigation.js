// BottomNavigation.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>

      
      
      {/* Bottom Icons */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comments" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: '#333',
    fontSize: 18,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24, // Increased font size for better visibility
    color: '#333',
    marginHorizontal: 10, // Increased margin for spacing
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 23,
  },
  headerIcon: {
    fontSize: 30,
    color: 'white', // Set the text color to transparent
    textShadowColor: 'blue', // Set the color of the text shadow to blue
    textShadowOffset: { width: 0, height: 0 }, // Set the offset of the shadow to zero
    textShadowRadius: 3, // Set the radius of the shadow to create an outline effect
  },
  logo: {
    width: 200, // Adjust width to fit the logo
    height: 75, // Adjust height to fit the logo
    resizeMode: 'contain',
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 20,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 20,
    color: '#888',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categories: {
    width: '100%',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '30%',
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 30,
    color: '#007BFF',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  specialOffers: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
  },
  offerText: {
    fontSize: 16,
    color: '#333',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,  // Add border only to the top
  },
  bottomIcon: {
    fontSize: 30,
    color: 'white', // Set the text color to transparent
    textShadowColor: 'blue', // Set the color of the text shadow to blue
    textShadowOffset: { width: 0, height: 0 }, // Set the offset of the shadow to zero
    textShadowRadius: 3, // Set the radius of the shadow to create an outline effect
  },
  bottomIconText: {
    fontSize: 12,
    color: '#007BFF',
    textAlign: 'center',
  },
});
export default BottomNavigation;
