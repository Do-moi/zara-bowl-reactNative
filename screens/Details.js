import React ,{useState}from 'react';
import { StyleSheet, Text, View,ScrollView,ImageBackground,Image ,TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon ,Header, Overlay} from 'react-native-elements'
import Menu from './Menu';
import { Dropdown } from 'react-native-material-dropdown';


export default function Details({navigation,route}) {
  
const {name} = route.params;
var nameBall= JSON.stringify(name);
console.log('==================nameBall',nameBall);


  const [isVisible,setIsVisible] = useState (false)
  const [visible,setVisible] = useState(false);
   const poids=[{value:"16 lbs"},
                {value:"15 lbs"},
                {value:"14 lbs"},
                {value:"13 lbs"},
                {value:"12 lbs"}
  ]

  const quantite= [
                     {value:"1"},
                     {value:"2"},
                     {value:"3"},
                     {value:"4"},
                     {value:"5"},
                     {value:"6"}
]
  return (
    <ScrollView style={{backgroundColor:"blue"}}>
      <View style={styles.container}>
      
       <Overlay
              isVisible={isVisible}
              onBackdropPress={() => setIsVisible(false)}
        >
          <ScrollView>
          <Text>Description </Text>
          <Text>
           Proident mollit irure irure ut. Occaecat Lorem ullamco sint laborum in amet magna id cupidatat sint labore est voluptate commodo. Exercitation officia consequat cillum qui non. Non esse qui velit amet elit velit sunt labore. Sint ipsum exercitation nisi sunt ad deserunt laborum velit aliquip est eiusmod minim.

Officia aliqua proident deserunt velit excepteur voluptate ad Lorem ad reprehenderit Lorem elit consequat. Eu culpa proident ut officia eiusmod dolor nulla est proident. Pariatur irure minim aute incididunt quis eiusmod dolore labore nostrud proident nulla.

Consectetur officia officia laborum irure consequat tempor cupidatat ea eu excepteur magna. Incididunt nulla enim cupidatat fugiat laboris dolor. Eu nisi est officia voluptate aliqua tempor qui nostrud qui pariatur ut ea culpa eu. Amet ad ut eiusmod ipsum nostrud. Adipisicing adipisicing eu sint incididunt. Exercitation nostrud qui exercitation cupidatat.

Non nisi ut veniam reprehenderit veniam irure. Laborum esse fugiat enim cillum esse quis Lorem officia. Irure sunt irure cillum fugiat labore esse exercitation sit reprehenderit aliqua ea anim. Fugiat nisi id eu elit quis ut proident tempor labore do eu velit id. Irure excepteur irure nostrud consectetur ullamco veniam dolor ea laboris eu. Labore anim irure aute laborum labore deserunt reprehenderit.

Anim fugiat ad amet mollit et occaecat ea nisi veniam tempor adipisicing cupidatat. Cillum aliquip laborum in cillum elit aute. Exercitation laboris esse ad minim qui aute minim nisi occaecat minim id. Veniam anim consectetur cupidatat ea nisi aliqua qui amet Lorem pariatur minim nulla. Id consequat id nisi qui non in tempor. Exercitation nostrud minim aliqua dolor veniam adipisicing. Cupidatat nostrud duis aliquip et Lorem aliquip excepteur excepteur quis cillum veniam aute minim qui.

Esse ullamco qui voluptate tempor id consequat ad fugiat aliqua minim laborum. Cillum do nostrud ut ut amet ad consequat cillum fugiat. Cupidatat amet nulla dolor minim.

Quis nostrud tempor et ea ad commodo culpa. Proident dolor labore cupidatat ad nostrud qui nulla aliquip minim. Amet enim est dolore eu cupidatat exercitation fugiat labore aliqua quis. Anim labore id laboris exercitation proident labore.


          </Text>
          </ScrollView>
        </Overlay>

        <Overlay
              isVisible={visible}
              onBackdropPress={() => setVisible(false)}
        >
          <ScrollView>
          <Text> caractéristique!</Text>
          <Text>
            Culpa consequat et labore et minim. Officia duis ad enim est ad ullamco Lorem. Eu Lorem eu sunt id aute est anim duis laboris eiusmod est consectetur tempor do.
            Laboris culpa voluptate magna proident ea velit officia nostrud exercitation. Aute minim ut consequat deserunt proident. Sint et qui mollit mollit ut ipsum et enim. Pariatur non voluptate laboris nisi aliquip reprehenderit.

Voluptate in ea commodo ullamco ea ex nisi. Elit laborum dolore ullamco duis. Amet id eu laborum aliquip quis sunt in laborum culpa.

Incididunt culpa voluptate commodo aute Lorem. Do magna cupidatat labore enim sit proident eiusmod aliquip reprehenderit nisi sint ullamco. Exercitation aliquip dolore fugiat deserunt est nisi consequat nulla quis duis minim magna. Deserunt anim in consectetur enim anim incididunt non. Ut dolore enim aliqua do veniam anim exercitation ipsum fugiat minim. Veniam ullamco consequat sint est excepteur id non proident consequat.

Proident duis cupidatat tempor eiusmod aliqua minim officia ullamco excepteur. Consectetur ex tempor est esse id reprehenderit sunt incididunt eiusmod exercitation. Pariatur sit id id et. Laboris deserunt Lorem consequat mollit elit sunt ullamco occaecat laboris. Officia commodo sit tempor labore fugiat nisi ea cillum consectetur eu minim.

Et anim consectetur tempor laboris magna do elit aute laborum do fugiat nisi. Ut non sint duis et aute incididunt. Consectetur aute ullamco cillum laboris reprehenderit. Non pariatur ut id mollit anim incididunt non in magna magna consequat magna. Voluptate cillum elit velit ipsum labore. Labore Lorem magna exercitation consectetur fugiat.
          </Text>
          </ScrollView>
        </Overlay>
       
        <Text style={{fontSize:18,marginTop:20}}>STORM evolve gravity</Text>
        
      <View style={{flex:1, flexDirection:"row", marginTop:30}}>
        <View style={{flex: 1,width: 150, height: 200}}>
           <Image
             style={{width:150, height: 150,marginLeft:10}}
            resizeMode={'cover'}
             source={require('../assets/brunswick-prism1.png')}
           />
        </View>
        <View>
        <Image
             style={{width:180, height: 180,marginLeft:10}}
            
             source={require('../assets/brunswick-prism-core.png')}
           />
        </View>
      </View>

      <View style={{flex:1, flexDirection:"row", marginTop:30}}>
        <View style={{flex:1}}>
          <Button 
           title="Description"
           containerStyle={{alignItems:"center"}}
           buttonStyle={{backgroundColor:"orange"}}
           onPress={()=>setIsVisible(true)}
           >

          </Button>
        </View>

        <View style={{flex:1}}>
       <Button 
       title="Caractéristique"
       containerStyle={{alignItems:"center"}}
       buttonStyle={{backgroundColor:"orange"}}
       onPress={()=>setVisible(true)}
       >

       </Button>
        </View>

      </View>


      <View style={{flex:1, flexDirection:"row", marginTop:30}}>
        <View style={{flex:1}}>
        <Dropdown
                
                label='poids'
                data={poids}
                pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 0 }}
                dropdownOffset={{ top: 0 ,left:10}}
                textColor='black'
                containerStyle={styles.dropdown}
               
              />
        </View>

        <View style={{flex:1}}>
        <Dropdown
                
                label='quantité'
                data={quantite}
                pickerStyle={{ borderBottomColor: 'transparent', borderWidth: 0 }}
                dropdownOffset={{ top: 0 ,left:10}}
                textColor='black'
                containerStyle={styles.dropdown}
               
              />
        </View>

      </View>

      <View style={{flex:1, flexDirection:"row", marginTop:60, marginBottom:30}}>
        <View style={{flex:1}}>
          <Button 
           title="retour accueil"
           containerStyle={{alignItems:"center"}}
           buttonStyle={{backgroundColor:"orange"}}
           onPress={()=>navigation.navigate("Home")}
           >

          </Button>
        </View>

        <View style={{flex:1}}>
       <Button 
       title="ajouter panier"
       containerStyle={{alignItems:"center"}}
       buttonStyle={{backgroundColor:"orange"}}
       onPress= {()=>navigation.navigate("Panier")}
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
    backgroundColor: '#00adb5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    width: '85%',
    height:50,
    backgroundColor: '#eeeeee',
    opacity: 0.8,
    margin: 10,
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
    // dropdownMargins: {min: 8, max: 16 },
  }
});