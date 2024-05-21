import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav() {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 0.5, borderTopColor: '#ccc', backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="home" style={{ fontSize: 30, color: 'white', textShadowColor: 'blue', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 3 }} />
        <Text style={{ fontSize: 12, color: '#007BFF', textAlign: 'center' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="search" style={{ fontSize: 30, color: 'white', textShadowColor: 'blue', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 3 }} />
        <Text style={{ fontSize: 12, color: '#007BFF', textAlign: 'center' }}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" style={{ fontSize: 30, color: 'white', textShadowColor: 'blue', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 3 }} />
        <Text style={{ fontSize: 12, color: '#007BFF', textAlign: 'center' }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="comments" style={{ fontSize: 30, color: 'white', textShadowColor: 'blue', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 3 }} />
        <Text style={{ fontSize: 12, color: '#007BFF', textAlign: 'center' }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}
