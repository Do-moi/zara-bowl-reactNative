import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity, RecyclerViewBackedScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Menu from './Menu';

import { Card, ListItem, Button, Icon ,Header,Badge} from 'react-native-elements';


export default function Basket({navigation}) {

  var storm=[{name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Axiom.jpg?fv=0137938F1BB9A493F427FC0C3E3362D0-14141'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Storm_Omega_Crux_Image.jpg?fv=0B08F4ACCD3A6CBA3382B88410A61BAA-18051'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Pitch_Purple.jpg?fv=4BCC2E7C34B5E7EA56AEDEC5CDF33603-10190'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Gravity_Evolve.jpg?fv=51C4A9E957FB06C150AAE35FC46EBDD9-15382'},
             {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/All-Road.jpg?fv=D6618B069B01A77D8524EAAADD6DC1E9-12854'}
  ]

 
  


  return (
    <ScrollView style={{backgroundColor:"#0f4c75"}}>
      <View style={styles.container}>
       
      

        <ImageBackground source={require('../assets/fireball.jpg')} style={{width: '100%', height: 180, flex:1}}>
        
        </ImageBackground>
         <Text style={{fontSize:20, marginTop:10, color:'white'}}>PANIER</Text>

       <View style={{flex:1,flexDirection:'row',marginTop:40,height:40}}>

         <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
          <Text >produit</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
          <Text>poids</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
          <Text>qté</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
             <Text style={{textAlign:"center"}}>prix</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",marginRight:10,justifyContent:"center"}}>
             <Text style={{textAlign:"center"}}>supp</Text>
         </View>

       </View>

         <View style={{flex:1,flexDirection:'row',marginTop:20,height:40}}>

            <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
               <Text>storm gravity evolve</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                <Text>15 lbs</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                 <Text style={{textAlign:"center"}}>1</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                  <Text style={{textAlign:"center"}}>200€</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center",marginRight:10,alignItems:"center"}}>
                  <FontAwesome name="times-circle" size={20} style={{ color: 'black' }} />
            </View>

         </View>


           
         <View style={{flex:1,flexDirection:'row',marginTop:20,height:40}}>

            <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
               <Text>storm gravity evolve</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                <Text>15 lbs</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                 <Text style={{textAlign:"center"}}>1</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
                  <Text style={{textAlign:"center"}}>200€</Text>
            </View>

            <View style={{flex:1,backgroundColor:"white",justifyContent:"center",marginRight:10,alignItems:"center"}}>
                  <FontAwesome name="times-circle" size={20} style={{ color: 'black' }} />
            </View>

         </View>
         

        <View style={{flex:1, flexDirection:"row", marginTop:60, marginBottom:30}}>
            <View style={{flex:1}}>
               <Button 
                     title="retour accueil"
                     containerStyle={{alignItems:"center"}}
                     buttonStyle={{backgroundColor:"orange"}}
                     onPress= {()=>navigation.navigate("Home")}
               >

              </Button>
            </View>

            <View style={{flex:1}}>
               <Button 
                     title="Valider panier"
                     containerStyle={{alignItems:"center"}}
                     buttonStyle={{backgroundColor:"orange"}}
                     onPress={()=>navigation.navigate("Recapitulatif")}
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
    backgroundColor: '#0f4c75',
    alignItems:"center"
    
  },
});