import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";

function DrawerContent(props) {
  const [isVisible, setIsVisible] = useState(false);
  console.log("============props.userProfil", props.userProfil.prenom);
  var prenom = (
    <Text style={{ color: "white", fontSize: 30 }}>
      bonjour {props.userProfil.prenom}
    </Text>
  );
  if (props.token == "") {
    var logoConnexion = (
      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome name="sign-in" size={20} style={{ color: "orange" }} />
        )}
        label="connexion"
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
          icon={({ color, size }) => (
            <FontAwesome
              name="shopping-basket"
              size={15}
              style={{ color: "orange" }}
            />
          )}
          label="Panier"
          labelStyle={{ marginLeft: 2 }}
          onPress={() => {
            props.navigation.navigate("Panier");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome name="user" size={22} style={{ color: "orange" }} />
          )}
          label="Profil"
          labelStyle={{ marginLeft: 3 }}
          onPress={() => {
            props.navigation.navigate("Profil");
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome
              name="sign-out"
              size={20}
              style={{ color: "orange" }}
            />
          )}
          label="Déconnexion"
          labelStyle={{ marginLeft: 0 }}
          onPress={() => {
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
          <Text style={{ marginTop: 0 }}>5 rue de la ferme</Text>
          <Text style={{ marginTop: 0 }}>75010</Text>
          <Text style={{ marginTop: 0 }}>PARIS</Text>
          <Text style={{ marginTop: 0 }}>tel: 0645454545</Text>
          <Text style={{ marginTop: 0 }}>mail: Zarabowl@gmail.fr</Text>
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
            icon={({ color, size }) => (
              <FontAwesome name="home" size={20} style={{ color: "orange" }} />
            )}
            label="home"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          {logoConnexion}
          {/* <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome
                name="sign-in"
                size={20}
                style={{ color: "orange" }}
              />
            )}
            label="connexion"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              props.navigation.navigate("Connexion");
            }}
          /> */}
          <DrawerItem
            icon={() => (
              <FontAwesome
                name="envelope"
                size={16}
                style={{ color: "orange" }}
              />
            )}
            label="Contact"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              setIsVisible(!isVisible);
            }}
          />
          {loguer}
          {/* 
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome
                name="shopping-basket"
                size={15}
                style={{ color: "orange" }}
              />
            )}
            label="Panier"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              props.navigation.navigate("Panier");
            }}
          /> */}
          {/* <DrawerItem
            icon={({ color, size }) => (
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
                name="envelope"
                size={16}
                style={{ color: "orange" }}
              />
            )}
            label="Contact"
            labelStyle={{ marginLeft: 2 }}
            onPress={() => {
              setIsVisible(!isVisible);
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome
                name="sign-out"
                size={20}
                style={{ color: "orange" }}
              />
            )}
            label="Déconnexion"
            labelStyle={{ marginLeft: 0 }}
            onPress={() => {
              props.deconnexionClick();
            }}
          /> */}
        </Drawer.Section>

        <View></View>
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
