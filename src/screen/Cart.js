import React, {useState, useEffect} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        Image,
        Dimensions,
        
    } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
  
const {width} = Dimensions.get('window')

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

const Cart = ({route, navigation}) => {
  const [cart, setCart] = useState([]);
  const data = route.params
  
  useEffect(() => {
    setCart(prevCart => [...prevCart,data])
  }, [data]);

  console.log('berhasil', cart)
    return(
        <ScrollView style={{backgroundColor: 'white'}}>
          {console.log(cart, 'bnr')}
            <View>{cart.map((map) => {
              console.log('hasil', map)
      return(
          <View style={styles.cart}>
            <Image
            style={styles.images}
            resizeMode="cover"
            source={{uri:map.gambar}} />
          <View>
            <View>
              <Text style={{fontSize: 20, marginBottom: 5}}>{map.judul_buku}</Text>
              <View style={styles.detailFooter}>
                <TouchableOpacity>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              <Text style={{fontSize: 18}}>1</Text>
              <AntDesign name="minuscircleo" size={24} color="black" />
              </View>
              <View style={styles.detailFooter}>
              <Text style={{fontSize: 18}}>Subtotal :</Text>
              <Text style={{fontSize: 18, color: 'red'}}>{convertToRupiah(map.harga)}</Text>
              </View>
              <TouchableOpacity style={styles.miniDeleteButton}>
                <Feather name="trash-2" size={24} color="black"  />
              </TouchableOpacity>
            </View>
          </View>
        </View> 
      )
    }
  )}</View>
        </ScrollView>
        
    )
}

export default Cart;

const styles = StyleSheet.create ({
  cart : {
    flexDirection: 'row',
    width: width-30,
    alignItems: 'center',
    height: 200,
    backgroundColor: '#ededed',
    marginVertical: 15,
    borderRadius: 15,
    elevation: 5,
    marginStart: 15,
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