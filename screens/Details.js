import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button, Overlay } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dropdown } from 'react-native-material-dropdown-v2'
import { connect } from "react-redux";

function Details({ navigation, route, saveBasketClick }) {
  const { core } = route.params;
  const { coverstock } = route.params;
  const { desc } = route.params;
  const { img } = route.params;
  const { imgCore } = route.params;
  const { flare } = route.params;
  const { name } = route.params;
  const { performance } = route.params;
  const { condition } = route.params;
  const { color } = route.params;
  const { differential } = route.params;
  const { finish } = route.params;
  const { masse_bias } = route.params;
  const { rg } = route.params;
  const { reaction } = route.params;
  const { date } = route.params;
  const { price } = route.params;
  const { brand } = route.params;

  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const [thePoids, setThePoids] = useState("");
  const [theQuantite, setTheQuantite] = useState("");

  const [error, setError] = useState("");

  const poids = [
    { value: "16 lbs" },
    { value: "15 lbs" },
    { value: "14 lbs" },
    { value: "13 lbs" },
    { value: "12 lbs" },
  ];

  const quantite = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];
  useEffect(() => {
    setError("");
  }, [thePoids]);

  function addBasketClick() {
    if (thePoids == "" || theQuantite == "") {
      setError("veuillez sélectionner le poids et la quantité");
      return;
    } else {
      saveBasketClick({ brand, name, img, price, thePoids, theQuantite });
      navigation.navigate("Basket");
      setError(null);
    }
  }

  return (
    <View style={styles.container}>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <ScrollView>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Description
          </Text>
          <Text style={{ marginTop: 20 }}>{desc}</Text>
        </ScrollView>
      </Overlay>

      <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <ScrollView>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            caractéristique
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            Type de noyau: <Text style={{ color: "black" }}>{core}</Text>
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Type de surface: {coverstock}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Potentiel de flare: {flare}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Performance: {performance}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Conditions d'huiles recommandées: {condition}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Couleur: {color}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Différentiel: {differential}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Finition en usine: {finish}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Différentiel de bias de masse: {masse_bias}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Rayon de giration: {rg}{" "}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Type de réaction: {reaction}
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            Date de sortie: {date}{" "}
          </Text>
        </ScrollView>
      </Overlay>

      <Text
        style={{
          fontSize: 18,
          marginTop: hp("10%"),
          color: "#2484f2",
        }}
      >
        {brand} {name}
      </Text>

      <View
        style={{
          flex: 1,
          height: 200,
          width: "100%",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <View
          style={{ flex: 1, width: "100%", height: 100, alignItems: "center" }}
        >
          <Image
            style={{ width: 150, height: 150, marginLeft: 10 }}
            resizeMode={"cover"}
            source={{ uri: img }}
          />
          <Button
            title="Description"
            containerStyle={{ alignItems: "center" }}
            buttonStyle={{ backgroundColor: "white" }}
            onPress={() => setIsVisible(true)}
            titleStyle={{ color: "black" }}
          ></Button>
          <Dropdown
            label="poids"
            data={poids}
            // pickerStyle={{  borderWidth: 1 }}
            dropdownOffset={{ top: 0, left: 10 }}
            textColor="black"
            baseColor="black"
            containerStyle={styles.dropdown}
            onChangeText={(value) => {
              setThePoids(value);
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={{ width: 150, height: 150, marginRight: 10 }}
            resizeMode={"cover"}
            source={{ uri: imgCore }}
          />
          <Button
            title="Caractéristique"
            containerStyle={{ alignItems: "center" }}
            buttonStyle={{ backgroundColor: "white" }}
            onPress={() => setVisible(true)}
            titleStyle={{ color: "black" }}
          ></Button>
          <Dropdown
            label="quantité"
            data={quantite}
            dropdownOffset={ {top: 0, left: 0 }}
            
            textColor="black"
            baseColor="black"
            containerStyle={styles.dropdown}
            onChangeText={(value) => {
              setTheQuantite(value);
            }}
          />
        </View>
      </View>

      <Text
        style={{
          color: "red",
          fontSize: 18,
          marginTop: 10,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        {error}
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        <Button
          title="ajouter panier"
          containerStyle={{
            alignItems: "center",
            width: "85%",
            marginBottom: 10,
          }}
          buttonStyle={{ backgroundColor: "#ffa500" }}
          onPress={() => addBasketClick()}
          titleStyle={{ color: "black", flex: 1 }}
        ></Button>

        <Button
          title="retour accueil"
          containerStyle={{
            alignItems: "center",
            borderColor: "#ffa500",
            borderWidth: 1,
            width: "85%",
            borderRadius: 5,
            marginBottom: 30,
          }}
          buttonStyle={{ backgroundColor: "white" }}
          onPress={() => navigation.navigate("Home")}
          titleStyle={{ color: "#ffa500", flex: 1 }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
  dropdown: {
    width: "60%",
    height: 50,
    backgroundColor: "white",
    opacity: 0.8,
    marginLeft: 0,
    padding: 0,
    marginTop: 0,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "black",
  },
  sizeImg: {
    height: hp("70%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
  },
});
function mapDispatchToProps(dispatch) {
  return {
    saveBasketClick: function (ball) {
      dispatch({ type: "saveBasket", ball: ball });
    },
  };
}

export default connect(null, mapDispatchToProps)(Details);
