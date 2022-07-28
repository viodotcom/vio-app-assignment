import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.title}>Welcome!</Text>
    <Text style={styles.description}>
      This is the repository for <Text style={styles.highlight}>FindHotel</Text>{' '}
      mobile app assignment!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});

export default App;
