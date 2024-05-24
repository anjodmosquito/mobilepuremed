import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function CheckoutScreen() {
  const navigation = useNavigation();
  const [paymentOption, setPaymentOption] = useState('Reservation Fee');
  const [paymentMethod, setPaymentMethod] = useState('GCash');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayLater = () => {
    setIsLoading(true);
    setTimeout(() =>{
      setIsLoading(false);
      navigation.navigate('Reservedone');
    }, 1000);
    
  };

  const handlePayNow = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Reservedone');
      
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <View style={styles.content}>
      <View style={styles.cartItem}>
          <Image source={require('../assets/puremed.jpg')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Aspirin</Text>
            <Text style={styles.productDescription}>80 mg Capsule</Text>
            <Text style={styles.productPrice}>1.50</Text>
          </View>
          
        </View>
        <Text style={styles.cartInfo}>1 Item in your cart</Text>
        <Text style={styles.totalAmount}>TOTAL <Text style={styles.amount}>1.50</Text></Text>

        <Text style={styles.sectionTitle}>Payment Options</Text>
        <TouchableOpacity style={styles.optionContainer} onPress={() => setPaymentOption('Reservation Fee')}>
          <View style={styles.option}>
            <Icon name={paymentOption === 'Reservation Fee' ? 'dot-circle-o' : 'circle-o'} size={20} color="#007BFF" />
            <Text style={styles.optionText}>Reservation Fee</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={() => setPaymentOption('Full Payment')}>
          <View style={styles.option}>
            <Icon name={paymentOption === 'Full Payment' ? 'dot-circle-o' : 'circle-o'} size={20} color="#007BFF" />
            <Text style={styles.optionText}>Full Payment</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity style={styles.optionContainer} onPress={() => setPaymentMethod('GCash')}>
          <View style={styles.option}>
            <Icon name={paymentMethod === 'GCash' ? 'dot-circle-o' : 'circle-o'} size={20} color="#007BFF" />
            <Image source={require('../assets/gcash.png')} style={styles.paymentIcon} />
            <Text style={styles.optionText}>GCash</Text>
          </View>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#007BFF" style={styles.loading} />
      ) : (
        <>
          <TouchableOpacity style={styles.payLaterButton} onPress={handlePayLater}>
            <Text style={styles.buttonText}>Pay Later</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(175, 216, 255, 0.5)', // Light blue with 50% opacity
    shadowColor: '#007BFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: '#E0E0E0',
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
    marginVertical: 20,
  },
  cartInfo: {
    fontSize: 16,
    color: '#333',
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
  totalAmount: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    marginBottom: 20,
  },
  amount: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  paymentIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  payLaterButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
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
  loading: {
    marginTop: 20,
  },
});
