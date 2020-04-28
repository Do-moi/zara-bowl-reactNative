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
import { FontAwesome } from "@expo/vector-icons";
import Menu from "./Menu";

import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Badge,
} from "react-native-elements";
import { connect } from "react-redux";

function CreateUser({ navigation, saveToken, saveUserProfil}) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [postal, setPostal] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userExist, setUserExist] = useState("");

  var handleSubmitSignUp = async (
    nom,
    prenom,
    email,
    password,
    adresse,
    ville,
    postal
  ) => {
    console.log("=======signUP");
    var reponse = await fetch("http://192.168.1.115:3000/sign-up", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `nom=${nom}&prenom=${prenom}&email=${email}&password=${password}&adresse=${adresse}&ville=${ville}&postal=${postal}`,
    });

    var reponseJson = await reponse.json();
    console.log(";;;;;;;;;;;;;;;;", reponseJson);

    if (reponseJson.reponseSave == false) {
      console.log("=====if jsonresp false");
      setUserExist("utilisateur déjà enregistré");
    }
    if (reponseJson.reponseSave == true) {
      saveToken(reponseJson.userToken);
      saveUserProfil(reponseJson.userSearch)
      console.log("=== saveToken=====", reponseJson.userToken);
      console.log('========userSaveProfil',reponseJson.userSearch);

      navigation.navigate("Profil");
    }
  };
  // var newuser=useEffect(()=>{
  // return <Text>"utilisateur déjà enregistré" </Text>
  // },[userExist])
  console.log("=============", userExist);
  return (
    <ScrollView style={{ backgroundColor: "#08d9d6" }}>
      <View style={styles.container}>
        {/* <ImageBackground
          source={require("../assets/fireball.jpg")}
          style={{ width: "100%", height: 180, flex: 1 }}
        ></ImageBackground> */}
        <Text style={{ fontSize: 20, marginTop: 10 }}>INSCRIPTION</Text>
        <Text style={{ fontSize: 20, color: "red" }}>{userExist}</Text>
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="NOM"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setNom(e)}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="PRENOM"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setPrenom(e)}
        />

        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="EMAIL"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="mot de passe"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setPassword(e)}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="ADRESSE"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setAdresse(e)}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="CODE POSTAL"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setPostal(e)}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="VILLE"
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 10,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "gray",
          }}
          onChangeText={(e) => setVille(e)}
        />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <View style={{ flex: 1 }}>
            <Button
              title="Se connecter"
              containerStyle={{ alignItems: "center" }}
              buttonStyle={{ backgroundColor: "orange" }}
              onPress={() =>
                handleSubmitSignUp(
                  nom,
                  prenom,
                  email,
                  password,
                  adresse,
                  ville,
                  postal
                )
              }
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4eeff",
    alignItems: "center",
  },
});
function mapDispatchToProps(dispatch) {
  return {
    saveToken: function (token) {
      dispatch({ type: "saveToken", token: token })
    },
    saveUserProfil: function (userProfil) {
      dispatch({ type: "saveProfil", userProfil: userProfil})
    },
  };
}
export default connect(null, mapDispatchToProps)(CreateUser);
