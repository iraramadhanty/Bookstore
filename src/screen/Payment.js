import React from 'react'
import {View, 
        Text, 
        Image,
        StyleSheet, 
        Dimensions,
        TouchableOpacity
    } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

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


const Payment = ({navigation, route}) => {
    const data = route.params

    return(
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{backgroundColor: '#480975'}}>
                <View style={styles.divider}>
                    <Image
                        style={styles.image}
                        source={require('../Images/logoo.png')} />
                </View>
                <Text style={styles.name}>Book's Store</Text>
            </View>
                <View style={{backgroundColor: 'black', height: 80}}>
                    <Text style={styles.jumlah}>Total Nilai Pesanan</Text>
                    <Text style={styles.jumlah}>{convertToRupiah(data.data.data.harga * data.data.totalBarang)}</Text>
                </View>
            <View>
                <Text style={{...styles.metode, marginTop: 40}}>Metode Pembayaran</Text>
                <Text style={styles.metode}>Ovo Cash</Text>
                <View style={styles.divider1}></View>
            </View>
            <View style={{marginBottom: 35}}>
                <Text style={{...styles.text, marginTop: 100}}>Mohon lakukan konfirmasi pembayaran </Text>
                <Text style={styles.text}>dalam waktu 30 menit </Text>
            </View>
            <CountDown
                until={1800}
                //duration of countdown in seconds
                timeToShow={['H', 'M', 'S']}
                //formate to show
                onFinish={() => alert('success')}
                //on Finish call
                //on Press call
                size={25}
            />
            <View style={styles.header1}>
                <TouchableOpacity onPress={()=> navigation.navigate('OvoPay', {data})}>
                    <Text style={styles.footer}>Pay</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
            
    )
}

export default Payment;

const styles = StyleSheet.create({
    image: {
        width: 100, 
        height: 100, 
        alignSelf: 'center', 
        marginTop: 10
    },
    name: {
        fontSize: 18, 
        marginTop: 10, 
        alignSelf: 'center', 
        color: 'white', 
        marginBottom: 30
    },
    jumlah: {
        fontSize: 18, 
        marginTop: 10, 
        alignSelf: 'center', 
        color: 'white'
    },
    metode: {
        fontSize: 18, 
        marginTop: 10, 
        marginStart: 20
    },
    text: {
        justifyContent: 'center', 
        fontSize: 20, 
        maxWidth: 400, 
        color: '#969292', 
        alignSelf: 'center'
    },  
    divider: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 50,
        borderRadius: 100,
        elevation: 5,

    },
    header1: {
        width: width-200,
        height: 55,
        backgroundColor: '#69d0db',
        marginTop: 100,
        marginHorizontal: 100,
        borderRadius: 50
    },
    footer: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        fontStyle: 'italic',
    },
    divider1: {
        width: width-80,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 15
    },
})