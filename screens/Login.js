import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, ICONS } from "../constant";

const Login = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ top: "10%", fontSize: 24, fontWeight: "bold" }}>
        Login
      </Text>
      <Text style={{ top: "10%", fontSize: 14, fontWeight: "400" }}>
        Access account
      </Text>

      {/* Login with Facebook */}

      <View
        style={{
          width: "100%",
          height: "6%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          top: "30%",
        }}
      >
        <View style={styles.externalLogin}>
          <Image
            source={ICONS.facebook}
            style={{ width: "50%", height: "50%" }}
            resizeMode="center"
          />
        </View>
        <View style={styles.externalLogin}>
          <Image
            source={ICONS.search}
            style={{ width: "50%", height: "50%" }}
            resizeMode="center"
          />
        </View>
      </View>

      <Text style={{ top: "20%", color: "#6E80B0", fontSize: 14 }}>
        or Login with Email
      </Text>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputLabel}>Email</Text>

          <TextInput style={styles.input} />
        </View>

        <View>
          <Text style={styles.inputLabel}>Password</Text>

          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("Drawer")}
      >
        <LinearGradient
          colors={COLORS.gradient}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 17, color: "#fff" }}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.registerButton}>
        <Text style={{ color: "#6E80B0" }}>Don't have account ? </Text>
        <Text style={styles.register}>Register</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  externalLogin: {
    width: "40%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    paddingHorizontal: 30,
    width: "100%",
    top: "22%",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    height: 55,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputLabel: {
    marginVertical: 10,
  },

  signInButton: {
    top: "35%",
    width: "85%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  registerButton: {
    top: "70%",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  register: {
    fontWeight: "bold",
    color: "#6D61F2",
  },
});
