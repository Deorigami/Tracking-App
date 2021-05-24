import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constant";

const CustomDrawer = ({ navigation, state }) => {
  console.log(state.routeNames);

  const filterIcon = (data) => {
    if (data == "Tracking") return "radar";
    if (data == "Analytic") return "chart-bar";
    if (data == "Shipping") return "truck-fast";
    if (data == "Courier") return "account-box-outline";
    if (data == "Setting") return "set-left";
    if (data == "HelpSupport") return "comment-question";
  };

  const TextFilter = (data) => {
    if (data == "HelpSupport") return "Help & Support";
    else return data;
  };

  return (
    <LinearGradient colors={COLORS.gradient} style={s.DrawerContainer}>
      <View style={s.drawerHeader}>
        <View style={s.headerContent}>
          <Text
            style={{
              marginBottom: "20%",
              fontSize: 30,
              letterSpacing: 1.2,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            TraqIt
          </Text>
          <TextInput
            style={{
              width: 200,
              backgroundColor: "rgba(255,255,255,0.5)",
              height: 40,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <View style={s.listHeader}>
        {state.routeNames.map((data, index) => {
          if (data == "HomePage") return null;

          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(data);
              }}
            >
              <View style={s.drawerList}>
                <View>
                  <MaterialCommunityIcons
                    name={filterIcon(data)}
                    color="#fff"
                    size={24}
                    style={{
                      width: 40,
                    }}
                  />
                </View>
                <Text style={s.drawerText}>{TextFilter(data)}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <DrawerContentScrollView />
      </View>
      <MaterialCommunityIcons name="set-left" />
    </LinearGradient>
  );
};

export default CustomDrawer;

const s = StyleSheet.create({
  DrawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    paddingHorizontal: 20,
    flex: 1,
  },
  headerContent: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
  },
  listHeader: {
    flex: 3,
    paddingHorizontal: 20,
    top: 50,
  },
  drawerList: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  drawerText: {
    color: "#fff",
    fontSize: 16,
  },
});
