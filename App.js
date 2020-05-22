console.disableYellowBox = true;
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { FontAwesome } from "@expo/vector-icons";
import Basket from "./screens/Basket";
import Confirm from "./screens/Confirm";
import Connexion from "./screens/Connexion";
import CreateUser from "./screens/CreateUser";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Profil from "./screens/Profil";
import UpdateUser from "./screens/UpdateUser";
import Recapitulatif from "./screens/Recapitulatif";
import Search from "./screens/Search";
import Paiement from "./screens/Stripe";
import Deconnexion from "./screens/Deconnexion";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent from "./screens/DrawerContent";

import {
  NavigationContainer,
  DrawerActions,
  CommonActions,
  useNavigation,
} from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import panier from "./reducers/panier";
import token from "./reducers/token";
import userProfil from "./reducers/userProfil";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
const store = createStore(combineReducers({ panier, token, userProfil }));

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ConnexionStack = createStackNavigator();
const BasketStack = createStackNavigator();
const ProfilStack = createStackNavigator();
const DeconnexionStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableHighlight
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <FontAwesome name="bars" size={20} style={{ color: "black" }} />
            </TouchableHighlight>
          ),
          headerLeftContainerStyle: { marginLeft: 20 },
        }}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Basket"
        component={Basket}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />

      <HomeStack.Screen
        name="Recapitulatif"
        component={Recapitulatif}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Paiement"
        component={Paiement}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />
      {/* <HomeStack.Screen name="Basket" component={Basket} /> */}
    </HomeStack.Navigator>
  );
}

function ConnexionStackScreen({ navigation }) {
  return (
    <ConnexionStack.Navigator initialRouteName="Connexion">
      <ConnexionStack.Screen
        name="Connexion"
        component={Connexion}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableHighlight onPress={() => navigation.goBack()}>
              <FontAwesome
                name="chevron-left"
                size={20}
                style={{ color: "black" }}
              />
            </TouchableHighlight>
          ),
          headerLeftContainerStyle: { marginLeft: 20 },
        }}
      />
      <ConnexionStack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
      <ConnexionStack.Screen
        name="Profil"
        component={Profil}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />
      <ConnexionStack.Screen
        name="UpdateUser"
        component={UpdateUser}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />
    </ConnexionStack.Navigator>
  );
}
function BasketStackScreen({ navigation }) {
  return (
    <BasketStack.Navigator>
      <BasketStack.Screen
        name="Panier"
        component={Basket}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerLeft: null,
        }}
      />
    </BasketStack.Navigator>
  );
}
function ProfilStackScreen({ navigation }) {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen
        name="Profil"
        component={Profil}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </ProfilStack.Navigator>
  );
}

function deconnexionStackScreen({ navigation }) {
  return (
    <DeconnexionStack.Navigator>
      <DeconnexionStack.Screen
        name="deconnexion"
        component={Deconnexion}
        options={{
          headerStyle: styles.headerStyle,
          title: "ZARA BOWL",
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </DeconnexionStack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Panier" component={BasketStackScreen} />
      <Drawer.Screen name="Connexion" component={ConnexionStackScreen} />
      <Drawer.Screen name="Profil" component={ProfilStackScreen} />
      <Drawer.Screen name="Deconnexion" component={deconnexionStackScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FF9F1C",
  },
});
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
