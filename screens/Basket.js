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

function Basket({ navigation, ball, deleteClick, token }) {
  console.log("==========basket", ball);
  console.log("=======token", token);
  const [error, setError] = useState("");

  console.log("=======tokenFind", token);

  useEffect(() => {
    setError(null);
  }, [ball]);

  var ballChoice = ball.map((ball, i) => {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", marginTop: 20, height: 40 }}
      >
        <View
          style={{
            flex: 4,
            backgroundColor: "white",
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginLeft: 10 }}>
            {ball.brand} {ball.name}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Text> {ball.thePoids}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{ball.theQuantite}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{ball.price}€</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => deleteClick(i)}>
            <FontAwesome
              name="times-circle"
              size={20}
              style={{ color: "black" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  function emptyBasket() {
    if (ball.length < 1) {
      setError("panier vide");
    } else if (token == "") {
      navigation.navigate("Connexion");
    } else {
      setError(null);
      navigation.navigate("Recapitulatif", {
        message: "veuillez vous connecter ou vous inscrire!",
      });
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/fireball.jpg")}
          style={{ width: "100%", height: 180, flex: 1 }}
        ></ImageBackground>
        <Text style={{ fontSize: 20, marginTop: 10, color: "black" }}>
          PANIER
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 40,
            height: 40,
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flex: 4,
              backgroundColor: "white",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ marginLeft: 10 }}>produit</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Text>poids</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>qté</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>prix</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              marginRight: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>supp</Text>
          </View>
        </View>

        {ballChoice}

        <Text style={{ color: "red", fontSize: 30, marginTop: 20 }}>
          {error}
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 60,
            marginBottom: 30,
          }}
        >
          <View style={{ flex: 1 }}>
            <Button
              title="retour accueil"
              titleStyle={{ color: "black" }}
              containerStyle={{ alignItems: "center" }}
              buttonStyle={{ backgroundColor: "orange" }}
              onPress={() => navigation.navigate("Home")}
            ></Button>
          </View>

          <View style={{ flex: 1 }}>
            <Button
              title="Valider panier"
              titleStyle={{ color: "black" }}
              containerStyle={{ alignItems: "center" }}
              buttonStyle={{ backgroundColor: "orange" }}
              onPress={() => emptyBasket()}
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
function mapStateToProps(state) {
  return { ball: state.panier, token: state.token };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteClick: function (nb) {
      dispatch({ type: "delete", nb: nb });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
