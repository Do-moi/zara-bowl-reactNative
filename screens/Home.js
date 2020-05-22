import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home({ navigation }) {
  console.log("================page home");

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: hp("30%") }}>
        <ImageBackground
          source={require("../assets/fireball.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        ></ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          height: hp("15%"),
          width: wp("100%"),
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Storm" })}
          style={{ flex: 2, width: "100%", height: "100%" }}
        >
          {/* <View style={{ flex: 2, width: 100, height: 100 }}> */}
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
            source={require("../assets/storm.png")}
          />
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Brunswick" })}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            marginRight: 10,
          }}
        >
          {/* <View style={{flex: 1,width: 100, height: 80,marginTop:10,marginRight:30}}> */}
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/brunswick.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "DV8" })}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",

            marginRight: 10,
            resizeMode: "contain",
          }}
        >
          {/* <View style={{flex: 1,width: 50, height: 80, marginTop:10}}> */}
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
            source={require("../assets/dv8.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          height: hp("15%"),
          width: wp("100%"),
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Ebonite" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          {/* <View
              style={{ flex: 1, width: 50, height: 80, alignItems: "center" }}
            > */}
          <Image
            style={{
              flex: 1,
              width: "90%",
              height: "100%",
              resizeMode: "contain",
              marginLeft: 10,
            }}
            source={require("../assets/ebonite.png")}
          />
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Radical" })}
          style={{ flex: 2, width: "100%", height: "100%" }}
        >
          {/* <View style={{flex: 2 , width:100, height: 100}}>   */}
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={require("../assets/radical.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Hammer" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          {/* <View style={{flex: 1,width: 50, height: 90, marginTop:10}}> */}
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/hammer.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          height: hp("15%"),
          width: wp("100%"),
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Roto Grip" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          {/* <View style={{flex: 1,width: 50, height: 80}}> */}
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/rotogrip.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Seismic" })}
          style={{ flex: 2, width: "100%", height: "100%" }}
        >
          {/* <View style={{flex: 1,width: 50, height: 80,marginLeft:20}}> */}
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/seismic.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Search", { brand: "COLUMBIA 300" })
          }
          style={{
            flex: 2,
            width: "100%",
            height: "100%",
          }}
        >
          {/* <View style={{flex: 2 , width:100, height: 80,marginLeft:30,marginBottom:10}}>   */}
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/columbia.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          height: hp("15%"),
          width: wp("100%"),
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Track" })}
          style={{ flex: 2, width: "100%", height: "100%" }}
        >
          {/* <View style={{ flex: 2, width: 100, height: 80 }}> */}
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/track.png")}
          />
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "900 Global" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          {/* <View style={{flex: 1,width: 50, height: 100}} > */}
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/global.png")}
          />
          {/* </View>  */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Motiv" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          {/* <View style={{ flex: 1, width: 50, height: 80 }}> */}
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/motiv.png")}
          />
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
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
