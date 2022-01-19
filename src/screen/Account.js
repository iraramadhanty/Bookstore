import React, {useState, useEffect} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        TextInput,
        Dimensions,
        TouchableOpacity,
        KeyboardAvoidingView
    } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

  
const {width} = Dimensions.get('window')

const Account = ({navigation}) => { 
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    const buttonLoguot = async () => {
        await AsyncStorage.clear()
        navigation.navigate('MainApp')
    }

    const getLocalData = async () => {
        const Name = await AsyncStorage.getItem('@username');
        if(Name !== null){
            setUserName(Name)
        }
        const alamat = await AsyncStorage.getItem('@address');
        if(alamat !== null){
            setAddress(alamat)
        }
        const textEmail = await AsyncStorage.getItem('@email');
        if(textEmail !== null){
            setEmail(textEmail)
        }
        const jkel = await AsyncStorage.getItem('@gender');
        if(jkel !== null){
            setGender(jkel)
        }
        const telp = await AsyncStorage.getItem('@phone');
        if(telp !== null){
            setPhone(telp)
        }
    }
    
    useEffect(() => {
        getLocalData()
    }, []);

    const buttonSave = async () => {
        await AsyncStorage.setItem('@address', address);
        await AsyncStorage.setItem('@email', email);
        await AsyncStorage.setItem('@gender', gender);
        await AsyncStorage.setItem('@phone', phone);
        alert('profile is successfully saved')
    }

    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={{backgroundColor: '#7ADE84'}}>
                <FontAwesome name="user-circle" size={100} color='black' style={{alignSelf: 'center', marginVertical: 10}} />
            </View>
            <KeyboardAvoidingView>
                <View style={{...styles.sectionStyle, marginTop: 70}}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Username'
                        returnKeyType='done'
                        value={userName}
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Address'
                        returnKeyType='done'
                        value={address}
                        onChangeText={(value) => {
                            setAddress(value)
                            }
                        }
                    />
                </View>
                <View style={styles.sectionStyle }>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Email'
                        keyboardType='email-address'
                        returnKeyType='done'
                        value={email}
                        onChangeText={(value) => {
                            setEmail(value)
                            }
                        }
                    />
                </View>
                <View style={styles.sectionStyle }>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Gender'
                        returnKeyType='done'
                        value={gender}
                        onChangeText={(value) => {
                            setGender(value)
                            }
                        }
                    />
                </View>
                <View style={styles.sectionStyle }>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Handphone'
                        keyboardType='number-pad'
                        returnKeyType='done'
                        value={phone}
                        onChangeText={(value) => {
                            setPhone(value)
                            }
                        }
                    />
                </View>
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={()=> buttonSave()} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> buttonLoguot()} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 100,
        backgroundColor: '#7ADE84',
    },  
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 20,
      },
      title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 23,
        fontWeight: 'bold'
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
    Logo: {
        marginTop: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontSize: 20
    },
    input: {
        width: width - 100,
        flex: 1,
        paddingHorizontal: 20,
        fontSize: 20,
        color: 'black',          
    },
    button: {
        width: width - 80,
        backgroundColor: 'green',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        marginTop: 30,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center'
    },
})