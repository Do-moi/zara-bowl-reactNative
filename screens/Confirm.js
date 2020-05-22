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
import { ScrollView } from "react-native-gesture-handler";

function Confirm({ navigation, route, ball, deleteBasketClick }) {
  const { nom } = route.params;
  const { prenom } = route.params;
  const { telephone } = route.params;
  const { adresse } = route.params;
  const { postal } = route.params;
  const { ville } = route.params;
  var totalCmd = 0;
  var totalQte = 0;

  var ballTab = ball.map((ball, i) => {
    totalCmd = parseInt(ball.theQuantite, 10) * parseInt(ball.price) + totalCmd;
    totalQte = parseInt(ball.theQuantite, 10) + totalQte;

    return (
      <View style={styles.divstyle}>
        <View
          style={{
            flex: 4,
            backgroundColor: "white",
            marginLeft: 0,
            borderRadius: 5,
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
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ marginTop: 20, marginBottom: 10 }}>
          Confirmation de paiement
        </Text>

        <View style={styles.divstyleOrange}>
          <View
            style={{
              flex: 4,
              backgroundColor: "orange",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingLeft: 5 }}>produit</Text>
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

        <View style={styles.divstyle}>
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
            <Text style={{ textAlign: "center" }}>{totalQte}</Text>
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
        <View
          style={{ flex: 1, marginTop: 40, marginLeft: 10, marginRight: 10 }}
        >
          <Text>
            Merci pour votre commande, elle a bien été validée et vous sera
            livrée à l'adresse suivante:
          </Text>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            {nom} {prenom}
          </Text>
          <Text style={{ textAlign: "center" }}>tel: {telephone}</Text>
          <Text style={{ textAlign: "center" }}>{adresse}</Text>
          <Text style={{ textAlign: "center" }}>
            {postal} {ville}
          </Text>
          <Text style={{ marginTop: 10 }}>
            Un e-mail de confirmation vous sera envoyé après l'expédition de
            votre colis.
          </Text>
        </View>
        <View style={{ flex: 1, marginTop: 20, marginBottom: 40 }}>
          <Button
            title="Retour à l'accueil"
            containerStyle={{ alignItems: "center", width: "85%" }}
            buttonStyle={{ backgroundColor: "orange" }}
            titleStyle={{ color: "black", flex: 1 }}
            onPress={() => {
              navigation.navigate("Home");
              deleteBasketClick();
            }}
          ></Button>
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
  divstyleOrange: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "solid",
    margin: 0,
    borderRadius: 5,
    width: "95%",
    backgroundColor: "orange",
  },
  divstyle: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "solid",
    margin: 0,
    borderRadius: 5,
    width: "95%",
    backgroundColor: "white",
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
