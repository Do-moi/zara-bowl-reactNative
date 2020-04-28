import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Overlay,
} from "react-native-elements";
import Menu from "./Menu";
import { Dropdown } from "react-native-material-dropdown";
import { connect } from "react-redux";
import { CommonActions } from '@react-navigation/native';


function Profil({ navigation, token, userProfil }) {
  var tab = [];
  console.log('==========profil token',token)
  
  console.log("=======profil user", userProfil);

  if (userProfil.commande) {
    tab = userProfil.commande;
  }
  const [isVisible, setIsVisible] = useState(false);
  const [cmdDesc, setCmdDesc] = useState({});
  // const {token} = route.params;
  // console.log('=======route params',token)
  const [profilUser, setProfilUser] = useState({});
  // useEffect(() => {
  //   const findApi = async () => {
  //     var resp = await fetch("http://192.168.1.115:3000/profil", {
  //       method: "POST",
  //       headers: { "content-type": "application/x-www-form-urlencoded" },
  //       body: `tokenProfil=${token}`,
  //     });
  //     var jsonResp = await resp.json();
  //     console.log("=====json resp", jsonResp);
      
  //   };
  //   findApi();
  // }, []);
  function handleClick(ball) {
    console.log("======handleClick", ball);
    setIsVisible(true);
    setCmdDesc(ball);
  }

  var gallery = tab.map((ball, i) => {
    return (
      <View style={{ height: 70 }}>
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: ball.img } }}
          title={ball.brand + " " + ball.name + " " + ball.poids}
          rightTitle={"qté: " + ball.qte}
          subtitle={"acheté le " + ball.date}
          rightSubtitle={ball.qte * ball.price + "€"}
          chevron
          bottomDivider
          onPress={() => handleClick(ball)}
        ></ListItem>
      </View>
    );
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Overlay
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        >
          <ScrollView>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Description{" "}
            </Text>
            <Text>Marque : {cmdDesc.brand}</Text>
            <Text>Model : {cmdDesc.name}</Text>
            <Text>Poids : {cmdDesc.poids}</Text>
            <Text>Prix unitaire: {cmdDesc.price}€</Text>
            <Text>Quantité : {cmdDesc.qte}</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Coordonnée de livraison{" "}
            </Text>
            <Text>Nom : {cmdDesc.nom}</Text>
            <Text>Prénom : {cmdDesc.prenom}</Text>
            <Text>Adresse : {cmdDesc.adresse}</Text>
            <Text>Postal : {cmdDesc.postal}</Text>
            <Text>Ville : {cmdDesc.ville}</Text>
          </ScrollView>
        </Overlay>

        <Text style={{ fontSize: 18, marginTop: 20, textAlign: "center" }}>
          PROFIL
        </Text>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
            nom:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.nom}</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
            prenom:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.prenom}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
            email:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.email}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
            adresse:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.adresse}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
            postal:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.postal}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
            ville
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.ville}</Text>
        </View>

        <Text style={{ fontSize: 18, marginTop: 20, textAlign: "center" }}>
          HISTORIQUE ACHATS
        </Text>
        <View style={{ flex: 1 }}>{gallery}</View>
        <Button
          title="revenir accueil"
          containerStyle={{
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
          buttonStyle={{ backgroundColor: "orange" }}
          onPress={() =>navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Profil' },
                {
                  name: 'Home',
                  
                },
              ],
            })
          )}
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
function mapStateToProps(state) {
  return { token: state.token , userProfil: state.userProfil};
}
export default connect(mapStateToProps, null)(Profil);
