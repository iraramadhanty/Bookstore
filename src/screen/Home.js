import React from 'react';
import {View, 
        StyleSheet, 
        StatusBar, 
        TouchableOpacity,
        Text
    } from 'react-native';
import {Title} from 'react-native-paper';
import Category from '../components/Category/index';
import BestSeller from '../components/BestSeller/index';
import Trending from '../components/Trending/index';
import { ScrollView } from 'react-native-gesture-handler';
import Search from '../components/Search/index';

const Home = ({navigation}) => {       
        return(
        <View style={styles.container}>
            <ScrollView>
            <StatusBar barStyle='default' />
            <Search navigation={navigation} />
            <Category navigation={navigation} />
            <View> 
                <Title style={{marginStart: 15, marginEnd: 300, marginTop: 50}}>Best Seller</Title>
            </View>
            <BestSeller navigation={navigation} />
            <View> 
                <Title style={{marginStart: 15, marginEnd: 300, marginTop: 40}}>Trending</Title>
            </View>   
            <Trending navigation={navigation} />
            </ScrollView>
        </View>

        );
    };
export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    search: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#000',
        marginHorizontal: 10,
        marginTop: 50
    },
    cat: {
        textAlign: 'center',
        fontSize: 30,
        margin: 20
    },
    
  });
  
