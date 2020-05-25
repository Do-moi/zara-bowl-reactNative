import React from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function LogoTitle() {
  return (
    <Image
      style={{
        width: 100,
        height: 100,
        marginTop: 50,
        resizeMode: "contain",
      }}
      source={require("../assets/LogozaraBowl.png")}
    />
  );
}
