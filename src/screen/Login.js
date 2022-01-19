import React, {useState} from 'react';
import {View, 
        Text,  
        TextInput,
        StyleSheet,
        TouchableOpacity,
        Image,
        KeyboardAvoidingView,
        Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window')

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const buttonLogin = async () => {
    
    await axios.post('http://192.168.0.13:3000/login', {
      username: userName,
      password: password,
    }).then((response) => {
      if(response.data.auth){
        AsyncStorage.setItem('@username', userName)
        navigation.navigate('Tabscreen')
      }else if (userName === 'Admin') {
        return navigation.navigate('Admin');
      }    
      else{
        alert(response.data.message)
      }
    })
    }

    const ToggleVisibility = () => {
      if (!passwordVisibility) {
        return (
          <Feather 
            name='eye'
            size={20}
            style={{marginEnd: 10}}
            onPress={() => handleTogglePasswordVisibility()}
          />
        );
      } else {
        return (
          <Feather 
            name='eye-off'
            size={20}
            style={{marginEnd: 10}}
            onPress={() => handleTogglePasswordVisibility()}
          />
        );
      }
    };
  
    const handleTogglePasswordVisibility = () => {
      setPasswordVisibility(!passwordVisibility);
    };

  return(
    <View style={styles.container}>
        <Animatable.View style={styles.Logo}  animation="slideInDown" duraton='2000' >
            <Image
                style={{width: 250, height: 250}}
                source={require('../Images/logoo.png')} />
            <Text style={styles.logoText}>Login to my App</Text>
        </Animatable.View> 
        <KeyboardAvoidingView>
          <View style={styles.sectionStyle1}>
            <Image
              source={require('../assets/user.png')}
              style={styles.imageStyle}
            />
            <TextInput
              onChangeText={(value) => {
                setUserName(value)
                }
              }
              style={styles.input}
              underlineColorAndroid='transparent'
              placeholder='Username'
              keyboardType='email-address'
              returnKeyType='next'
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={require('../assets/lock.png')}
              style={styles.imageStyle}
            />
            <TextInput
              onChangeText={(value) => {
                setPassword(value)
                }
              }
              style={styles.input} 
              underlineColorAndroid='transparent'
              secureTextEntry= {passwordVisibility}
              placeholder='Password'
              returnKeyType='go'
            />
            <TouchableOpacity>
              <ToggleVisibility/>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={()=> buttonLogin()}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
};
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        
      },
      sectionStyle1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 45,
        margin: 10,
        marginTop: 140,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 5,
        width: width-20
      },
      sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 45,
        borderRadius: 5,
        margin: 10,
        marginBottom: 80,
        marginTop: 35
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
    signup: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        width: width - 100,
        backgroundColor: 'green',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center'
    },
    signupText: {
        fontSize: 15,
        color: 'gray'
    },
    });
  



