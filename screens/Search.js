
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity, RecyclerViewBackedScrollView} from 'react-native';

import Menu from './Menu';

import { Card, ListItem, Button, Icon ,Header,Badge} from 'react-native-elements'

export default function Search({navigation,route}) {

  const { brand } = route.params;
  var newBrand = JSON.stringify(brand);


  var storm=[{name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Axiom.jpg?fv=0137938F1BB9A493F427FC0C3E3362D0-14141'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Storm_Omega_Crux_Image.jpg?fv=0B08F4ACCD3A6CBA3382B88410A61BAA-18051'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Pitch_Purple.jpg?fv=4BCC2E7C34B5E7EA56AEDEC5CDF33603-10190'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Gravity_Evolve.jpg?fv=51C4A9E957FB06C150AAE35FC46EBDD9-15382'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/All-Road.jpg?fv=D6618B069B01A77D8524EAAADD6DC1E9-12854'}
  ]

  var galleryPhoto = storm.map((ball,i)=>{
    return <View style={{height:70}}>
    
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: ball.img } }}
          title={ball.name}
          rightSubtitle={ball.price+"€"}
          bottomDivider
          chevron
          onPress={()=>navigation.navigate("Details",{name: ball.name})}
        >
          
       </ListItem>
       {/* <View style={{flex:1,height:70}}>
          <Image
            style={{width:100, height:100}}
            
            source={{ uri: ball.img }}
          />
          </View>
          <Text >{ball.name}</Text>
          <Text >{ball.name}</Text> */}
        
    
  </View>
  });

    console.log('==================params',newBrand)
  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={styles.container}>
        {Menu}
      

        <ImageBackground source={require('../assets/fireball.jpg')} style={{width: '100%', height: 240, flex:1}}>
        <Text>HOME!</Text>
        </ImageBackground>

       

{galleryPhoto}


      

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
});
