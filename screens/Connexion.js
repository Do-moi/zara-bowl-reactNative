import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Menu from './Menu';

import { Card, ListItem, Button, Icon ,Header,Badge} from 'react-native-elements';


export default function Connexion({navigation}) {

  

 
  


  return (
    <ScrollView style={{backgroundColor:'purple'}}>
      <View style={styles.container}>
       
      

        <ImageBackground source={require('../assets/fireball.jpg')} style={{width: '100%', height: 180, flex:1}}>
        
        </ImageBackground>
         <Text style={{fontSize:20, marginTop:10}}>CONNEXION</Text>

         <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='email'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 30,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
             <TextInput
              autoCompleteType= "password"
              secureTextEntry={true}
              placeholderTextColor="gray"
              placeholder='Saisir votre mot de passe'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 5,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
       
         
         

        <View style={{ flex:1,flexDirection:"row", marginTop:60}}>
            <View style={{flex:1}}>
               <Button 
                     title="Se connecter"
                     containerStyle={{alignItems:"center"}}
                     buttonStyle={{backgroundColor:"orange"}}
                     onPress={()=>navigation.navigate("Profil")}
               >

              </Button>
            </View>

            <View style={{flex:1}}>
               <Button 
                     title="Créer un compte"
                     containerStyle={{alignItems:"center"}}
                     buttonStyle={{backgroundColor:"orange"}}
                     onPress={()=>navigation.navigate("CreateUser")}
               >

               </Button>
            </View>
        </View>
      

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems:"center"
    
  },
});