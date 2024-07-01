import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Contact</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='Go to About'
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Go to Contact'
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '40%',
  },
});

export default Home;
