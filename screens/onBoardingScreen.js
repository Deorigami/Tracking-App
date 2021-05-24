import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, ICONS } from "../constant";

const onBoardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          fontStyle: "italic",
          top: "15%",
        }}
      >
        TraqIt
      </Text>

      <View style={{ width: "100%", height: 200, top: "21%" }}>
        <Image
          source={ICONS.Onboard}
          style={{
            height: "100%",
            width: "100%",
          }}
          resizeMode="contain"
        />
      </View>

      <Text style={{ top: "35%", fontSize: 24, fontWeight: "700" }}>
        Welcome to TraqIt
      </Text>
      <Text style={{ top: "36%", width: 250, textAlign: "center" }}>
        You can send items, track and be courier in this application.
      </Text>

      <TouchableOpacity
        style={{ top: "43%" }}
        onPress={() => navigation.navigate("Login")}
      >
        <LinearGradient
          colors={COLORS.gradient}
          style={{
            width: 280,
            height: 50,
            backgroundColor: "#A79EFF",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 17, color: "#fff" }}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default onBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Poppins",
    alignItems: "center",
    position: "relative",
  },
});
