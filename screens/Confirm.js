import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  Overlay,
} from "react-native-elements";
import { connect } from "react-redux";

function Confirm({ navigation, route, ball, deleteBasketClick }) {
  const { nom } = route.params;
  const { prenom } = route.params;
  const { adresse } = route.params;
  const { postal } = route.params;
  const { ville } = route.params;
  var totalCmd = 0;
  var totalQte = 0;

  var ballTab = ball.map((ball, i) => {
    totalCmd = parseInt(ball.theQuantite, 10) * parseInt(ball.price) + totalCmd;
    totalQte = parseInt(ball.theQuantite, 10) + totalQte;

    return (
      <View
        style={{
          flexDirection: "row",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
          height: 40,
          backgroundColor: "#FFBC4F",
        }}
      >
        <View
          style={{
            flex: 4,
            backgroundColor: "#FFBC4F",
            marginLeft: 10,
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
            backgroundColor: "#FFBC4F",
            justifyContent: "center",
          }}
        >
          <Text>{ball.thePoids}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#FFBC4F",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{ball.theQuantite}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#FFBC4F",
            justifyContent: "center",
            marginRight: 10,
            borderStyle: "solid",
            borderColor: "black",
          }}
        >
          <Text style={{ textAlign: "center" }}>{ball.price}€</Text>
        </View>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, marginBottom: 10 }}>
        Confirmation de paiement
      </Text>

      <View
        style={{
          flexDirection: "row",
          height: 40,
          margin: 10,
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "orange",
        }}
      >
        <View
          style={{
            flex: 4,
            backgroundColor: "orange",
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ paddingLeft: 10 }}>produit</Text>
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
            alignItems: "center",
          }}
        >
          <Text>qté</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "orange",
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
          margin: 10,
          height: 40,
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#FEC062",
        }}
      >
        <View
          style={{
            flex: 4,
            backgroundColor: "#FEC062",
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ paddingLeft: 10 }}>total</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#FEC062",
            justifyContent: "center",
          }}
        >
          <Text></Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#FEC062",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{totalQte}</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#FEC062",
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>{totalCmd}€</Text>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 40, marginLeft: 10, marginRight: 10 }}>
        <Text>
          Votre commande à bien été validé , elle vous sera livré à l'adresse
          suivant:
        </Text>
        <Text>{nom}</Text>
        <Text>{prenom}</Text>
        <Text>{adresse}</Text>
        <Text>{postal}</Text>
        <Text>{ville}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Retour à l'accueil"
          containerStyle={{ alignItems: "center" }}
          buttonStyle={{ backgroundColor: "orange" }}
          titleStyle={{ color: "black" }}
          onPress={() => {
            navigation.navigate("Home");
            deleteBasketClick();
          }}
        ></Button>
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
  return { ball: state.panier };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteBasketClick: function () {
      dispatch({ type: "deconnexion" });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
