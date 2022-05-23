import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ListItem, Button, Overlay } from "react-native-elements";
import { withNavigationFocus } from "@react-navigation/compat";
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import HttpLocal from "../Keyhttp/KeyLocal";
import HttpHeroku from "../Keyhttp/KeyHeroku";

function Profil({ navigation, token, userProfil, saveUserProfil }) {
  var tab = [];
  useEffect(() => {
    const findApi = async () => {
      var rep = await fetch(`${HttpHeroku}/profil`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: `token=${token}`,
      });
      var jsonRep = await rep.json();
      console.log("==========jsonRep", jsonRep);
      saveUserProfil(jsonRep.profilUser);
    };
    findApi();
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [cmdDesc, setCmdDesc] = useState({});

  function handleClick(ball) {
    setIsVisible(true);
    setCmdDesc(ball);
  }

  if (userProfil.commande) {
    tab = userProfil.commande;
  }
  var gallery = tab.map((ball, i) => {
    return (
      <View style={{ width: "100%" }}>
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

  if (token) {
    var loged = (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Button
            title="modifier profil"
            titleStyle={{ color: "orange" }}
            containerStyle={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: "orange",
              borderRadius: 5,
              width: "80%",
            }}
            buttonStyle={{ backgroundColor: "white" }}
            onPress={() => navigation.navigate("UpdateUser")}
            // onPress={() => 
            // navigation.dispatch(
            //   CommonActions.navigate({
            //     name: 'UpdateUser'
            //   })
            // )}
          ></Button>
        </View>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Overlay
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        >
          <ScrollView>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Description{" "}
            </Text>
            <Text style={{ marginTop: 20 }}>Marque : {cmdDesc.brand}</Text>
            <Text>Model : {cmdDesc.name}</Text>
            <Text>Poids : {cmdDesc.poids}</Text>
            <Text>Prix unitaire: {cmdDesc.price}€</Text>
            <Text>Quantité : {cmdDesc.qte}</Text>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}
            >
              Coordonnée de livraison{" "}
            </Text>
            <Text style={{ marginTop: 20 }}>Nom : {cmdDesc.nom}</Text>
            <Text>Prénom : {cmdDesc.prenom}</Text>
            <Text>téléphone : {cmdDesc.telephone}</Text>
            <Text>Adresse : {cmdDesc.adresse}</Text>
            <Text>Postal : {cmdDesc.postal}</Text>
            <Text>Ville : {cmdDesc.ville}</Text>
          </ScrollView>
        </Overlay>

        <Text style={{ fontSize: 18, marginTop: 60, textAlign: "center" }}>
          PROFIL
        </Text>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            nom:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.nom}</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            prenom:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.prenom}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            téléphone:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.telephone}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            email:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.email}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            adresse:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.adresse}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            postal:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.postal}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ flex: 2, marginLeft: 10, fontWeight: "bold" }}>
            ville:
          </Text>
          <Text style={{ flex: 5 }}>{userProfil.ville}</Text>
        </View>
        {loged}
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          HISTORIQUE ACHATS
        </Text>
        {gallery}

        <Button
          title="revenir accueil"
          containerStyle={{
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30,
            width: "85%",
          }}
          buttonStyle={{ backgroundColor: "orange" }}
          titleStyle={{ color: "black", flex: 1 }}
          onPress={() => navigation.navigate("Home")}
            
        ></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
function mapStateToProps(state) {
  return { token: state.token, userProfil: state.userProfil };
}
function mapDispatchToProps(dispatch) {
  return {
    deconnexionClick: function () {
      dispatch({ type: "deconnexion" }),
        dispatch({ type: "deleteToken" }),
        dispatch({ type: "deleteProfil" });
    },
    saveUserProfil: function (userProfil) {
      dispatch({ type: "saveProfil", userProfil: userProfil });
    },
  };
}
var profilRedux = connect(mapStateToProps, mapDispatchToProps)(Profil);

export default withNavigationFocus(profilRedux);
