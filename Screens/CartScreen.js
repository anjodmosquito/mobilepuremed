import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your cart</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Cart Item */}
        <View style={styles.cartItem}>
          <Image source={require('../assets/puremed.jpg')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Aspirin</Text>
            <Text style={styles.productDescription}>80 mg Capsule</Text>
            <Text style={styles.productPrice}>1.50</Text>
          </View>
          <View style={styles.quantityControls}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.removeButton}>
            <Icon name="times" style={styles.removeIcon} />
          </TouchableOpacity>
        </View>

        {/* Payment Summary */}
        <View style={styles.paymentSummary}>
          <Text style={styles.paymentSummaryText}>Payment Summary</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Order Total</Text>
            <Text style={styles.paymentValue}>1.50</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Total</Text>
            <Text style={styles.paymentValue}>1.50</Text>
          </View>
        </View>

        {/* Reserve Button */}
        <TouchableOpacity style={styles.reserveButton} onPress={() => navigation.navigate('Reservation')}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-start',
    
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
    marginRight: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: 'black',
  },
  mainContent: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#000',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 16,
  },
  removeIcon: {
    fontSize: 20,
    color: '#FF0000',
  },
  paymentSummary: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  paymentSummaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  paymentLabel: {
    fontSize: 16,
    color: '#777',
  },
  paymentValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  reserveButton: {
    marginTop: 16,
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  reserveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
