import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Card, ListItem, Button, Icon ,Header, Overlay} from 'react-native-elements';


export default function Confirm({navigation}) {


  return (
    <View style={styles.container}>

      <Text style={{marginTop:30}}>Confirmation de paiement</Text>

      <View style={{flexDirection:'row',height:40,marginTop:10}}>

         <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
          <Text style={{paddingLeft:10}}>produit</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
          <Text>poids</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
          <Text>qté</Text>
         </View>

         <View style={{flex:1,backgroundColor:"white",justifyContent:"center",marginRight:10}}>
             <Text style={{textAlign:"center"}}>prix</Text>
         </View>

         
       </View>
       <View style={{flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>storm gravity evolve</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
               <Text>15 lbs</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>1</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center",marginRight:10}}>
                <Text style={{textAlign:"center"}}>200€</Text>
          </View>

      </View>

      <View style={{flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"white",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>storm gravity evolve</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
              <Text>15 lbs</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>1</Text>
          </View>

          <View style={{flex:1,backgroundColor:"white",justifyContent:"center",marginRight:10}}>
               <Text style={{textAlign:"center"}}>200€</Text>
            </View>

      </View>

      <View style={{flexDirection:'row',marginTop:10,height:40}}>

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
       <View style={{flex:1, marginTop:40, marginLeft:10,marginRight:10}}>
         <Text style={{}}>Votre commande à bien été validé , elle vous sera livré au 1 rue de Paris 75001 PARIS</Text>
       </View>
       <View style={{flex:1}}>
       <Button 
           title="Retour à l'accueil"
           containerStyle={{alignItems:"center"}}
           buttonStyle={{backgroundColor:"orange"}}
           onPress={()=>navigation.navigate("Home")}
           >

        </Button>  
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
    
    
  },
});

