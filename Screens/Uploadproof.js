import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function Uploadproof({ navigation }) {
  const handleDone = () => {
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Back</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Upload Proof of Payment</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Image source={require('../assets/invoice.png')} style={styles.uploadImage} />
          <View style={styles.plusIconContainer}>
            <Icon name="plus" style={styles.plusIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(175, 216, 255, 0.5)',
    shadowColor: '#007BFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: '#E0E0E0',
    marginTop: 20,
    marginLeft: 20,
  },
  headerIcon: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginBottom: 20,
  },
  uploadImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  plusIconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    padding: 10,
  },
  plusIcon: {
    fontSize: 20,
    color: '#fff',
  },
  doneButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Styles for the Checkout button from CheckoutScreen
  payNowButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
