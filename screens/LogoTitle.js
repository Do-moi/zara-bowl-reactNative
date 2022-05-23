import React from "react";
import { Image } from "react-native";

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
