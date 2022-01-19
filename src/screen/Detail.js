import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';


const {height, width} = Dimensions.get('window')

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

 

const Detail = ({route, navigation}) => {
    const [totalBarang, setTotalBarang] = useState(1);

    const buttonPlus = () => {
        if(totalBarang < data.stock){
            setTotalBarang(totalBarang+1);
        }
    }
  
    const buttonMinus = () => {
        if(totalBarang > 1){
            setTotalBarang(totalBarang-1);
        }
    }

    const data = route.params
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Text style={styles.title}>Detail Produk</Text>
                    <AntDesign name="arrowleft" size={27} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.detail}>
                <Image source={{uri:data.gambar}} style={styles.image}/>
                <View>
                    <View style={{maxWidth: 250}}>
                        <Text style={styles.text1} >{data.judul_buku}</Text>
                        <Text style={styles.text}>{data.nama_penulis}</Text>
                        <Text style={styles.harga}>{convertToRupiah(data.harga)}</Text>
                    </View>
                </View>
            </View>
 
            <View style={styles.divider}></View>
            <View style={styles.deskripsi}>
                <Text style={styles.text3}>Describe Produk</Text>
                <Text style={styles.text4}>Judul</Text>
                <Text style={styles.text5}>{data.judul_buku}</Text>
                <Text style={styles.text4}>Penulis</Text>
                <Text style={styles.text5}>{data.nama_penulis}</Text>
                <Text style={styles.text4}>Halaman</Text> 
                <Text style={styles.text5}>{data.halaman}</Text> 
                <Text style={styles.text4}>Tanggal Terbit</Text>
                <Text style={styles.text5}>{moment(data.tanggal).format('DD MMMM YYYY')}</Text>
                <Text style={styles.text4}>Penerbit</Text>
                <Text style={styles.text5}>{data.Penerbit}</Text>
                <Text style={styles.text4}>kategori</Text>
                <Text style={styles.text5}>{data.nama_kategori}</Text>
                <Text style={styles.text4}>Sinopsis</Text>
                <Text style={styles.text5}>{data.sinopsis}</Text>
                <Text style={styles.text4}>Stock Buku</Text>
                <Text style={styles.text5}>{data.stock}</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={{marginTop: 20}}>
                <View style={styles.detailFooter}>
                    <TouchableOpacity onPress={()=> buttonMinus()}>
                        <AntDesign name="minuscircleo" size={45} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontSize: 30}}>{totalBarang}</Text>
                    <TouchableOpacity onPress={()=> buttonPlus()}>
                        <AntDesign name="pluscircleo" size={45} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.header1}>
                <TouchableOpacity onPress={()=> navigation.navigate('Checkout', {data, totalBarang})}>
                    <Text style={styles.footer}>Shop Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default Detail;

const styles = StyleSheet.create ({
    header: {
        width: width,
        height: 55,
        backgroundColor: '#7ADE84',
        flex: 1
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
        height: 210, 
        width: 130,
        marginTop: 15,
        marginStart: 10
    },
    detail:{
        marginStart: 5, 
        flexDirection: 'row',
        width: width-30,
        alignItems: 'center',
    },
    
    text1: {
        marginTop: 10,
        fontSize: 25,
        marginStart: 5, 
    },
    text:{
        color: 'grey',
        fontSize: 20,
        marginStart: 5,
        marginTop: 15
    },
    harga : {
        color: 'red',
        marginStart: 150,
        marginTop: 75,
        fontSize : 18
    },
    text3: {
        color: 'black',
        textAlign: 'center',
        fontSize : 23
    },
    text4: {
        color: 'black',
        fontSize: 18,
        marginStart: 5
    },
    text5: {
        color: 'grey',
        fontStyle: 'italic',
        fontSize: 20,
        marginStart: 5,
        marginBottom: 5
    },
    divider: {
        width: width,
        height: 15,
        backgroundColor: '#ededed',
        marginVertical: 15
    },
    header1: {
        width: width,
        height: 55,
        backgroundColor: '#217D2B',
        marginTop: 40
    },
    detailFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
    footer: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        fontStyle: 'italic',
    },
});