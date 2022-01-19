import React, {useEffect} from 'react';
import {View,
        ActivityIndicator
    } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = ({navigation}) => {
        
    useEffect(() => {
        const Session = async () => {
            const isLogin = await AsyncStorage.getItem('@username')
            if (isLogin) {
                navigation.navigate('Tabscreen')
            }else{
                navigation.navigate('MainApp')
            }
        }
        Session()
    }, [])

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    )
}

export default Auth;