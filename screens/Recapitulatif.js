import React ,{useState}from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity,TextInput} from 'react-native';
import { Card, ListItem, Button, Icon ,Header, Overlay} from 'react-native-elements'
import Menu from './Menu';
import { Dropdown } from 'react-native-material-dropdown';


export default function Recapitulatif({navigation}) {
 
  return (
    <ScrollView>
      <View style={styles.container}>
       
      

        
        <Text style={{fontSize:18,marginTop:20}}>RECAPITULATIF</Text>


        <View style={{flex:1,flexDirection:'row',marginTop:20,height:40}}>

         <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
          <Text style={{paddingLeft:10}}>produit</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
          <Text>poids</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
          <Text>quantité</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",marginRight:10,justifyContent:"center"}}>
          <Text style={{textAlign:"center"}}>prix</Text>
         </View>
       </View>
        
       <View style={{flex:1,flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
             <Text style={{paddingLeft:10}}>storm gravity evolve</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
               <Text>15 lbs</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>1</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",marginRight:10,justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>200€</Text>
          </View>

      </View>



      <View style={{flex:1,flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>storm gravity evolve</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
              <Text>15 lbs</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
              <Text style={{textAlign:"center"}}>1</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",marginRight:10,justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>200€</Text>
          </View>

      </View>
      
      <View style={{flex:1,flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>total</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
              <Text></Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
              <Text style={{textAlign:"center"}}>2</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",marginRight:10,justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>400€</Text>
          </View>

      </View>
      
      <Text style={{fontSize:18,marginTop:20}}>adresse de livraison</Text>
      <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='Nom'
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
       <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='Prénom'
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

       <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='Adresse'
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
        <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='Code postal'
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
         <TextInput
              keyboardType='email-address' // a bit of extra love for your users
              autoCapitalize='none' // React Native default is to capitalise
              placeholderTextColor="gray"
              placeholder='Ville'
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

        <Button 
           title="Paiement"
           containerStyle={{alignItems:"center",marginTop:20,marginBottom:20}}
           buttonStyle={{backgroundColor:"orange"}}
           onPress= {()=>navigation.navigate("Paiement")}
           >

        </Button>    
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
