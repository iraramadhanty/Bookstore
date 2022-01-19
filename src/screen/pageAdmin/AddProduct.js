import React, {useState, useEffect} from 'react';
import {View,
        TextInput,
        StyleSheet,
        TouchableOpacity,
        Text,
        Dimensions} from 'react-native';
import {Input} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window')


const AddProduct = ({route, navigation}) => {
    const [gambar, setGambar] = useState('');
    const [judul_buku, setJudul_Buku] = useState('');
    const [nama_penulis, setNama_Penulis] = useState('');
    const [harga, setHarga] = useState('');
    const [halaman, setHalaman]= useState('');
    const [tanggal_terbit, setTanggal_Terbit] = useState('');
    const [Penerbit, setPenerbit] = useState('');
    const [nama_kategori, setNama_Kategori] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [stock, setStock] = useState('');

    const buttonSave = async () => {
        await axios.post('http://192.168.0.13:3000/koleksi', {
            gambar : gambar,
            judul_buku: judul_buku,
            nama_penulis : nama_penulis,
            harga : harga,
            halaman : halaman,
            tanggal_terbit : tanggal_terbit,
            Penerbit : Penerbit,
            nama_kategori : nama_kategori,
            sinopsis : sinopsis,
            stock : stock,

        }).then((response) => {
            if(response){
              navigation.navigate('Admin')
              alert(response.data.message)
            }
          })
        }

    const data = route.params
    return(
        <ScrollView>
        <View>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.header}>
            <Text style={styles.title}>Edit Product</Text>
            <AntDesign name="arrowleft" size={27} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textIsi}>Image</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Your image URL"
                    keyboardType='url'
                    returnKeyType='done'
                    value={gambar}
                        onChangeText={(value) => {
                            setGambar(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Judul Buku</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Judul Buku"
                    returnKeyType='done'
                    value={judul_buku}
                        onChangeText={(value) => {
                            setJudul_Buku(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Penulis</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Nama penulis"
                    returnKeyType='done'
                    value={nama_penulis}
                        onChangeText={(value) => {
                            setNama_Penulis(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Harga</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Harga Buku"
                    keyboardType='decimal-pad'
                    returnKeyType='done'
                    value={harga}
                        onChangeText={(value) => {
                            setHarga(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Halaman</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Halaman Buku"
                    keyboardType='decimal-pad'
                    returnKeyType='done'
                    value={halaman}
                        onChangeText={(value) => {
                            setHalaman(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Tanggal Terbit</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Tanggal terbit buku"
                    returnKeyType='done'
                    value={tanggal_terbit}
                        onChangeText={(value) => {
                            setTanggal_Terbit(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Penerbit</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Penerbit Buku"
                    returnKeyType='done'
                    value={Penerbit}
                        onChangeText={(value) => {
                            setPenerbit(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Category</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Category Buku"
                    returnKeyType='done'
                    value={nama_kategori}
                        onChangeText={(value) => {
                            setNama_Kategori(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Sinopsis</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Sinopsis Buku"
                    returnKeyType='done'
                    value={sinopsis}
                        onChangeText={(value) => {
                            setSinopsis(value)
                            }
                        }
                />
            </View>
        <Text style={styles.textIsi}>Stock Buku</Text>
            <View style={styles.sectionStyle}>
                <Input
                    style={styles.input}
                    placeholder="Stock buku"
                    keyboardType='decimal-pad'
                    returnKeyType='done'
                    value={stock}
                        onChangeText={(value) => {
                            setStock(value)
                            }
                        }
                />
            </View>
        <TouchableOpacity onPress={()=> buttonSave()} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default AddProduct;

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 15
    },
    input: {
        width: width - 100,
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15,
        marginTop: 10,
        color: 'black', 
        maxWidth: width         
    },
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
    icon: {
        position: 'absolute',
        marginTop: 15,
        marginStart: 8
    },
    textIsi: {
        marginStart: 35,
        marginTop: 10,
        fontSize: 16,
        color: '#969284',
    },
    button: {
        width: width - 80,
        backgroundColor: '#51b56e',
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