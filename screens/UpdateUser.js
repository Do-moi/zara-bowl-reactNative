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

function UpdateUser({
  navigation,
  saveToken,
  saveUserProfil,
  userProfil,
  token,
}) {
  const [nom, setNom] = useState(userProfil.nom);
  const [prenom, setPrenom] = useState(userProfil.prenom);
  const [telephone, setTelephone] = useState(userProfil.telephone);
  const [adresse, setAdresse] = useState(userProfil.adresse);
  const [postal, setPostal] = useState(userProfil.postal);
  const [ville, setVille] = useState(userProfil.ville);
  const [email, setEmail] = useState(userProfil.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  var handleSubmitUpdate = async () => {
    console.log("====================handleSubmitUpdate");

    var reponse = await fetch("http://192.168.1.115:3000/updateUser", {
      method: "PUT",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `token=${token}&nom=${nom}&prenom=${prenom}&telephone=${telephone}&email=${email}&password=${password}&newPassword=${newPassword}&adresse=${adresse}&ville=${ville}&postal=${postal}`,
    });

    var reponseJson = await reponse.json();
    console.log("=================reponseJson", reponseJson);

    if (reponseJson.result == false) {
      console.log("=====if jsonresp error", reponseJson.error);
      setError(reponseJson.error[0]);
    }
    if (reponseJson.result == true) {
      saveUserProfil(reponseJson.findUser);
      // console.log("=== saveToken=====", reponseJson.userToken);
      // console.log("========userSaveProfil", reponseJson.userSearch);
      setError("");
      navigation.navigate("Profil");
    }
  };
  var erreur = (
    <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
      {error}
    </Text>
  );
  console.log("==============updateUser", userProfil);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Modifier UN COMPTE</Text>
        {erreur}
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="NOM"
          style={styles.inputStyle}
          onChangeText={(e) => setNom(e)}
          value={nom}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="PRENOM"
          style={styles.inputStyle}
          onChangeText={(e) => setPrenom(e)}
          value={prenom}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="TELEPHONE"
          style={styles.inputStyle}
          onChangeText={(e) => setTelephone(e)}
          value={telephone}
        />

        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="EMAIL"
          style={styles.inputStyle}
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="ANCIEN MOT DE PASSE"
          style={styles.inputStyle}
          onChangeText={(e) => setPassword(e)}
          value={password}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="NOUVEAU MOT DE PASSE"
          style={styles.inputStyle}
          onChangeText={(e) => setNewPassword(e)}
          value={newPassword}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="ADRESSE"
          style={styles.inputStyle}
          onChangeText={(e) => setAdresse(e)}
          value={adresse}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="CODE POSTAL"
          style={styles.inputStyle}
          onChangeText={(e) => setPostal(e)}
          value={postal}
        />
        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="gray"
          placeholder="VILLE"
          style={styles.inputStyle}
          onChangeText={(e) => setVille(e)}
          value={ville}
        />

        <View
          style={{
            flex: 1,

            flexDirection: "row",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Button
            title="VALIDER"
            containerStyle={{ alignItems: "center", width: "85%" }}
            buttonStyle={{ backgroundColor: "orange" }}
            titleStyle={{ color: "black", flex: 1 }}
            onPress={() => handleSubmitUpdate()}
          ></Button>
        </View>
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
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    width: "85%",
    paddingLeft: 15,
    marginTop: 10,
    marginRight: 30,
    marginBottom: 5,
    marginLeft: 30,
    fontSize: 18,
    color: "black",
  },
});
function mapStateToProps(state) {
  return { userProfil: state.userProfil, token: state.token };
}
function mapDispatchToProps(dispatch) {
  return {
    saveToken: function (token) {
      dispatch({ type: "saveToken", token: token });
    },
    saveUserProfil: function (userProfil) {
      dispatch({ type: "saveProfil", userProfil: userProfil });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
