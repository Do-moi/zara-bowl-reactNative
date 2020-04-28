import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        source={require("../assets/homePage.jpeg")}
        style={{ width: "100%", height: 200, marginTop: 1 }}
      ></ImageBackground>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="home"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="account-arrow-right-outline"
                color={color}
                size={size}
              />
            )}
            label="connexion"
            onPress={() => {
              props.navigation.navigate("Connexion");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="basket-fill" color={color} size={size} />
            )}
            label="panier"
            onPress={() => {
              props.navigation.navigate("Panier");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profil"
            onPress={() => {
              props.navigation.navigate("Profil");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="logout" color={color} size={size} />
            )}
            label="déconnexion"
            onPress={() => {
              props.navigation.navigate("Deconnexion");
            }}
          />
        </Drawer.Section>

        <View></View>
      </DrawerContentScrollView>
    </View>
  );
}
