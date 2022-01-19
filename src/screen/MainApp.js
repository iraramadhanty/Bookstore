import React, {useEffect} from 'react';
import {View, 
        StyleSheet, 
        Image,
        Text,
        TouchableOpacity,
        StatusBar, 
        KeyboardAvoidingView,
        Dimensions
    } from 'react-native';
import * as Animatable from 'react-native-animatable';

const {height,width} = Dimensions.get('window')

const MainApp = ({navigation}) => {       
        return(
            <View style={styles.container}>
                <Animatable.View style={styles.Logo}  animation="slideInDown" duraton='2000' >
                    <Image
                        style={{width: 250, height: 250}}
                        source={require('../Images/logoo.png')} />
                </Animatable.View> 
                <View style={{height: height}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}
                        style={{...styles.button, marginTop: 180 }}>
                        <Text style={{fontSize: 25, fontWeight: '800'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Signup')}
                        style={{...styles.button, marginTop: 30 }}>
                        <Text style={{fontSize: 25, fontWeight: '800'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}

export default MainApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Logo: {
        marginTop: 210,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#7ADE84',
        height: 60,
        width: width-20,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    }
    })