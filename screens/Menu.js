import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Header,Overlay} from 'react-native-elements'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Connexion from './Connexion';
import Basket from './Basket';


export default function Menu({MyMenu}) {
  
  function MyMenu(){
    return (<View>
      <TouchableHighlight onPress={() =>  console.log('===========menu')}>
             
             <FontAwesome name="bars" size={20} style={{ color: 'white' }} />
             
       </TouchableHighlight>
      
       </View>

    )
  }
  
  return (

    <Header
               
    leftComponent=  { <MyMenu/>}
    
    centerComponent={{ text: 'ZARA BOWL', style: { color: 'white',fontSize:20 } }}
   
    containerStyle={{
     backgroundColor: 'black',
     justifyContent: 'space-around',
   }}
   />
   
  )
}

