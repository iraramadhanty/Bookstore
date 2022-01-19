import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

const BestSeller = () => {  
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('http://192.168.0.13:3000/koleksi')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          setData(responseJson);
        });
     }, []);     

     const renderProduk = data.map((map) => {
        if(map.nama_kategori === 'BestSeller') {
          return (
            
             <Animatable.View animation="zoomIn" duraton='4000' >
                <TouchableOpacity onPress={()=> navigation.navigate('Detail', map)}>
                <Card style={{marginRight: 19}}>
                  <Card.Cover 
                    style={styles.card}
                    source={{uri:map.gambar}} />
                </Card>
                </TouchableOpacity>
              </Animatable.View>
           
          );
        }
        
      });

    return(
        <View style={{ flexDirection: 'row', margin: 15}}>
            <ScrollView>
                <View style={styles.produk}>{renderProduk}</View>
            </ScrollView>
            
        </View>
    )}
export default BestSeller;

const styles = StyleSheet.create({
    card: {
        height: 130,
        width: 85,
        elevation: 5
    },
    produk: {
        flexDirection: 'row',
        marginBottom: 10
      },
})