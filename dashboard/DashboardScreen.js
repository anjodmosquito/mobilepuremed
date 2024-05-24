import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function DashboardScreen() {
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
          <Image source={require('../assets/cart.png')} style={styles.headerIcon}  />
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
        <Text style={styles.sectionTitle}>Categories</Text>
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

        {/* Special Offers */}
        <View style={styles.specialOffers}>
          <Text style={styles.sectionTitle}>Medicines</Text>
          <View style={styles.medicineCard}>
            <Image source={require('../assets/puremed.jpg')} style={styles.offerImage} />
            <View style={styles.offerDetails}>
              <Text style={styles.offerText}>15% OFF - Aspirin 80 mg Tablet</Text>
              <Text style={styles.offerPrice}>₱1.50</Text>
            </View>
            <TouchableOpacity 
              style={styles.plusButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <Icon name="plus" style={styles.plusIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.medicineCard}>
            <Image source={require('../assets/puremed.jpg')} style={styles.offerImage} />
            <View style={styles.offerDetails}>
              <Text style={styles.offerText}>10% OFF - Beractant 25 mg/mL, 4 mL Depot Powder for Injection Vial</Text>
              <Text style={styles.offerPrice}>₱3.10</Text>
            </View>
            <TouchableOpacity 
              style={styles.plusButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <Icon name="plus" style={styles.plusIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Offer */}
        <View style={styles.todaysOffer}>
          <Text style={styles.sectionTitle}>Today's Offer</Text>
          <View style={styles.offerDetailCard}>
            <Image source={require('../assets/puremed.jpg')} style={styles.offerDetailImage} />
            <Text style={styles.offerDetailText}>Civodex is a sterile ophthalmic solution containing Dexamethasone -</Text>
          </View>
          <View style={styles.offerDetailCard}>
            <Image source={require('../assets/puremed.jpg')} style={styles.offerDetailImage} />
            <Text style={styles.offerDetailText}>Civodex is a sterile ophthalmic solution containing Dexamethasone -</Text>
          </View>
          <View style={styles.offerDetailCard}>
            <Image source={require('../assets/puremed.jpg')} style={styles.offerDetailImage} />
            <Text style={styles.offerDetailText}>Civodex is a sterile ophthalmic solution containing Dexamethasone -</Text>
          </View>
          <View style={styles.offerDetailCard}>
            <Image source={require('../assets/puremed.jpg')} style={styles.offerDetailImage} />
            <Text style={styles.offerDetailText}>Civodex is a sterile ophthalmic solution containing Dexamethasone -</Text>
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
    backgroundColor: 'rgba(175, 216, 255, 0.5)', // Light blue with 50% opacity
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
    borderRadius: 10,
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
  medicineCard: {
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
  plusButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#007BFF',
  },
  plusIcon: {
    fontSize: 20,
    color: 'white',
  },
  todaysOffer: {
    width: '100%',
    marginVertical: 20,
    marginBottom: 70,
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
    flex: 1,
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
