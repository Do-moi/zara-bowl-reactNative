import React, { useState } from "react";
import HttpLocal from "../Keyhttp/KeyLocal";
import HttpHeroku from "../Keyhttp/KeyHeroku";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { Button } from "react-native-elements";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Connexion({ navigation, saveToken, saveUserProfil }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  var handleSubmitSignIn = async () => {
    var listError = [];
    var testEmail = false;
    var passwordNB = false;
    var upperCase = false;
    var lowerCase = false;
    var caracteres = false;
    // =============================champs vides======================================
    if (email == "" || password == "") {
      listError.push("champs vides");
    }
    // =======================================condition email===============================
    var regexEmail = /@/;
    var findRegexEmail = regexEmail.test(email);

    if (findRegexEmail == true) {
      testEmail = true;
    }
    if (testEmail == false) {
      listError.push("format email incorrect");
    }
    // ===============================================condition password===================

    if (password.length < 6) {
      listError.push("mot de passe minimum 6 caractères");
    }
    var regexUpperCase = /[A-Z]/;
    var findUpperCase = regexUpperCase.test(password);

    if (findUpperCase == true) {
      upperCase = true;
    }
    var regexLowerCase = /[a-z]/;
    var findLowerCase = regexLowerCase.test(password);

    if (findLowerCase == true) {
      lowerCase = true;
    }

    var regex = /[0-9]/;
    var testNB = regex.test(password);

    if (testNB == true) {
      passwordNB = true;
    }

    var regex1 = /[^A-Za-z0-9_]/;
    var testCaracteres = regex1.test(password);

    if (testCaracteres == true) {
      caracteres = true;
    }

    if (upperCase == false) {
      listError.push("mot de passe minimum 1 majuscule ");
    } else if (passwordNB == false) {
      listError.push("mot de passe minimum 1 chiffre");
    } else if (lowerCase == false) {
      listError.push("mot de passe minimum 1 minuscule ");
    } else if (caracteres == false) {
      listError.push("mot de passe minimun 1 caractère spécial");
    }
    if (listError.length == 0) {
      var rep = await fetch(`${HttpLocal}/sign-in`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: `email=${email}&password=${password}`,
      });
      var jsonRep = await rep.json();
      console.log("==============jsonRep", jsonRep);
      if (jsonRep.findUser == true) {
        saveToken(jsonRep.token);
        saveUserProfil(jsonRep.profilUser);
        setError(null);
        setEmail("");
        setPassword("");
        navigation.navigate("Profil");
      } else {
        setError(jsonRep.error[0]);
      }
    } else {
      setError(listError[0]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={{ width: wp("100%"), height: hp("35%") }}>
            <ImageBackground
              source={require("../assets/fireball.jpg")}
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            ></ImageBackground>
          </View>

          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="grey"
            placeholder="email"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              height: 50,
              width: "85%",
              paddingLeft: 15,
              marginTop: 30,
              marginRight: 30,
              marginBottom: 5,
              marginLeft: 30,
              fontSize: 18,
              borderWidth: 1,
              borderColor: "grey",
              color: "black",
            }}
            onChangeText={(e) => setEmail(e)}
            clearTextOnFocus={true}
          />

          <TextInput
            autoCompleteType="password"
            secureTextEntry={true}
            placeholderTextColor="grey"
            placeholder="mot de passe"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              height: 50,
              width: "85%",
              paddingLeft: 15,
              marginTop: 5,
              marginRight: 30,
              marginBottom: 5,
              marginLeft: 30,
              fontSize: 18,
              borderColor: "grey",
              borderWidth: 1,
              color: "black",
            }}
            onChangeText={(e) => setPassword(e)}
          />

          <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>

          <View style={{ flex: 1, flexDirection: "column", marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Button
                title="Se connecter"
                containerStyle={{ alignItems: "center", width: "100%" }}
                buttonStyle={{ backgroundColor: "#ffa500" }}
                titleStyle={{ color: "white", flex: 1 }}
                onPress={() => handleSubmitSignIn()}
              ></Button>
            </View>

            <View style={{ flex: 1, width: "100%" }}>
              <Button
                title="Créer un compte"
                containerStyle={{ alignItems: "center", width: "85%" }}
                buttonStyle={{
                  backgroundColor: "white",
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: "#ffa500",
                }}
                titleStyle={{ color: "orange", flex: 1 }}
                onPress={() => navigation.navigate("CreateUser")}
              ></Button>
            </View>
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
export default connect(null, mapDispatchToProps)(Connexion);
