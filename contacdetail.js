import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const ContactDetail = ({ route, navigation }) => {
  const { contact } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: contact.photo }} style={styles.photo} />
      <Text>Name: {contact.name}</Text>
      <Text>Phone: {contact.phone}</Text>
      <Text>Address: {contact.address}</Text>
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
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default ContactDetail;
