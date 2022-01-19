import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

const {heigh, width} = Dimensions.get('window')

const Fiction = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('http://192.168.0.13:3000/koleksi')
    .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
        });
  }
  useEffect(() => {
    fetchData()
  }, []);

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
    if(map.nama_kategori === 'Fiction') {
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
            </Card>
          </Animatable.View>
        </TouchableOpacity>
      );
    }
    
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animatable.View style={styles.Logo}  animation="fadeInDown" duraton='3000' >  
          <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
              <AntDesign name="arrowleft" size={27} color="black" style={styles.icon} />
              <Text style={styles.title}>Fiction</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
       
        <View>
          <View style={styles.produk}>{renderProduk}</View>
        </View>
      </ScrollView>
    </View>
   
  );
};
export default Fiction;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    width: width,
    height: 55,
    backgroundColor: '#7ADE84'
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
  produk: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
    fontSize: 23
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
    margin: 2,
    width: 205,
    height: 350,
    marginTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5
  },
});