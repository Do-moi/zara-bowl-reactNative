import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Card, ListItem, Button, Icon ,Header, Overlay} from 'react-native-elements';


export default function Stripe({navigation}) {


  return (
    <View style={styles.container}>

      <Text style={{marginTop:30}}>PAIEMENT</Text>
      <View style={{flexDirection:'row',height:40}}>

         <View style={{flex:4,backgroundColor:"#ededed",marginLeft:10,justifyContent:"center"}}>
          <Text style={{paddingLeft:10}}>produit</Text>
         </View>

         <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
          <Text>poids</Text>
         </View>

         <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center",alignItems:"center"}}>
          <Text>qté</Text>
         </View>

         <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center",marginRight:10}}>
             <Text style={{textAlign:"center"}}>prix</Text>
         </View>

         
       </View>
       <View style={{flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"#ededed",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>storm gravity evolve</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
               <Text>15 lbs</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>1</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center",marginRight:10}}>
                <Text style={{textAlign:"center"}}>200€</Text>
          </View>

      </View>

      <View style={{flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"#ededed",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>storm gravity evolve</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
              <Text>15 lbs</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>1</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center",marginRight:10}}>
               <Text style={{textAlign:"center"}}>200€</Text>
            </View>

      </View>

      <View style={{flexDirection:'row',marginTop:10,height:40}}>

          <View style={{flex:4,backgroundColor:"#ededed",marginLeft:10,justifyContent:"center"}}>
               <Text style={{paddingLeft:10}}>total</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
              <Text></Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",justifyContent:"center"}}>
              <Text style={{textAlign:"center"}}>2</Text>
          </View>

          <View style={{flex:1,backgroundColor:"#ededed",marginRight:10,justifyContent:"center"}}>
               <Text style={{textAlign:"center"}}>400€</Text>
          </View>

      </View>
       <View style={{flex:1,marginTop:30}}>
          <CreditCardInput
               placeholderColor={"silver"}
                 placeholders={{
                        number: "1234 5678 1234 5678", expiry: "MM/YY", cvc: "CVC", name: 'NOM'
                   }}

                       labels={{ number: "N° DE CARTE", expiry: "EXP", cvc: "CVC", name: "NOM", brand: "VISA"  }}
                     // cardImageFront={require("../assets/homePage.jpeg")}

          
                   requiresName
          
          />
        </View>
        <Button 
           title="Paiement"
           containerStyle={{alignItems:"center",marginTop:20,marginBottom:20}}
           buttonStyle={{backgroundColor:"orange"}}
           onPress={()=>navigation.navigate("Confirm")}
           >

        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
});
