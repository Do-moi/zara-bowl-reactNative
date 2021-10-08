import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import { Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Basket({ navigation, ball, deleteClick, token }) {
  const [error, setError] = useState("");

  useEffect(() => {
    setError(null);
  }, [ball]);

  var ballChoice = ball.map((ball, i) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 5,
          height: 40,
          borderWidth: 1,
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: 5,
          width: "95%",
        }}
      >
        <View
          style={{
            flex: 3,
            backgroundColor: "white",
            marginLeft: 5,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ marginLeft: 1 }}>
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
            borderRadius: 10,
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
      navigation.navigate("Recapitulatif");
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={{ width: "100%", height: hp("30%") }}>
          <ImageBackground
            source={require("../assets/fireball.jpg")}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          ></ImageBackground>
        </View>
        <Text style={{ fontSize: 20, color: "black", marginTop: 10 }}>
          PANIER
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
            height: 40,
            borderWidth: 1,
            borderColor: "#ffa500",
            borderStyle: "solid",
            margin: 0,
            borderRadius: 5,
            width: "95%",
            backgroundColor: "#ffa500",
          }}
        >
          <View
            style={{
              flex: 3,
              backgroundColor: "#ffa500",
              marginLeft: 0,
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ marginLeft: 10 }}>produit</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#ffa500",
              justifyContent: "center",
            }}
          >
            <Text>poids</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#ffa500",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>qté</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#ffa500",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>prix</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#ffa500",
              marginRight: 0,
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center" }}>supp</Text>
          </View>
        </View>

        {ballChoice}

        <Text
          style={{
            color: "red",
            fontSize: 30,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {error}
        </Text>

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
              title="Continuer achat"
              titleStyle={{ color: "#ffa500" }}
              containerStyle={{
                alignItems: "center",
                borderWidth: 1,
                borderColor: "orange",
                borderRadius: 5,
                width: "80%",
              }}
              buttonStyle={{ backgroundColor: "white" }}
              onPress={() => navigation.navigate("Home")}
            ></Button>
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Button
              title="Valider panier"
              titleStyle={{ color: "black" }}
              containerStyle={{
                borderWidth: 1,
                borderColor: "#ffa500",
                borderRadius: 5,
                width: "80%",
              }}
              buttonStyle={{ backgroundColor: "#ffa500" }}
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
