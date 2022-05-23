import React, { useState } from "react";
import HttpLocal from "../Keyhttp/KeyLocal";
import HttpHeroku from "../Keyhttp/KeyHeroku";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
var stripe = require("stripe-client")(
  "**************************************"
);

function Stripe({ navigation, route, ball, tokenRdx }) {
  const { nom } = route.params;
  const { prenom } = route.params;
  const { telephone } = route.params;
  const { adresse } = route.params;
  const { postal } = route.params;
  const { ville } = route.params;

  const [cardData, setCardData] = useState({ valid: false });
  const [erreur, setErreur] = useState("");
  var totalCmd = 0;
  var totalQte = 0;

  var ballTab = ball.map((ball, i) => {
    totalCmd = parseInt(ball.price, 10) * parseInt(ball.theQuantite) + totalCmd;
    totalQte = parseInt(ball.theQuantite, 10) + totalQte;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            height: 40,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 5,
            width: "95%",
          }}
        >
          <View
            style={{
              flex: 4,
              backgroundColor: "white",
              marginLeft: 5,
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingLeft: 10 }}>
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
            <Text>{ball.thePoids}</Text>
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
              marginRight: 5,
            }}
          >
            <Text style={{ textAlign: "center" }}>{ball.price}€</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  });

  var stripeClick = async () => {
    var error = [];
    if (cardData.valid == false) {
      error.push("carte invalide");
    }
    if (error.length == 0) {
      var expiry = cardData.values.expiry;
      var moisExp = expiry.split("/");

      var information = {
        card: {
          number: cardData.values.number,
          exp_month: moisExp[0],
          exp_year: moisExp[1],

          cvc: cardData.values.cvc,
          name: cardData.values.name,
        },
      };

      var carte = await stripe.createToken(information);
      var token = carte.id;

      var commandeId = [
        tokenRdx,
        {
          nom: nom,
          prenom: prenom,
          tel: telephone,
          adresse: adresse,
          postal: postal,
          ville: ville,
        },
        { ball: ball },
      ];

      var response = await fetch(`${HttpHeroku}/commande`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, commandeId }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success === true) {
            navigation.navigate("Confirm", {
              nom: nom,
              prenom: prenom,
              telephone: telephone,
              adresse: adresse,
              postal: postal,
              ville: ville,
            });
          } else {
            setErreur("erreur de numéro de carte");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setErreur(error[0]);
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ marginTop: 50, marginBottom: 30, fontSize: 18 }}>
          PAIEMENT
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 40,
            borderRadius: 5,
            backgroundColor: "#ffa500",
            width: "95%",
          }}
        >
          <View
            style={{
              flex: 4,
              backgroundColor: "#ffa500",
              marginLeft: 10,
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ paddingLeft: 10 }}>produit</Text>
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
              marginRight: 10,
            }}
          >
            <Text style={{ textAlign: "center" }}>prix</Text>
          </View>
        </View>
        {ballTab}

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            height: 40,
            borderRadius: 5,
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 1,
            width: "95%",
          }}
        >
          <View
            style={{
              flex: 4,
              backgroundColor: "white",
              marginLeft: 5,
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingLeft: 10 }}>total</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Text></Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>{totalQte}</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              marginRight: 5,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>{totalCmd}€</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 30 }}>
          <CreditCardInput
            placeholderColor={"silver"}
            placeholders={{
              number: "1234 5678 1234 5678",
              expiry: "MM/YY",
              cvc: "CVC",
              name: "NOM",
            }}
            labels={{
              number: "N° DE CARTE",
              expiry: "EXP",
              cvc: "CVC",
              name: "NOM",
              brand: "VISA",
            }}
            requiresName
            onChange={(e) => setCardData(e)}
          />
        </View>
        <Text style={{ color: "red", fontSize: 20 }}>{erreur}</Text>
        <Button
          title="Paiement"
          containerStyle={{
            alignItems: "center",
            marginTop: 20,
            width: "85%",
          }}
          buttonStyle={{ backgroundColor: "#ffa500" }}
          titleStyle={{ flex: 1, color: "black" }}
          onPress={() => stripeClick()}
        ></Button>
        <Button
          title="annuler le paiement"
          containerStyle={{
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
            width: "85%",
          }}
          buttonStyle={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#ffa500",
          }}
          titleStyle={{ flex: 1, color: "#ffa500" }}
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
    justifyContent: "center",
  },
});
function mapStateToProps(state) {
  return { ball: state.panier, tokenRdx: state.token };
}

export default connect(mapStateToProps, null)(Stripe);
