import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'Fadhil abdillah', phone: '+62 896-6398-4287', address: 'Lembursitu wak jauh', photo: 'https://scontent.fbdo9-1.fna.fbcdn.net/v/t1.6435-1/142791014_2462170747262104_1000187661847335855_n.jpg?stp=c50.0.200.200a_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeE13Xc7MXlOaWtUc-SydK7jg7AdNwHzAh2DsB03AfMCHV49nZ97GOMwqNiJSlFDKgWYG_BcB66RyQPPAFDxSBy-&_nc_ohc=J4BrpGXdQIsQ7kNvgEzYVkS&_nc_ht=scontent.fbdo9-1.fna&oh=00_AYBrTuM2t1DcDCEaq4nIy2UJfAAokues7svVMXpv_FU2gQ&oe=66A9E519' },
  { id: '2', name: 'Dani akhmad maulana', phone: '+62 852-1997-1516', address: 'Nangeleng masih kota', photo: 'https://scontent.fbdo9-1.fna.fbcdn.net/v/t31.18172-8/27912768_416498142124791_8924461097435391284_o.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFJm7ba6653sRtHVzvqYdEANBK9GkSpkPQ0Er0aRKmQ9K7Y1o7id_c6i4lgpdMC1VdLgI4-WGiHBtdeR2StIwjy&_nc_ohc=3PrNTww-66sQ7kNvgGWyYmf&_nc_ht=scontent.fbdo9-1.fna&oh=00_AYCy0QIDGPaNXejatZmFx4iU9mf0ava655jb4p0_x2pv9Q&oe=66AA055B' },
  { id: '3', name: 'Daffa Al-Faruq', phone: '+62 857-9560-6023', address: 'Kebonjati, deket banget brok', photo : 'https://scontent.fbdo9-1.fna.fbcdn.net/v/t1.6435-9/184127201_2935327093389677_770880325979260530_n.jpg?stp=c2.0.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=6809ec&_nc_eui2=AeGm1SbXxxZ67U9n8ySoEuLbt_Qsb5t8Jvi39Cxvm3wm-Mncfy8Rdm6X08cmJcoLIJvnMEzkY04fVVaT5l8fxnMf&_nc_ohc=H0PtwNiLLnMQ7kNvgE_dULq&_nc_ht=scontent.fbdo9-1.fna&oh=00_AYAbCsOHjEniRMBNrSlNUHmVWVbcJWcEdDYNwC00hyPUZg&oe=66A9FEB9' },
];

const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <View style={styles.textContainer}>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
            <Button
              title='Detail Kontak'
              onPress={() => navigation.navigate('ContactDetail', { contact: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
});

export default Contact;
