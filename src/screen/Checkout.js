import React, {useEffect, useState} from 'react'
import {View, 
        Image, 
        Text, 
        StyleSheet, 
        Dimensions,
        TouchableOpacity
    } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

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


const Checkout = ({navigation, route}) => {
    const data = route.params

    const [totalBarang, setTotalBarang] = useState(1);
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const getLocalData = async () => {
        const Name = await AsyncStorage.getItem('@username');
        if(Name !== null){
            setUserName(Name)
        }
        const textEmail = await AsyncStorage.getItem('@email');
        if(textEmail !== null){
            setEmail(textEmail)
        }
        const telp = await AsyncStorage.getItem('@phone');
        if(telp !== null){
            setPhone(telp)
        }
        const alamat = await AsyncStorage.getItem('@address');
        if(alamat !== null){
            setAddress(alamat)
        }
    }

    useEffect(() => {
        getLocalData()
    }, []);

    return(
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Text style={styles.title}>Pesanan</Text>
                    <AntDesign name="arrowleft" size={27} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
                <Text style={{fontSize: 20, marginBottom: 5, alignSelf: 'center'}}>Alamat Pengiriman</Text>
            <View style={{marginStart: 10, maxWidth: 300}}>
            <View>
                <Text style={styles.text}>{userName}</Text>
                <Text style={styles.text}>{phone}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{address}</Text>
            </View>
               
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.textPesanan}>Daftar Pesanan</Text>
            <View style={styles.cart}>
                <Image source={{uri:data.data.gambar}} style={styles.images}/>
                <View>
                    <View style={{maxWidth: 250}}>
                        <Text style={{fontSize: 18}}>{data.data.judul_buku}</Text>
                        <Text style={{fontSize: 18}}>{data.data.nama_penulis}</Text>
                        <Text style={styles.harga}>Total Pesanan</Text>
                        <Text style={styles.jumlah}>{data.totalBarang}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divider}></View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                <Text style={{fontSize: 18, marginStart: 10}}>Harga</Text>
                <Text style={{fontSize: 18, alignSelf: 'flex-end', marginEnd: 20, color: 'red'}}>@
                    {convertToRupiah(data.data.harga)}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                <Text style={{fontSize: 18, marginStart: 10}}>Total Harga</Text>
                <Text style={{fontSize: 18, alignSelf: 'flex-end', marginEnd: 20, color: 'red'}}>{convertToRupiah(data.data.harga * data.totalBarang)}</Text>
            </View>
            <View style={styles.divider}></View>
            <Text style={styles.textPesanan}>Payment</Text>
            <View style={{...styles.cart, height: 100, paddingStart: 15}}>
                <Image source={require('../Images/logoOvo.png')} style={{height: 50, width: 50}} />
                <View>
                    <View style={{maxWidth: 250}}>
                        <Text style={{fontSize: 18, marginStart: 15, marginBottom: 5}}>Payment in ovo</Text>
                        <Text style={{fontSize: 18, marginStart: 15, fontWeight: 'bold'}}>OVO</Text>
                    </View>
                </View>
            </View>
            <View style={styles.header1}>
                <TouchableOpacity onPress={()=> navigation.navigate('Payment', {data, totalBarang})}>
                    <Text style={styles.footer}>Bayar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
            
    )
}

export default Checkout;

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 55,
        backgroundColor: '#7ADE84',
        flex: 1,
        elevation: 4
    },
    textPesanan: {
        alignSelf: 'center', 
        fontWeight: '900', 
        fontSize: 25
    },
    text:{
        color: 'grey',
        fontSize: 15,
        marginStart: 5,
        marginTop: 5
    },
    cart : {
        flexDirection: 'row',
        width: width-30,
        alignItems: 'center',
        height: 200,
        marginVertical: 5,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: 'white',
        marginHorizontal: 10
        
      },
    title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        fontWeight: 'bold'
    },
    harga : {
        color: 'red',
        marginStart: 100,
        marginTop: 50,
        fontSize : 18
    },
    jumlah: {
        marginStart: 150,
        fontSize: 18,
        fontWeight: 'bold'
    },
    divider: {
        width: width,
        height: 5,
        backgroundColor: '#ededed',
        marginVertical: 15
    },
    header1: {
        width: width,
        height: 55,
        backgroundColor: '#217D2B',
        marginTop: 54
    },
    footer: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        fontStyle: 'italic',
    },
    images:{
        width: 100, 
        height: 150, 
        marginHorizontal: 15
      },
    detail:{
        marginStart: 5, 
        flexDirection: 'row',
        width: width-30,
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        marginTop: 15,
        marginStart: 8
    },
})