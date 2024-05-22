<View style={styles.bottomIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Search</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <Icon name="user" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Icon name="comments" style={styles.bottomIcon} />
          <Text style={styles.bottomIconText}>Chat</Text>
        </TouchableOpacity>
</View>

const styles = StyleSheet.create({
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