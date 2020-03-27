import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Menu from './Menu';

import { Card, ListItem, Button, Icon ,Header,Badge} from 'react-native-elements';


export default function CreateUser({navigation}) {

  

 
  


  return (
    <ScrollView style={{backgroundColor:'#08d9d6'}}>
      <View style={styles.container}>
        
      

        <ImageBackground source={require('../assets/fireball.jpg')} style={{width: '100%', height: 180, flex:1}}>
        
        </ImageBackground>
         <Text style={{fontSize:20, marginTop:10}}>INSCRIPTION</Text>

         <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='NOM'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 10,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
             <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='PRENOM'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 10,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />

            <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='EMAIL'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 10,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
            <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='ADRESSE'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 10,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
            <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='CODE POSTAL'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 10,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
             <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='VILLE'
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 50,
                width: "85%",
                paddingLeft: 15,
                marginTop: 10,
                marginRight: 30,
                marginBottom: 5,
                marginLeft: 30,
                fontSize: 18,
                color: 'gray'
              }}
              
            />
       
         
         

        <View style={{ flex:1,flexDirection:"row", marginTop:30,marginBottom:30}}>
            <View style={{flex:1}}>
               <Button 
                     title="Se connecter"
                     containerStyle={{alignItems:"center"}}
                     buttonStyle={{backgroundColor:"orange"}}
                     onPress={()=>navigation.navigate("Profil")}
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
    backgroundColor: '#f4eeff',
    alignItems:"center"
    
  },
});
