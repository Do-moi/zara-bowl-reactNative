import React from 'react';
import { StyleSheet, Text, View,Button,TouchableHighlight } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Basket from './screens/Basket';
import Confirm from './screens/Confirm';
import Connexion from './screens/Connexion';
import CreateUser from './screens/CreateUser';
import Details from './screens/Details';
import Home from './screens/Home';
import Profil from './screens/Profil';
import Recapitulatif from './screens/Recapitulatif';
import Search from './screens/Search';
import Paiement from './screens/Stripe';
import Menu from "./screens/Menu";
import { createStackNavigator } from '@react-navigation/stack';
// import {createStackNavigator} from 'react-navigation-stack';

import { NavigationContainer, DrawerActions,CommonActions ,useNavigation} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
  
} from '@react-navigation/drawer';


function MyHeader({navigation}){
  return(
    <TouchableHighlight onPress={() =>navigation.dispatch(DrawerActions.openDrawer())} navigation={navigation}>
             
       <FontAwesome name="bars" size={20} style={{ color: 'white' }} />
    
    </TouchableHighlight>
  )
}
  


  
const HomeStack = createStackNavigator();
const ConnexionStack = createStackNavigator();
const BasketStack = createStackNavigator();
const ProfilStack = createStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator >
      
      <HomeStack.Screen 
                name="Home"
                component={Home}
                options={{
                headerStyle: {backgroundColor: 'black'},
                title:"ZARA BOWL",
                headerTintColor:'white',
                headerTitleStyle:{fontWeight:"bold"},
                headerTitleAlign:'center',
                headerRight:()=>(
                <TouchableHighlight
                 onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}>
             
                   <FontAwesome name="bars" size={20} style={{ color: 'white' }} />
             
                </TouchableHighlight>),
                headerRightContainerStyle:{marginRight:20},
               
            }} 
            />
        <HomeStack.Screen name="Confirm" component={Confirm} options={{headerShown:false}}/>
        
        <HomeStack.Screen name="Details" component={Details} />
        <HomeStack.Screen name="Recapitulatif" component={Recapitulatif} options={{headerShown:false}}/>
        <HomeStack.Screen name="Search" component={Search} options={{headerShown:false}}/>
        <HomeStack.Screen name="Paiement" component={Paiement} options={{headerShown:false}}/>
        
      </HomeStack.Navigator>

  )
}

function ConnexionStackScreen({navigation}) {
  return (
    <ConnexionStack.Navigator >
      
      <ConnexionStack.Screen 
                name="Connexion"
                component={Connexion}
                options={{
                headerStyle: {backgroundColor: 'black'},
                title:"ZARA BOWL",
                headerTintColor:'white',
                headerTitleStyle:{fontWeight:"bold"},
                headerTitleAlign:'center',
                headerRight:()=>(
                <TouchableHighlight
                 onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}>
             
                   <FontAwesome name="bars" size={20} style={{ color: 'white' }} />
             
                </TouchableHighlight>),
                headerRightContainerStyle:{marginRight:20},
               
            }} 
            />
            {/* <ConnexionStack.Screen name="CreateUser" component={CreateUser} options={{headerShown:false}}/> */}
      </ConnexionStack.Navigator>

  )
}
function BasketStackScreen({navigation}) {
  return (
    <BasketStack.Navigator >
      
      <BasketStack.Screen 
                name="panier"
                component={Basket}
                options={{
                headerStyle: {backgroundColor: 'black'},
                title:"ZARA BOWL",
                headerTintColor:'white',
                headerTitleStyle:{fontWeight:"bold"},
                headerTitleAlign:'center',
                headerRight:()=>(
                <TouchableHighlight
                 onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}>
             
                   <FontAwesome name="bars" size={20} style={{ color: 'white' }} />
             
                </TouchableHighlight>),
                headerRightContainerStyle:{marginRight:20},
               
            }} 
            />
      </BasketStack.Navigator>

  )
}
function ProfilStackScreen({navigation}) {
  return (
    <ProfilStack.Navigator >
      
      <ProfilStack.Screen 
                name="Profil"
                component={Profil}
                options={{
                headerStyle: {backgroundColor: 'black'},
                title:"ZARA BOWL",
                headerTintColor:'white',
                headerTitleStyle:{fontWeight:"bold"},
                headerTitleAlign:'center',
                headerRight:()=>(
                <TouchableHighlight
                 onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}>
             
                   <FontAwesome name="bars" size={20} style={{ color: 'white' }} />
             
                </TouchableHighlight>),
                headerRightContainerStyle:{marginRight:20},
               
            }} 
            />
            <ProfilStack.Screen name="CreateUser" component={CreateUser} options={{headerShown:false}}/>
      </ProfilStack.Navigator>

  )
}
      

 
  
  const Drawer = createDrawerNavigator();
  
  function MyDrawer() {
    return (
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Panier" component={BasketStackScreen} />
        <Drawer.Screen name="Connexion" component={ConnexionStackScreen} />
        <Drawer.Screen name="Profil" component={ProfilStackScreen} />
        <Drawer.Screen name="Deconnexion" component={Basket} />
      </Drawer.Navigator>
    );
  }
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
      
    </NavigationContainer>
  );
}




