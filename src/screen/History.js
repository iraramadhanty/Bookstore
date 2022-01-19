import React, {useState, useEffect} from 'react'
import {View, 
        Text, 
        StyleSheet, 
        Image,
        Dimensions,
    } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window')


const History = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.13:3000/history')
    .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          setData(responseJson);
        });
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
    return (
      <View>
        <View style={styles.cart}>
          <Image
            style={styles.images}
            resizeMode="cover"
            source={{uri:map.gambar}} />
          <View>
            <View style={{maxWidth: 250}}>
              <Text style={{fontSize: 20, marginBottom: 5}}>{map.judul_buku}</Text>
              <View style={styles.detailFooter}>
                <Text style={{fontSize: 18}}>{map.totalBarang}</Text>
              </View>
              <View style={styles.detailFooter}>
                <Text style={{fontSize: 18}}>Subtotal :</Text>
                <Text style={{fontSize: 18, color: 'red'}}>{convertToRupiah(map.total)}</Text>
              </View>
            </View>
          </View>
        </View> 
      </View>
    );
  })

    return(
        <View style={styles.container}>
          <ScrollView>{renderProduk}</ScrollView>
        </View>
    )
}

export default History;

const styles = StyleSheet.create ({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cart : {
        flexDirection: 'row',
        width: width-30,
        alignItems: 'center',
        height: 200,
        backgroundColor: '#ededed',
        marginVertical: 15,
        borderRadius: 15,
        elevation: 5,
        marginHorizontal: 15,
        backgroundColor: 'white'
      },
      images:{
        width: 100, 
        height: 150, 
        marginHorizontal: 15
      },
      detailFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        marginVertical: 5
      },
      miniDeleteButton: {
        justifyContent: 'flex-end',
        marginStart: 200,
      },
      pembayaranBtn: {
        paddingHorizontal: 34,
        paddingVertical: 15,
        elevation: 4,
      },
      footerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
})