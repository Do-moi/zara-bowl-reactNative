
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity, RecyclerViewBackedScrollView} from 'react-native';



import { Card, ListItem, Button, Icon ,Header,Badge} from 'react-native-elements'

export default function Search({navigation,route}) {

  const { brand } = route.params;
  var newBrand = JSON.stringify(brand);
 const [balls,setBalls] = useState([]);
// const [marque,setMarque] = useState("")
//   setMarque(brand)
  useEffect (()=>{
    const findApi= async()=>{ 
      var rep= await fetch(`http://192.168.1.115:3000/search?name=${brand}`)
      var jsonRep = await rep.json()
      setBalls(jsonRep.response.list)
  }
  findApi()
  },[brand]);
  

  var galleryPhoto = balls.map((ball,i)=>{
    return <View style={{height:70}}>
    
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: ball.img } }}
          title={ball.name}
          rightSubtitle={ball.price+"€"}
          
          topDivider
          chevron
          containerStyle={{backgroundColor:'white'}}
          onPress={()=>navigation.navigate("Details",{
            name: ball.name,
            price: ball.price,
            img: ball.img,
            imgCore: ball.imgCore,
            desc: ball.desc,
            core: ball.core,
            coverstock: ball.coverstock,
            flare: ball.flare,
            performance: ball.performance,
            condition:ball.condition,
            color: ball.color,
            differential: ball.differential,
            finish: ball.finish,
            masse_bias: ball.masse_bias,
            rg: ball.rg,
            reaction: ball.reaction,
            date: ball.date,
            brand: brand
          }
          )}
        >
          
       </ListItem>
      
    
  </View>
  });

    console.log('==================params',newBrand)
  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={styles.container}>
        
      

        <ImageBackground source={require('../assets/fireball.jpg')} style={{width: '100%', height: 240, flex:1}}>
        
        </ImageBackground>

       

{galleryPhoto}


      

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
