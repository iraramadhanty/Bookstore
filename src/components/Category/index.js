import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Card, Title, Searchbar} from 'react-native-paper';

const Category = ({navigation}) => {       
        return(
            <View>
                <Text style={styles.cat}>Top Categori</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button mode="outlined" onPress={() => navigation.navigate('Fiction')} style={styles.button}> Fiction</Button>
                    <Button mode="outlined" onPress={() => navigation.navigate('Motivation')} style={styles.button}>Motivation</Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button mode="outlined" onPress={() => navigation.navigate('Romance')} style={styles.button}> Romance</Button>
                    <Button mode="outlined" onPress={() => navigation.navigate('Computing')} style={styles.button}> Computing</Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button mode="outlined" onPress={() => navigation.navigate('Sains')} style={styles.button}> Sains</Button>
                    <Button mode="outlined" onPress={() => navigation.navigate('Medical')} style={styles.button}> Medical</Button>
                </View>
            </View>

        );
    };
export default Category;

const styles = StyleSheet.create({
    cat: {
        textAlign: 'center',
        fontSize: 30,
        margin: 20
    },
    button: {
        margin: 5, 
        width: 150
    }
  });
  
