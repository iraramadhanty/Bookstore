import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,       
        Dimensions
} from 'react-native';
import {Card} from 'react-native-paper';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const {width} = Dimensions.get('window')

const Produk = ({navigation}) => {
  const [data, setData] = useState([]);
  const [judul_buku, setJudul_Buku] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.13:3000/koleksi')
    .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
        });
  }, []);

  const buttonDelete = async (judul) => {
    await axios.put('http://192.168.0.13:3000/deleteBuku', {
      judul_buku: judul,
    }).then((response) => {
      if(response){
        navigation.navigate('Admin')
        alert(response.data.message)
      }
    })
  }

  const convertToRupiah = (angka) => {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return (
      'Rp. ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  };

  const renderProduk = data.map((map) => {
      return (
        <TouchableOpacity onPress={()=> navigation.navigate('Detail', map)}>
         <Animatable.View animation="zoomIn" duraton='4000' >
            <Card style={styles.card}>
              <Card.Cover 
                style={styles.image}
                source={{uri:map.gambar}} />
              <Text style={styles.text1}>{map.judul_buku}</Text>
              <Text style={styles.text}>{map.nama_penulis}</Text>
              <Text style={styles.text2}>{map.nama_kategori}</Text>
              <Text style={styles.text3}>{convertToRupiah(map.harga)}</Text>
              <TouchableOpacity
                onPress={()=> navigation.navigate('EditProduct', map)}
                style={{...styles.button, marginTop: 20}}>
                  <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=> buttonDelete(map.judul_buku)} 
                style={styles.button}>
                  <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </Card>
          </Animatable.View>
        </TouchableOpacity>
      );
    })

    return(
        <ScrollView>
          <View style={{backgroundColor: 'white'}}>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.header}>
              <Text style={styles.title}>Product</Text>
              <AntDesign name="arrowleft" size={27} color="black" style={styles.icon} />
          </TouchableOpacity>
          </View>
            <View style={styles.produk}>{renderProduk}</View>
        </ScrollView>
    )
}

export default Produk;

const styles = StyleSheet.create ({
  header: {
    width: width,
    height: 55,
    backgroundColor: '#7ADE84',
    flex: 1,
    elevation: 4
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold'
  },  
  icon: {
    position: 'absolute',
    marginTop: 15,
    marginStart: 8
  },
  baseContainer: {
    backgroundColor: 'white',
    borderRadius: 14,
    marginTop: 28,
    paddingVertical: 15,
    shadowColor: '#000',
    elevation: 4,
    marginHorizontal: 10,
    padding: 10
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  input: {
    width: width - 100,
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    color: 'black',          
  },
  produk: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    marginTop: 15,
    height: 175, 
    width: 130,
    alignSelf: 'center'
  },
  text1: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20
  },
  text:{
    marginTop: 10,
    fontSize: 15,
    marginStart: 5,
    color: 'grey'
  },
  text2:{
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    marginStart: 5
  },
  text3: {
    marginTop: 15,
    fontSize: 17,
    textAlign: 'right',
    color: 'red',
    paddingEnd: 10
  },
  card: { 
    width: 200,
    height: 550,
    marginTop: 20,
    borderRadius: 15,
    elevation: 5,
    marginHorizontal: 4
  },
  button: {
      width: width - 250,
      backgroundColor: '#51b56e',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      marginTop: 10,
      alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center'
  },
})