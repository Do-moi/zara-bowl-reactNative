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
  KeyboardAvoidingView,
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

function CreateUser({ navigation, saveToken, saveUserProfil }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [postal, setPostal] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userExist, setUserExist] = useState("");

  var handleSubmitSignUp = async () => {
    // for (var i = 0; i < telephone.length; i++) {
    //   console.log("===============telephone====", telephone[i]);
    //   if (
    //     telephone[i] == 1 ||
    //     telephone[i] == 2 ||
    //     telephone[i] == 3 ||
    //     telephone[i] == 4 ||
    //     telephone[i] == 5 ||
    //     telephone[i] == 6 ||
    //     telephone[i] == 7 ||
    //     telephone[i] == 8 ||
    //     telephone[i] == 9 ||
    //     telephone[i] == 0
    //   ) {
    //     console.log("chiffre trouvé");
    //   } else {
    //     console.log("veuillez entrer des chiffres");
    //   }
    // }
    // var regex = /[A-Za-z]/;
    // var testNB = regex.test(telephone);

    // console.log("============testNB", testNB);
    // var regex1 = /[^A-Za-z0-9_]/;
    // var testNB1 = regex1.test(telephone);

    // console.log("============testNB1", testNB1);
    // console.log("=======signUP");
    var reponse = await fetch("http://192.168.1.115:3000/sign-up", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `nom=${nom}&prenom=${prenom}&telephone=${telephone}&email=${email}&password=${password}&adresse=${adresse}&ville=${ville}&postal=${postal}`,
    });

    var reponseJson = await reponse.json();
    console.log(";;;;;;;;;;;;;;;;", reponseJson);

    if (reponseJson.reponseSave == false) {
      console.log("=====if jsonresp error", reponseJson.error);
      setUserExist(reponseJson.error[0]);
    }
    if (reponseJson.reponseSave == true) {
      saveToken(reponseJson.userToken);
      saveUserProfil(reponseJson.userSearch);
      console.log("=== saveToken=====", reponseJson.userToken);
      console.log("========userSaveProfil", reponseJson.userSearch);

      navigation.navigate("Profil");
    }
  };
  // var newuser=useEffect(()=>{
  // return <Text>"utilisateur déjà enregistré" </Text>
  // },[userExist])
  console.log("=============", userExist);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, marginTop: 20 }}>CREER UN COMPTE</Text>
          <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
            {userExist}
          </Text>
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
            placeholder="MOT DE PASSE"
            style={styles.inputStyle}
            onChangeText={(e) => setPassword(e)}
            value={password}
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
              onPress={() =>
                handleSubmitSignUp(
                  nom,
                  prenom,
                  telephone,
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
      </ScrollView>
    </KeyboardAvoidingView>
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
    width: "95%",
    paddingLeft: 15,
    marginTop: 10,
    marginRight: 30,
    marginBottom: 5,
    marginLeft: 30,
    fontSize: 18,
    color: "black",
  },
});
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
export default connect(null, mapDispatchToProps)(CreateUser);
