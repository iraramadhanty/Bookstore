import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity       
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Search = ({navigation}) => {
    return(
        <TouchableOpacity
            style={styles.baseContainer}
            onPress={() => navigation.navigate('SearchHome')}>
            <View style={styles.container}>
                <FontAwesome5 name="search" size={20} color="black" style={{marginStart: 10}}/>
                <Text style={styles.input}>Search</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Search;

const styles = StyleSheet.create ({
    baseContainer: {
        backgroundColor: 'white',
        borderRadius: 14,
        marginTop: 28,
        paddingVertical: 15,
        shadowColor: '#000',
        elevation: 4,
        marginHorizontal: 10
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        marginStart: 10,
        color: 'grey'
    }
})