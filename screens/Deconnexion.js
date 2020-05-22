import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  RecyclerViewBackedScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Badge,
} from "react-native-elements";

function Deconnexion({ navigation, deconnexionClick, token }) {
  function handleClick() {
    console.log("=======deconnexionClick");
    deconnexionClick();
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fireball.jpg")}
        style={{ width: "100%", height: 180, flex: 1 }}
      ></ImageBackground>
      {/* <Text style={{ fontSize: 20, marginTop: 10, color: "black" }}>
        Déconnexion
      </Text> */}

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <Button
            title="Se déconnecter"
            containerStyle={{ alignItems: "center", width: "85%" }}
            buttonStyle={{
              backgroundColor: "orange",
              marginTop: 10,
              borderWidth: 1,
              borderColor: "orange",
            }}
            titleStyle={{ color: "black", flex: 1 }}
            onPress={() => handleClick()}
          ></Button>
          {/* </View>
        <View style={{ flex: 1 }}> */}
          <Button
            title="retour accueil"
            containerStyle={{ alignItems: "center", width: "85%" }}
            buttonStyle={{
              backgroundColor: "white",
              marginTop: 20,
              borderWidth: 1,
              borderColor: "orange",
            }}
            titleStyle={{ color: "orange", flex: 1 }}
            onPress={() => navigation.navigate("Home")}
          ></Button>
        </View>
      </View>
    </View>
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
  return { ball: state.panier, token: state.token };
}
function mapDispatchToProps(dispatch) {
  return {
    deconnexionClick: function () {
      dispatch({ type: "deconnexion" }),
        dispatch({ type: "deleteToken" }),
        dispatch({ type: "deleteProfil" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deconnexion);
