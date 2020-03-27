import React ,{useState}from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity,TextInput} from 'react-native';
import { Card, ListItem, Button, Icon ,Header, Overlay} from 'react-native-elements'
import Menu from './Menu';
import { Dropdown } from 'react-native-material-dropdown';


export default function Profil({navigation}) {

  var storm=[{name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Axiom.jpg?fv=0137938F1BB9A493F427FC0C3E3362D0-14141'},
  {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Storm_Omega_Crux_Image.jpg?fv=0B08F4ACCD3A6CBA3382B88410A61BAA-18051'},
  {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Pitch_Purple.jpg?fv=4BCC2E7C34B5E7EA56AEDEC5CDF33603-10190'},
  {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/Gravity_Evolve.jpg?fv=51C4A9E957FB06C150AAE35FC46EBDD9-15382'},
  {name:"gravity evolve",price:"200",img:'https://www.stormbowling.com/img/product/All-Road.jpg?fv=D6618B069B01A77D8524EAAADD6DC1E9-12854'}
]

  var gallery = storm.map((ball,i)=>{
    return <View style={{height:70}}>
    
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: ball.img } }}
          title={ball.name}
          rightTitle={"15 lbs"}
          subtitle={"acheté le 01/02/2020"}
          rightSubtitle={ball.price+"€"}
          bottomDivider
          
        >
          
       </ListItem>
      
    
  </View>
  });
 
  return (
    <ScrollView>
      <View style={styles.container}>
      
       

        
        <Text style={{fontSize:18,marginTop:20,textAlign:"center"}}>PROFIL</Text>

        <View style={{flex:1,flexDirection:"row"}}>

          <Text style={{flex:1,marginLeft:10}}>nom</Text>
       </View>

       <View style={{flex:1,flexDirection:"row"}}>

          <Text style={{flex:1,marginLeft:10}}>prenom</Text>
       </View>
       <View style={{flex:1,flexDirection:"row"}}>

           <Text style={{flex:1,marginLeft:10}}>email</Text>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>

           <Text style={{flex:1,marginLeft:10}}>adresse</Text>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>

           <Text style={{flex:1,marginLeft:10}}>code postal</Text>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>

           <Text style={{flex:1,marginLeft:10}}>ville</Text>
        </View>

        <Text style={{fontSize:18,marginTop:20,textAlign:"center"}}>HISTORIQUE ACHATS</Text>
        <View style={{flex:1}}>
        {gallery}
        </View>
        <Button 
           title="revenir accueil"
           containerStyle={{alignItems:"center",marginTop:30,marginBottom:30}}
           buttonStyle={{backgroundColor:"orange"}}
           onPress={()=>navigation.navigate("Home")}
           >

        </Button>    
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
    
  },
  
});
