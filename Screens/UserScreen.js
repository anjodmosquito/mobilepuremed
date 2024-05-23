import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

export default function UserScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/notification.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/puremed.jpg')} style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../assets/cart.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image source={require('../assets/notification.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Mary Adefarasin</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuItem}>
          <Icon name="user" style={styles.menuIcon} />
          <Text style={styles.menuText}>Personal Data</Text>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuItem}>
          <Icon name="cog" style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuItem}>
          <Icon name="history" style={styles.menuIcon} />
          <Text style={styles.menuText}>Reservation History</Text>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuItem}>
          <Icon name="file-text" style={styles.menuIcon} />
          <Text style={styles.menuText}>E-Statement</Text>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuItem}>
          <Icon name="share-alt" style={styles.menuIcon} />
          <Text style={styles.menuText}>Tell your friend</Text>
          <Icon name="chevron-right" style={styles.chevronIcon} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Icon name="headphones" style={styles.footerIcon} />
          <Text style={styles.footerText}>Feel free to consult our pharmacist</Text>
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
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutText: {
    color: 'blue',
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
  },
  menuIcon: {
    fontSize: 20,
    color: '#888',
    marginRight: 10,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  chevronIcon: {
    fontSize: 20,
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginVertical: 20,
  },
  footerIcon: {
    fontSize: 20,
    color: '#888',
    marginRight: 10,
  },
  footerText: {
    flex: 1,
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
