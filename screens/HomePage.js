import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#786DF5", "#A79EFF"]} style={styles.top}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/Motor.png")}
            style={{ width: "90%" }}
            resizeMode="contain"
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
  },
  top: {
    height: "76%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative",
    overflow: "hidden",
  },

  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
