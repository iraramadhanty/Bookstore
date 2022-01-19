import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,       
        Dimensions
} from 'react-native';
import {Card} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window')

const Search = () => {
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.0.13:3000/koleksi')
    .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson);
          setFilterData(responseJson);
        });
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item.judul_buku ? item.judul_buku.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(data);
      setSearch(text);
    }
  };

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

  const renderProduk = filterData.map((map) => {
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
    })

    return(
      <View>
        <TextInput
          onChangeText={(val) => searchFilter(val)}
          style={styles.baseContainer}
          underlineColorAndroid='transparent'
          placeholder='Search'
          keyboardType='default'
          returnKeyType='go'
          value={search}
        />
        <ScrollView>
          <View>
            <View style={styles.produk}>{renderProduk}</View>
          </View>
        </ScrollView>
      </View>
    )
}

export default Search;

const styles = StyleSheet.create ({
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
      height: 370,
      marginTop: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      elevation: 5,
      marginHorizontal: 4
    },
})