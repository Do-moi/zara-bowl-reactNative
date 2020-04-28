import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity} from 'react-native';
import {Header,Overlay} from 'react-native-elements'
import Menu from './Menu';

export default function Home({navigation}) {



console.log("================page home")
  return (
    <ScrollView>
      <View style={styles.container}>
      

        <ImageBackground source={require('../assets/fireball.jpg')} style={{width: '100%', height: 220, flex:1}}>
        
        </ImageBackground>

        <View style={{flex: 1, flexDirection: 'row'}}>

          <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Storm"})} style={{flex: 2 , width:100, height: 100}} >
           <View style={{flex: 2 , width:100, height: 100}}> 
           
             <Image
               style={{flex: 2,width:150, height: 50,   resizeMode: 'stretch'}}
               source={require('../assets/storm.png')}
             />
             
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  
           onPress={()=>navigation.navigate("Search",{brand:"Brunswick"})} 
           style={{flex: 1,width: 100, height: 80,marginTop:10,marginRight:30}}>

           <View style={{flex: 1,width: 100, height: 80,marginTop:10,marginRight:30}}>
             <Image
               style={{flex: 1,width:80, height: 80}}
               source={require('../assets/brunswick.png')}
             /> 
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"DV8"})} style={{flex: 1,width: 50, height: 80, marginTop:10}}>
           <View style={{flex: 1,width: 50, height: 80, marginTop:10}}>
             <Image
               style={{flex: 1,width:80, height: 100}}
               source={require('../assets/dv8.png')}
             /> 
           </View> 
           </TouchableOpacity>
      </View>


      <View style={{flex: 1, flexDirection: 'row'}}>
           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"900 Global"})} style={{flex: 1,width: 50, height: 100}}>
           <View style={{flex: 1,width: 50, height: 100}} >
             <Image
               style={{flex: 1,width:100, height: 100}}
               source={require('../assets/global.png')}
             /> 
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Radical"})} style={{flex: 2 , width:100, height: 100}}>
           <View style={{flex: 2 , width:100, height: 100}}>  
             <Image
               style={{flex: 2,width:200, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/radical.png')}
             />
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Hammer"})} style={{flex: 1,width: 50, height: 90, marginTop:10}}>
           <View style={{flex: 1,width: 50, height: 90, marginTop:10}}>
             <Image
               style={{flex: 1,width:90, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/hammer.png')}
             /> 
           </View> 
           </TouchableOpacity>
      </View>


      <View style={{flex: 1, flexDirection: 'row'}}>
           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Roto Grip"})} style={{flex: 1,width: 50, height: 80}}>
           <View style={{flex: 1,width: 50, height: 80}}>
             <Image
               style={{flex: 1,width:80, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/rotogrip.png')}
             /> 
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Seismic"})} style={{flex: 1,width: 50, height: 80,marginLeft:20}}>
           <View style={{flex: 1,width: 50, height: 80,marginLeft:20}}>
             <Image
               style={{flex: 1,width:100, height: 80,   resizeMode: 'stretch'}}
               source={require('../assets/seismic.png')}
             /> 
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"COLUMBIA 300"})} style={{flex: 2 , width:100, height: 80,marginLeft:30,marginBottom:10}}>
           <View style={{flex: 2 , width:100, height: 80,marginLeft:30,marginBottom:10}}>  
             <Image
               style={{flex: 2,width:150, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/columbia.png')}
             />
           </View> 
           </TouchableOpacity>

      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Track"})} style={{flex: 2 , width:100, height: 80}}>
           <View style={{flex: 2 , width:100, height: 80}}>  
             <Image
               style={{flex: 2,width:150, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/track.png')}
             />
           </View> 
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Ebonite"})} style={{flex: 1,width: 50, height: 80,marginRight:10}}>
           <View style={{flex: 1,width: 50, height: 80,alignItems:"center"}}>
             <Image
               style={{flex: 1,width:80, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/ebonite.png')}
             /> 
           </View>
           </TouchableOpacity>

           <TouchableOpacity  onPress={()=>navigation.navigate("Search",{brand:"Motiv"})} style={{flex: 1,width: 50, height: 80}}>
           <View style={{flex: 1,width: 50, height: 80}}>
             <Image
               style={{flex: 1,width:80, height: 100,   resizeMode: 'stretch'}}
               source={require('../assets/motiv.png')}
             /> 
           </View>
           </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
