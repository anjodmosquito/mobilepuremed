import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReservedoneScreen = ({ navigation }) => {
  const handleGoBackHome = () => {
    navigation.replace('Dashboard'); // Navigate to Home screen when button is pressed
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkmarkContainer}>
        <Icon name="check-circle" size={100} color="#007BFF" />
      </View>
      <Text style={styles.thankYouText}>Thank you</Text>
      <Text style={styles.messageText}>Your reservation has been successfully placed</Text>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>R-021</Text>
      </View>
      <Text style={styles.instructionsText}>
        You can claim your reservation within 24hrs with the code given above. Please show it over the counter for your payment. Thank you!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoBackHome}>
        <Text style={styles.buttonText}>Go back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(175, 216, 255, 0.5)', // Light blue with 50% opacity
    shadowColor: '#007BFF',
    paddingHorizontal: 20,
  },
  checkmarkContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  codeContainer: {
    backgroundColor: '#6C7A89',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  codeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  instructionsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReservedoneScreen;
