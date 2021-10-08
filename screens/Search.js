import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";

import { ListItem } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";

function Search({ navigation, route, listBalls }) {
  const { brand } = route.params;

  const [balls, setBalls] = useState([]);

  useEffect(() => {
    listBalls.map((marque, i) => {
      if (marque.brand == brand) {
        setBalls([...marque.list]);
      }
    });
  }, []);

  var galleryPhoto = balls.map((ball, i) => {
    return (
      <View  style={{ height: hp("11%") }}>
        <ListItem
          key={ball.name}
          leftAvatar={{ source: { uri: ball.img } }}
          title={ball.name}
          rightSubtitle={ball.price + "€"}
          topDivider
          bottomDivider
          chevron
          containerStyle={{ backgroundColor: "white", height: "100%" }}
          onPress={() =>
            navigation.navigate("Details", {
              name: ball.name,
              price: ball.price,
              img: ball.img,
              imgCore: ball.imgCore,
              desc: ball.desc,
              core: ball.core,
              coverstock: ball.coverstock,
              flare: ball.flare,
              performance: ball.performance,
              condition: ball.condition,
              color: ball.color,
              differential: ball.differential,
              finish: ball.finish,
              masse_bias: ball.masse_bias,
              rg: ball.rg,
              reaction: ball.reaction,
              date: ball.date,
              brand: brand,
            })
          }
        ></ListItem>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={{ width: wp("100%"), height: hp("30%") }}>
        <ImageBackground
          source={require("../assets/fireball.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        ></ImageBackground>
      </View>

      {galleryPhoto}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
});
var mapStateToProps = (state) => {
  return { listBalls: state.listBalls };
};
export default connect(mapStateToProps, null)(Search);
