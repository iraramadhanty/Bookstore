// import React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import {BottomTabNavigator} from '../components';

// import Home from '../screen/Home';
// import Login from '../screen/Login';
// import Signup from '../screen/Signup';
// import Fiction from '../screen/categori/Fiction';
// import Romance from '../screen/categori/Romance';
// import Sains from '../screen/categori/Sains';
// import Selfdevelopment from '../screen/categori/Selfdevelopment';
// import Computing from '../screen/categori/Computing';
// import Medical from '../screen/categori/Medical';

// const Stack = createStackNavigator();

// const Router = ({navigation}) => {
//     return (
//         <Stack.Navigator initialRouteName="Login">
//             <Stack.Screen
//                 name="Login" 
//                 component={Login}
//             />
//             <Stack.Screen 
//                 name="Signup"
//                 component={Signup} 
//             />
//             <Stack.Screen 
//                 name="Home" 
//                 component={Home} 
//             />
//             <Stack.Screen 
//                 name="Fiction" 
//                 component={Fiction} 
//             />
//             <Stack.Screen 
//                 name="Romance" 
//                 component={Romance} 
//             />
//             <Stack.Screen 
//                 name="Sains" 
//                 component={Sains} 
//             />
//             <Stack.Screen 
//                 name="Selfdevelopment" 
//                 component={Selfdevelopment} 
//             />
//             <Stack.Screen 
//                 name="Computing" 
//                 component={Computing} 
//             />
//             <Stack.Screen 
//                 name="Medical" 
//                 component={Medical}
//             />
//         </Stack.Navigator>
//     );
// };

// export default Router;