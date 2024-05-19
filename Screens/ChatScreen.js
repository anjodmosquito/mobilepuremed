import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ChatScreen = () => {
  const messages = [
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      createdAt: new Date(),
      user: {
        id: '2',
        name: 'ChatBot',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      id: '2',
      text: 'Hi! I have a question about my order.',
      createdAt: new Date(),
      user: {
        id: '1',
        name: 'User',
      },
    },
    // Add more messages here
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.user.id === '1' ? styles.userMessage : styles.botMessage]}>
      <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  botMessage: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 15,
  },
  userMessageBubble: {
    backgroundColor: '#0084ff',
    alignSelf: 'flex-end',
  },
  botMessageBubble: {
    backgroundColor: '#e5e5ea',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
  },
});

export default ChatScreen;
