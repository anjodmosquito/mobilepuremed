import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.headerIcon1} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Steve Gomez</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="bell" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shopping-cart" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Content */}
      <ScrollView style={styles.chatContainer}>
        <View style={styles.message}>
          <Text style={styles.messageText}>Hello</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={[styles.message, styles.myMessage]}>
          <Text style={styles.messageText}>hi! im Steve, how can i help you?</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>im having issues with my reservation</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={[styles.message, styles.myMessage]}>
          <Text style={styles.messageText}>Please follow instructions accordingly</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>thank u sir</Text>
          <Text style={styles.messageTime}>5 minutes ago</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#ADD8E6',
    shadowColor: '#007BFF',
    elevation: 10, // For Android
  },
  iconContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 10,
  },
  headerIcon1: {
    fontSize: 25,
    color: 'blue',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginBottom: 10,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 8,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 10,
    color: 'white',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  bottomIcon: {
    fontSize: 30,
    color: 'white',
    textShadowColor: 'blue',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  bottomIconText: {
    fontSize: 12,
    color: '#007BFF',
    textAlign: 'center',
  },
});
