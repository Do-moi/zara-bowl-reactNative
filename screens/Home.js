import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import { connect } from "react-redux";
import HttpLocal from "../Keyhttp/KeyLocal";
import HttpHeroku from "../Keyhttp/KeyHeroku";


function Home({ navigation, saveBallRedux }) {
  
  useEffect(() => {
    const findApi = async () => {
      var rep = await fetch(`${HttpHeroku}/searchBall`);
      var jsonRep = await rep.json();

      saveBallRedux(jsonRep.response);
    };
    findApi();
  }, []);

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
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
            source={require("../assets/storm.png")}
          />
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
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/brunswick.png")}
          />
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
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/dv8.png")}
          />
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
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Radical" })}
          style={{ flex: 2, width: "100%", height: "100%" }}
        >
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={require("../assets/radical.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Hammer" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/hammer.png")}
          />
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
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/rotogrip.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Seismic" })}
          style={{ flex: 2, width: "100%", height: "100%" }}
        >
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/seismic.png")}
          />
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
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/columbia.png")}
          />
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
          <Image
            style={{
              flex: 2,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/track.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "900 Global" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/global.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { brand: "Motiv" })}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            source={require("../assets/motiv.png")}
          />
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
var mapToDispatchToprops = (dispatch) => {
  return {
    saveBallRedux: function (listBalls) {
      dispatch({ type: "saveBallRedux", listBalls: listBalls });
    },
  };
};
export default connect(null, mapToDispatchToprops)(Home);
