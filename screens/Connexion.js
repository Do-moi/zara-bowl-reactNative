import React, { useState } from "react";
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
import { useIsFocused } from "@react-navigation/native";
import {
  Card,
  ListItem,
  Button,
  Header,
  Badge,
  Input,
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

function Connexion({ navigation, saveToken, route, saveUserProfil }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log('=======message',route)
  var handleSubmitSignIn = async (email, password) => {
    var rep = await fetch("http://192.168.1.115:3000/sign-in", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`,
    });
    var jsonRep = await rep.json();

    console.log("::::::::::::::", jsonRep);
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
  };
  console.log("=================bienvenue page connexion");
  // console.log("=================bienvenue page connexion",error)
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/fireball.jpg")}
          style={{ width: "100%", height: 180, flex: 1 }}
        ></ImageBackground>
        <Text style={{ fontSize: 20, marginTop: 30, color: "black" }}>
          CONNEXION
        </Text>

        <TextInput
          keyboardType="email-address" // a bit of extra love for your users
          autoCapitalize="none" // React Native default is to capitalise
          placeholderTextColor="black"
          placeholder="email"
          style={{
            backgroundColor: "#DCDCDC",
            borderRadius: 20,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 30,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "black",
          }}
          onChangeText={(e) => setEmail(e)}
          clearTextOnFocus="true"
        />

        <TextInput
          autoCompleteType="password"
          secureTextEntry={true}
          placeholderTextColor="black"
          placeholder="Saisir votre mot de passe"
          style={{
            backgroundColor: "#DCDCDC",
            borderRadius: 20,
            height: 50,
            width: "85%",
            paddingLeft: 15,
            marginTop: 5,
            marginRight: 30,
            marginBottom: 5,
            marginLeft: 30,
            fontSize: 18,
            color: "black",
          }}
          onChangeText={(e) => setPassword(e)}
        />

        <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 60 }}>
          <View style={{ flex: 1 }}>
            <Button
              title="Se connecter"
              containerStyle={{ alignItems: "center" }}
              buttonStyle={{ backgroundColor: "orange" }}
              titleStyle={{ color: "black" }}
              onPress={() => handleSubmitSignIn(email, password)}
            ></Button>
          </View>

          <View style={{ flex: 1 }}>
            <Button
              title="Créer un compte"
              containerStyle={{ alignItems: "center" }}
              buttonStyle={{ backgroundColor: "orange" }}
              titleStyle={{ color: "black" }}
              onPress={() => navigation.navigate("CreateUser")}
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
