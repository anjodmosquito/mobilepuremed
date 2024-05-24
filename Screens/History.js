import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function History() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reservation</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Ongoing')}>
          <Text style={styles.tab}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Text style={[styles.tab, styles.activeTab]}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Date and Time */}
      <View style={styles.dateContainer}>
        <Icon name="calendar" style={styles.calendarIcon} />
        <Text style={styles.dateText}>May 24, 2024</Text>
        <Text style={styles.timeText}>6:40 pm</Text>
      </View>

      {/* Timeline */}
      <View style={styles.timelineContainer}>
        <View style={styles.timelineItem}>
          <Icon name="check-circle" style={styles.timelineIconActive} />
          <Image source={require('../assets/claim.png')} style={styles.timelineImage} />
          <Text style={styles.timelineText}>Reservation claimed successfully.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(175, 216, 255, 0.5)', // Light blue with 50% opacity
    shadowColor: '#007BFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerIcon: {
    fontSize: 24,
    color: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 20,
    color: '#777',
  },
  activeTab: {
    color: '#007BFF',
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  calendarIcon: {
    fontSize: 20,
    color: '#333',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    color: '#333',
  },
  timelineContainer: {
    flex: 1,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timelineIconActive: {
    fontSize: 20,
    color: '#007BFF',
    marginRight: 10,
  },
  timelineIcon: {
    fontSize: 20,
    color: '#ddd',
    marginRight: 10,
  },
  timelineImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  timelineText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});
