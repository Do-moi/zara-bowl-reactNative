import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

function Recapitulatif({ navigation, ball }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [postal, setPostal] = useState("");
  const [ville, setVille] = useState("");
  const [error, setError] = useState("");

  function shipping() {
    var listError = [];
    // ==================================test nom======================================================
    var testNomCaractere = false;
    var testNomLettre = false;
    var nomNB = false;
    // ==================================test prenom=======================================================
    var testPrenomCaractere = false;
    var testPrenomLettre = false;
    var testPrenomNb = false;
    // ===================================test telephone===============================================
    var telephoneLetter = false;
    var telCt = false;
    // ==================================test postal=======================================================
    var testPostalCaracters = false;
    var testPostalLetter = false;
    // ==================================test ville==========================================================
    var testVilleCaracters = false;
    var testVilleNB = false;
    // ===================================condition champs vides===========================================
    if (
      nom == "" ||
      prenom == "" ||
      adresse == "" ||
      telephone == "" ||
      postal == "" ||
      ville == ""
    ) {
      listError.push("veuillez remplir l'adresse de livraison");
    }
    // ============================condition nom====================================
    var regexNom = /[^A-Za-z0-9_]/;
    var testNom = regexNom.test(nom);

    if (testNom == true) {
      testNomCaractere = true;
    }
    var regexNom1 = /[0-9]/;
    var testNom1 = regexNom1.test(nom);

    if (testNom1 == true) {
      nomNB = true;
    }

    var regexNom2 = /[A-Za-z]/;
    var testNom2 = regexNom2.test(nom);
    if (testNom2 == true) {
      testNomLettre = true;
    }
    if (nom.length < 2) {
      listError.push("le nom doit comporter au moins 2 lettres");
    }

    if (testNomCaractere == true || nomNB == true || testNomLettre == false) {
      listError.push("le nom doit comporter que des lettres");
    }
    // ============================condition prenom==========================================

    var regexPrenom = /[^A-Za-z0-9_]/;
    var testPrenom = regexPrenom.test(prenom);

    if (testPrenom == true) {
      testPrenomCaractere = true;
    }
    var regexPrenom1 = /[0-9]/;
    var testPrenom1 = regexPrenom1.test(prenom);

    if (testPrenom1 == true) {
      testPrenomNb = true;
    }

    var regexPrenom2 = /[A-Za-z]/;
    var testPrenom2 = regexPrenom2.test(prenom);

    if (testPrenom2 == true) {
      testPrenomLettre = true;
    }
    if (prenom.length < 2) {
      listError.push("le prenom doit comporter au moins 2 lettres");
    }

    if (
      testPrenomCaractere == true ||
      testPrenomNb == true ||
      testPrenomLettre == false
    ) {
      listError.push("le prenom doit comporter que des lettres");
    }

    // ==============================================condition numero telephone==========================

    if (telephone.length != 10) {
      listError.push("le numéro de téléphone doit comporter 10 chiffres");
    }
    var regexLetter = /[A-Za-z]/;
    var testLetter = regexLetter.test(telephone);

    if (testLetter == true) {
      telephoneLetter = true;
    }

    var regexCt = /[^A-Za-z0-9_]/;
    var testCt = regexCt.test(telephone);

    if (testCt == true) {
      telCt = true;
    }

    if (telephoneLetter == true) {
      listError.push("le numéro de téléphone doit contenir que des chiffres");
    }
    if (telCt == true) {
      listError.push("le numéro de téléphone doit contenir que des chiffres");
    }
    // ========================================condition adresse===============================

    if (adresse.length < 8) {
      listError.push("l'adresse doit avoir au moins 8 caractères");
    }
    //===========================================condition code postal===============================

    if (postal.length != 5) {
      listError.push("code postal incorrect");
    }
    var regexPostalCt = /[^A-Za-z0-9_]/;
    var testPostalCt = regexPostalCt.test(postal);

    if (testPostalCt == true) {
      testPostalCaracters = true;
    }
    var regexPostalLetter = /[A-Za-z]/;
    var testPostalLT = regexPostalLetter.test(postal);

    if (testPostalLT == true) {
      testPostalLetter = true;
    }

    if (testPostalCaracters == true || testPostalLetter == true) {
      listError.push("le code postal doit contenir que des chiffres");
    }

    if (ville.length < 2) {
      listError.push("la ville doit contenir au moins 2 lettres");
    }
    var regexVilleCt = /[^A-Za-z0-9_]/;
    var testVilleCt = regexVilleCt.test(ville);

    if (testVilleCt == true) {
      testVilleCaracters = true;
    }
    var regexVilleNB = /[0-9]/;
    var testVilleNumber = regexVilleNB.test(ville);

    if (testVilleNumber == true) {
      testVilleNB = true;
    }
    if (testVilleCaracters == true || testVilleNB == true) {
      listError.push("la ville doit avoir que des lettres");
    }
    // ===========================vérification des erreurs===============================

    if (listError) {
      setError(listError[0]);
    }
    if (listError.length == 0) {
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
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {parseInt(ball.theQuantite, 10) * parseInt(ball.price, 10)}€
          </Text>
        </View>
      </View>
    );
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 18, marginTop: 60 }}>RECAPITULATIF</Text>

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
              backgroundColor: "#ffa500",
            }}
          >
            <View
              style={{
                flex: 4,
                backgroundColor: "#ffa500",
                borderRadius: 5,
                justifyContent: "center",
              }}
            >
              <Text style={{ paddingLeft: 10, marginLeft: 5 }}>produit</Text>
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
              }}
            >
              <Text style={{ textAlign: "center" }}>qté</Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: "#ffa500",
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
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ textAlign: "center" }}>{totalCmd}€</Text>
            </View>
          </View>

          <Text style={{ fontSize: 18, marginTop: 20 }}>
            adresse de livraison
          </Text>
          <Text style={{ fontSize: 18, color: "red", textAlign: "center" }}>
            {error}
          </Text>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Nom"
            style={styles.inputStyle}
            onChangeText={(e) => setNom(e)}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Prénom"
            style={styles.inputStyle}
            onChangeText={(e) => setPrenom(e)}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Téléphone"
            style={styles.inputStyle}
            onChangeText={(e) => setTelephone(e)}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Adresse"
            style={styles.inputStyle}
            onChangeText={(e) => setAdresse(e)}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Code postal"
            style={styles.inputStyle}
            onChangeText={(e) => setPostal(e)}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="Ville"
            style={styles.inputStyle}
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
            buttonStyle={{ backgroundColor: "#ffa500" }}
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
  inputStyle: {
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
  },
});
function mapStateToProps(state) {
  return { ball: state.panier };
}

export default connect(mapStateToProps, null)(Recapitulatif);
