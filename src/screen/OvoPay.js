import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

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

const OvoPay = ({navigation, route}) => {
    const data = route.params

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const getLocalData = async () => {
        const telp = await AsyncStorage.getItem('@phone');
        if(telp !== null){
            setPhone(telp)
        }
        const Name = await AsyncStorage.getItem('@username');
        if(Name !== null){
            setUserName(Name)
        }
        const textEmail = await AsyncStorage.getItem('@email');
        if(textEmail !== null){
            setEmail(textEmail)
        }
    }

    useEffect(() => {
        getLocalData()
    }, []);

    const buttonSelesai = async () => {
        await axios.post('http://192.168.0.13:3000/history', {
            gambar: data.data.data.data.gambar,
            judul: data.data.data.data.judul_buku,
            total: data.data.data.data.harga * data.data.data.totalBarang,
            username: userName,
            noRek: phone,
            email: email,
            jumlah_buku: data.data.data.totalBarang,
    }).then((response) => {
      if(response){
        navigation.navigate('Tabscreen', {data})
        alert(response.data.message)
      }
    })
    }

    return(
        <View>
            <Animatable.View style={styles.Logo}  animation="zoomIn" duraton='4000' >
                <AntDesign name="checkcircle" size={80} color="#3ea843" style={styles.logo} />
                <Text style={{textAlign: 'center', fontSize: 30, marginTop: 20, color: '#3ea843' }}>Berhasil!</Text>
           </Animatable.View>
           <View style={{...styles.describe, marginTop: 100}}>
                <Text style={styles.list}>Tipe Transaksi</Text>
                <Text style={styles.isi}>Pembayaran</Text>
            </View>
            <View style={styles.describe}>
                <Text style={styles.list}>Nama Pesanan</Text>
                <Text style={styles.isi}>Book</Text>
            </View>
            <View style={styles.describe}>
                <Text style={styles.list}>Nomor Pesanan</Text>
                <Text style={styles.isi}>126{phone}</Text>
            </View>
            <View style={styles.describe}>
                <Text style={styles.list}>Metode Pembayaran</Text>
                <Text style={styles.isi}>Ovo cash</Text>
            </View>
            <View style={styles.describe}>
                <Text style={styles.list}>Total</Text>
                <Text style={styles.isi}>{convertToRupiah(data.data.data.data.harga * data.data.data.totalBarang)}</Text>
            </View>
            <View style={styles.header1}>
                <TouchableOpacity onPress={()=> buttonSelesai()}>
                    <Text style={styles.footer}>Selesai</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OvoPay;

const styles = StyleSheet.create({
    logo: {
        textAlign: 'center', 
        marginTop: 50
    },
    describe: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 20, 
    },
    list: {
        fontSize: 18, 
        marginStart: 10
    },
    isi: {
        fontSize: 18, 
        alignSelf: 'flex-end', 
        marginEnd: 20, 
        color: 'black'
    },
    header1: {
        width: width-200,
        height: 55,
        backgroundColor: '#69d0db',
        marginTop: 150,
        marginHorizontal: 100,
        borderRadius: 50
    },
    footer: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        fontStyle: 'italic',
    },
}) 