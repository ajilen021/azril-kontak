import react from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
export default function Contact(props) {
return(
    <View style={styles.container}>
    <Image source={props.gambar} style={styles.img} />
        <View style={styles.teks}>
            <Text style={styles.title}>{props.judul} </Text>
            <Text style={styles.telp }>{props.telpon}</Text>

    <Contact
      gambar={require("../assets/sikasep.jpg")}
      judul="Leonardo de caprio"
      telpon="0765535531"/>
    <Contact
      //gambar="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg"
      gambar={require("../assets/kotok.jpg")}
      judul="Entin"
      telpon="0765535531" />
        </View>
    </View>
    )
}
    const styles =StyleSheet.create({
        container:{
            height:80,
            flexDirection:'row',
            alignItems:'center',
            borderBottomWidth:1,
            borderColor:'blue'  

        },
        img:{
         margin:15,
         width:50,
         height:50
        },
        teks:{flex:1},title:{
         fontWeight:'bold',
         fontSize:16
        },
        telp: {
         fontSize: 14,
         color:'#3498db'
    }
})
