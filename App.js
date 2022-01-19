import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screen/Home';
import Auth from "./src/screen/Auth";
import MainApp from './src/screen/MainApp';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import SearchHome from './src/screen/SearchHome';
import Fiction from './src/screen/categori/Fiction';
import Romance from './src/screen/categori/Romance';
import Sains from './src/screen/categori/Sains';
import Motivation from './src/screen/categori/Motivation';
import Computing from './src/screen/categori/Computing';
import Medical from './src/screen/categori/Medical';
import Detail from './src/screen/Detail';
import Checkout from './src/screen/Checkout';
import History from './src/screen/History';
import Payment from './src/screen/Payment';
import OvoPay from './src/screen/OvoPay';
import Admin from './src/screen/pageAdmin/Admin';
import Produk from './src/screen/pageAdmin/Produk';
import EditProduct from './src/screen/pageAdmin/EditProduct';
import AddProduct from './src/screen/pageAdmin/AddProduct';
// import Cart from './src/screen/Cart';
import Account from './src/screen/Account';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import Card from './src/components/Cards';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
  return(
    <Tab.Navigator 
      tabBarOptions={{
        style: {height: 55, backgroundColor: '#7ADE84'},
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        
      }}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={40} color={color} />
          ),
          
        }}  
      />
      <Tab.Screen 
        name="History" 
        component={History} 
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="history" size={30} color={color} />
          ),
          
        }}  
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={33} color={color} />
          ),
          
        }}  
      />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen 
            name="Tabscreen"
            component={TabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth" 
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainApp" 
            component={MainApp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login" 
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Signup"
            component={Signup}
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="SearchHome" 
            component={SearchHome}
            options={{headerShown: false}}   
          />
          <Stack.Screen 
            name="Fiction" 
            component={Fiction}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Romance" 
            component={Romance}
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Sains" 
            component={Sains}
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Motivation" 
            component={Motivation}
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Computing" 
            component={Computing}
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Medical" 
            component={Medical}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Detail" 
            component={Detail}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Checkout" 
            component={Checkout}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Payment" 
            component={Payment}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="OvoPay" 
            component={OvoPay}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Admin" 
            component={Admin}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="Produk" 
            component={Produk}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="EditProduct" 
            component={EditProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="AddProduct" 
            component={AddProduct}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

