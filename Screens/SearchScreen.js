import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Top Bar */}
      
      {/* Notification, Logo, and Cart */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/notification.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/puremed.jpg')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={require('../assets/cart.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search" style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/drugs.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Tablets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/medical.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Injections</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/syrup.png')} style={styles.categoryImage} />
              <Text style={styles.categoryText}>Syrups</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      </ScrollView>

      {/* Bottom Icons */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image source={require('../assets/home.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image source={require('../assets/search.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Image source={require('../assets/user.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image source={require('../assets/chat.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(175, 216, 800, 0.5)', // Light blue with 50% opacity
    shadowColor: '#007BFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  headerIcon: {
    fontSize: 30,
    color: 'white',
    textShadowColor: 'blue',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  logo: {
    width: 200,
    height: 75,
    borderRadius: 10,
  },
  mainContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 20,
    width: '100%',
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
    backgroundColor: '#00BFFF',
    borderRadius: 8,
    padding: 20,
    width: '30%',
    elevation: 2,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 13,
    color: '#333',
  },
  specialOffers: {
    width: '100%',
    marginVertical: 20,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  offerDetails: {
    flex: 1,
  },
  offerText: {
    fontSize: 16,
    color: '#333',
  },
  offerPrice: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  todaysOffer: {
    width: '100%',
    marginVertical: 20,
  },
  offerDetailCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerDetailImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  offerDetailText: {
    fontSize: 16,
    color: '#333',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  bottomIconText: {
    fontSize: 12,
    color: '#007BFF',
    textAlign: 'center',
  },
});
