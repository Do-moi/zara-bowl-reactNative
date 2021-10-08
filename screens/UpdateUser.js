import React, { useState, useEffect } from "react";
import HttpLocal from "../Keyhttp/KeyLocal";
import HttpHeroku from "../Keyhttp/KeyHeroku";
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

function UpdateUser({ navigation, saveUserProfil, userProfil, token }) {
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
    var listError = [];
    // ==================================test nom======================================================
    var testNomCaractere = false;
    var testNomLettre = false;
    var nomNB = false;
    // ==================================test prenom=======================================================
    var testPrenomCaractere = false;
    var testPrenomLettre = false;
    var testPrenomNb = false;
    // =====================================test email===================================================
    var testEmail = false;
    // ===================================test old password===============================================
    var passwordNB = false;
    var upperCase = false;
    var lowerCase = false;
    var caracteres = false;
    // =====================================test new password============================================
    var newPasswordUpperCase = false;
    var newPasswordLowerCase = false;
    var newPasswordNB = false;
    var newPasswordCaracteres = false;
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
      email == "" ||
      password == "" ||
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
    } else if (
      testNomCaractere == true ||
      nomNB == true ||
      testNomLettre == false
    ) {
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
    } else if (
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
    } else if (telCt == true) {
      listError.push("le numéro de téléphone doit contenir que des chiffres");
    }
    // ===========================================condition email==========================================================

    var regexEmail = /@/;
    var findRegexEmail = regexEmail.test(email);

    if (findRegexEmail == true) {
      testEmail = true;
    }
    if (testEmail == false) {
      listError.push("format email incorrect");
    }
    // ======================================================condition password========================================

    if (password.length < 8) {
      listError.push("mot de passe minimum 8 caractères");
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
    //  ==============================================condition nouveau password===========================
    if (newPassword.length < 8) {
      listError.push("nouveau mot de passe minimum 8 caractères");
    }
    var regexUpperCase = /[A-Z]/;
    var findUpperCase = regexUpperCase.test(newPassword);

    if (findUpperCase == true) {
      newPasswordUpperCase = true;
    }
    var regexLowerCase = /[a-z]/;
    var findLowerCase = regexLowerCase.test(newPassword);

    if (findLowerCase == true) {
      newPasswordLowerCase = true;
    }

    var regex = /[0-9]/;
    var testNB = regex.test(newPassword);

    if (testNB == true) {
      newPasswordNB = true;
    }

    var regex1 = /[^A-Za-z0-9_]/;
    var testCaracteres = regex1.test(newPassword);

    if (testCaracteres == true) {
      newPasswordCaracteres = true;
    }

    if (newPasswordUpperCase == false) {
      listError.push("le nouveau mot de passe minimum 1 majuscule ");
    } else if (newPasswordNB == false) {
      listError.push("le nouveau mot de passe minimum 1 chiffre");
    } else if (newPasswordLowerCase == false) {
      listError.push("le nouveau mot de passe minimum 1 minuscule ");
    } else if (newPasswordCaracteres == false) {
      listError.push("le nouveau mot de passe minimun 1 caractère spécial");
    }
    // ========================================condition adresse=====================================

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
    // ========================================condition ville===========================================
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
    // ========================================
    console.log("===============listError", listError);
    if (listError) {
      setError(listError[0]);
    }
    if (listError.length == 0) {
      var reponse = await fetch(`${HttpHeroku}/updateUser`, {
        method: "PUT",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: `token=${token}&nom=${nom}&prenom=${prenom}&telephone=${telephone}&email=${email}&password=${password}&newPassword=${newPassword}&adresse=${adresse}&ville=${ville}&postal=${postal}`,
      });

      var reponseJson = await reponse.json();

      if (reponseJson.result == false) {
        setError(reponseJson.error[0]);
      }
      if (reponseJson.result == true) {
        saveUserProfil(reponseJson.findUser);

        setError("");
        navigation.navigate("Profil");
      }
    }
  };
  var erreur = (
    <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
      {error}
    </Text>
  );

  return (
    <KeyboardAvoidingView>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, marginTop: 20, textAlign: "center" }}>
            Modifier UN COMPTE
          </Text>
          {erreur}
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="NOM"
            style={styles.inputStyle}
            onChangeText={(e) => setNom(e)}
            value={nom}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="PRENOM"
            style={styles.inputStyle}
            onChangeText={(e) => setPrenom(e)}
            value={prenom}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="TELEPHONE"
            style={styles.inputStyle}
            onChangeText={(e) => setTelephone(e)}
            value={telephone}
          />

          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="EMAIL"
            style={styles.inputStyle}
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="ANCIEN MOT DE PASSE"
            style={styles.inputStyle}
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="NOUVEAU MOT DE PASSE"
            style={styles.inputStyle}
            onChangeText={(e) => setNewPassword(e)}
            value={newPassword}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="ADRESSE"
            style={styles.inputStyle}
            onChangeText={(e) => setAdresse(e)}
            value={adresse}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="gray"
            placeholder="CODE POSTAL"
            style={styles.inputStyle}
            onChangeText={(e) => setPostal(e)}
            value={postal}
          />
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
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
              buttonStyle={{ backgroundColor: "#ffa500" }}
              titleStyle={{ color: "black", flex: 1 }}
              onPress={() => handleSubmitUpdate()}
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
