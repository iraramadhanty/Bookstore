import React from 'react'
import {View, 
        Text,
        StyleSheet,
        StatusBar,
        Image,
        TouchableOpacity,
        Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window')

const Admin = ({navigation}) => {
    const buttonLoguot = async () => {
        await AsyncStorage.clear()
        navigation.navigate('MainApp')
    }

    return(
        <ScrollView>
            <StatusBar barStyle='default' />
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.header}>
                    <Text style={styles.title}>Admin</Text>
                </View>
            </View>
            <Animatable.View style={styles.Logo}  animation="slideInDown" duraton='2000' >
                    <Image
                        style={{width: 250, height: 250}}
                        source={require('../../Images/logoo.png')} />
                </Animatable.View> 
            <TouchableOpacity 
                onPress={()=> navigation.navigate('Produk')} 
                style={{...styles.button, marginTop: 120}}>
                <Text style={styles.buttonText}>All Product</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=> navigation.navigate('AddProduct')}
                style={styles.button}>
                <Text style={styles.buttonText}>add product</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                 onPress={()=> buttonLoguot()} 
                style={{...styles.button, height: 60, marginTop: 100}}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Admin;

const styles = StyleSheet.create({
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
    button: {
        width: width - 80,
        height: 100,
        backgroundColor: '#51b56e',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center'
    },
    Logo: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})