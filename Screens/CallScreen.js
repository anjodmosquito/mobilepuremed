import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CallScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Call Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default CallScreen;
