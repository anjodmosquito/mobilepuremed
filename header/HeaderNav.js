import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

const headerStyles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 23,
  },
  headerIcon: {
    fontSize: 30,
    color: 'white',
    textShadowColor: 'blue',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  logo: {
    width: 200,
    height: 75,
    resizeMode: 'contain',
  },
};

export default function HeaderNav({ onBellPress, onCartPress }) {
  return (
    <View style={headerStyles.header}>
      <TouchableOpacity onPress={onBellPress}>
        <Icon name="bell" style={headerStyles.headerIcon} />
      </TouchableOpacity>
      {/* Assuming 'logo' style is for the image */}
      <Image source={require('../assets/puremed.jpg')} style={headerStyles.logo} />
      <TouchableOpacity onPress={onCartPress}>
        <Icon name="shopping-cart" style={headerStyles.headerIcon} />
      </TouchableOpacity>
    </View>
  );
}
