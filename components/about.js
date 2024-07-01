import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About Contact</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;