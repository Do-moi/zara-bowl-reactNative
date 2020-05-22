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
  KeyboardAvoidingView,
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Overlay,
} from "react-native-elements";
import { connect } from "react-redux";

function Recapitulatif({ navigation, ball }) {
  console.log("===========page recap", ball);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [postal, setPostal] = useState("");
  const [ville, setVille] = useState("");
  const [error, setError] = useState("");

  function shipping() {
    if (
      nom == "" ||
      prenom == "" ||
      adresse == "" ||
      telephone == "" ||
      postal == "" ||
      ville == ""
    ) {
      setError("veuillez remplir l'adresse de livraison");
    } else {
      navigation.navigate("Paiement", {
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        adresse: adresse,
        ville: ville,
        postal: postal,
      });
      setError("");
    }
  }
  var quantity = 0;
  var totalCmd = 0;

  var listBall = ball.map((ball, i) => {
    totalCmd =
      parseInt(ball.theQuantite, 10) * parseInt(ball.price, 10) + totalCmd;

    quantity = parseInt(ball.theQuantite, 10) + quantity;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 10,
          height: 40,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "black",
          width: "95%",
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
          <Text style={{ paddingLeft: 5 }}>
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
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {parseInt(ball.theQuantite, 10) * parseInt(ball.price, 10)}€
          </Text>
        </View>
      </View>
    );
  });

  console.log("========nom", error);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 18, marginTop: 20 }}>RECAPITULATIF</Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
              height: 40,
              borderColor: "black",
              borderRadius: 5,
              borderWidth: 1,
              width: "95%",
              backgroundColor: "orange",
            }}
          >
            <View
              style={{
                flex: 4,
                backgroundColor: "orange",
                borderRadius: 5,
                justifyContent: "center",
              }}
            >
              <Text style={{ paddingLeft: 10, marginLeft: 5 }}>produit</Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "orange",
                justifyContent: "center",
              }}
            >
              <Text>poids</Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "orange",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center" }}>qté</Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "orange",
                borderRadius: 5,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center" }}>prix</Text>
            </View>
          </View>

          {listBall}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 10,
              height: 40,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              width: "95%",
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
              <Text style={{ paddingLeft: 5 }}>total</Text>
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
              <Text style={{ textAlign: "center" }}>{quantity}</Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                marginRight: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center" }}>{totalCmd}€</Text>
            </View>
          </View>

          <Text style={{ fontSize: 18, marginTop: 20 }}>
            adresse de livraison
          </Text>
          <Text style={{ fontSize: 18, color: "red" }}>{error}</Text>
          <TextInput
            keyboardType="email-address" // a bit of extra love for your users
            autoCapitalize="none" // React Native default is to capitalise
            placeholderTextColor="gray"
            placeholder="Nom"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
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
            onChangeText={(e) => setNom(e)}
          />
          <TextInput
            keyboardType="email-address" // a bit of extra love for your users
            autoCapitalize="none" // React Native default is to capitalise
            placeholderTextColor="gray"
            placeholder="Prénom"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
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
            onChangeText={(e) => setPrenom(e)}
          />
          <TextInput
            keyboardType="email-address" // a bit of extra love for your users
            autoCapitalize="none" // React Native default is to capitalise
            placeholderTextColor="gray"
            placeholder="Téléphone"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
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
            onChangeText={(e) => setTelephone(e)}
          />
          <TextInput
            keyboardType="email-address" // a bit of extra love for your users
            autoCapitalize="none" // React Native default is to capitalise
            placeholderTextColor="gray"
            placeholder="Adresse"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
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
            onChangeText={(e) => setAdresse(e)}
          />
          <TextInput
            keyboardType="email-address" // a bit of extra love for your users
            autoCapitalize="none" // React Native default is to capitalise
            placeholderTextColor="gray"
            placeholder="Code postal"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
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
            onChangeText={(e) => setPostal(e)}
          />
          <TextInput
            keyboardType="email-address" // a bit of extra love for your users
            autoCapitalize="none" // React Native default is to capitalise
            placeholderTextColor="gray"
            placeholder="Ville"
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
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
            onChangeText={(e) => setVille(e)}
          />

          <Button
            title="Valider"
            containerStyle={{
              alignItems: "center",
              width: "85%",
              marginTop: 20,
              marginBottom: 20,
            }}
            buttonStyle={{ backgroundColor: "orange" }}
            titleStyle={{ flex: 1, color: "black" }}
            onPress={() => shipping()}
          ></Button>
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
    justifyContent: "center",
  },
});
function mapStateToProps(state) {
  return { ball: state.panier };
}

export default connect(mapStateToProps, null)(Recapitulatif);
