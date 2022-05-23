import React, { useState } from "react";
import { View, ImageBackground } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer, Text } from "react-native-paper";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";

function DrawerContent(props) {
  const [isVisible, setIsVisible] = useState(false);

  var prenom = (
    <Text style={{ color: "white", fontSize: 22 }}>
      Bonjour {props.userProfil.prenom}
    </Text>
  );
  if (props.token == "") {
    var logoConnexion = (
      <DrawerItem
        icon={() => (
          <FontAwesome name="sign-in" size={20} style={{ color: "#ffa500" }} />
        )}
        label="Connexion"
        labelStyle={{ marginLeft: 2 }}
        onPress={() => {
          props.navigation.navigate("Connexion");
        }}
      />
    );
  }
  if (props.token) {
    var loguer = (
      <View>
        <DrawerItem
          icon={() => (
            <FontAwesome
              name="shopping-basket"
              size={15}
              style={{ color: "#ffa500" }}
            />
          )}
          label="Panier"
          labelStyle={{ marginLeft: 2 }}
          onPress={() => {
            props.navigation.navigate("Panier");
          }}
        />
        <DrawerItem
          icon={() => (
            <FontAwesome name="user" size={22} style={{ color: "orange" }} />
          )}
          label="Profil"
          labelStyle={{ marginLeft: 3 }}
          onPress={() => {
            props.navigation.navigate("Profil");
          }}
        />

        <DrawerItem
          icon={() => (
            <FontAwesome
              name="sign-out"
              size={20}
              style={{ color: "#ffa500" }}
            />
          )}
          label="Déconnexion"
          labelStyle={{ marginLeft: 0 }}
          onPress={() => {
           
                  props.navigation.reset({
                    index: 1,
                    routes: [
                      { name: "Profil" },
                      
                    ],
                  })
                
            props.deconnexionClick();
          }}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}
          >
            CONTACT
          </Text>
          <Text style={{ marginTop: 30 }}>ZARA BOWL</Text>
          <Text>5 rue de Paris</Text>
          <Text>75010</Text>
          <Text>PARIS</Text>
          <Text>tel: 0645454545</Text>
          <Text>mail: Zarabowl@gmail.fr</Text>
        </View>
      </Overlay>
      <ImageBackground
        source={require("../assets/homePage.jpeg")}
        style={{
          width: "100%",
          height: 200,
          marginTop: 1,
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "cover",
        }}
      >
        {prenom}
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={() => (
              <FontAwesome name="home" size={20} style={{ color: "#ffa500" }} />
            )}
            label="Home"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          {logoConnexion}

          <DrawerItem
            icon={() => (
              <FontAwesome
                name="envelope"
                size={16}
                style={{ color: "#ffa500" }}
              />
            )}
            label="Contact"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              setIsVisible(!isVisible);
            }}
          />
          {loguer}
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}
function mapToStateToProps(state) {
  return { userProfil: state.userProfil, token: state.token };
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
export default connect(mapToStateToProps, mapDispatchToProps)(DrawerContent);
