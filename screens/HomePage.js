import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, ICONS } from "../constant";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([
    {
      serviceTitle: "Courier",
      serviceDes: "70k + Courier",
      serviceImage: require("../assets/images/Courier.png"),
    },
    {
      serviceTitle: "Shipping",
      serviceDes: "Save Delivery",
      serviceImage: require("../assets/images/Delivery.png"),
    },
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={COLORS.gradient} style={styles.top}>
        <View style={styles.imageContainer}>
          <Image
            source={ICONS.Motor}
            style={{ width: "90%", height: "100%", top: height / 12 }}
            resizeMode="contain"
          />
        </View>

        {/* Top Content */}

        <View style={styles.topContentContainer}>
          <View style={styles.contentHeader}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <View style={styles.headerIcon}>
                <MaterialCommunityIcons
                  name="menu-open"
                  size={40}
                  color="#fff"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.headerText}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>Traqit</Text>
            </View>
            <View style={styles.headerProfile}>
              <View style={styles.profile}></View>
            </View>
          </View>

          <View style={styles.topGreeting}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Hello Hanudin,</Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
              Track your Shipment
            </Text>
            <Text style={{ color: "#fff", fontSize: 15, marginTop: 8 }}>
              Please enter your tracking number
            </Text>
          </View>

          <View style={styles.input}>
            <TextInput
              style={{
                backgroundColor: "#fff",
                height: "100%",
                paddingHorizontal: 20,
                fontSize: 20,
                textAlign: "center",
              }}
              placeholder="Enter track number"
              placeholderTextColor="#E1DEFD"
            />
          </View>
        </View>
      </LinearGradient>

      <View style={styles.bottom}>
        <View style={styles.botcontent}>
          <View style={styles.serviceHeader}>
            <Text style={styles.serviceText}>My Service</Text>
            <View style={styles.icon}>
              <Text style={styles.viewText}>View all</Text>
              <View style={styles.viewIcon}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={15}
                  color="#FFF"
                />
              </View>
            </View>
          </View>

          <View style={styles.serviceContent}>
            {data.map((data, index) => {
              return (
                <View key={index} style={styles.serviceCard}>
                  <LinearGradient
                    style={styles.serviceImage}
                    colors={COLORS.gradient}
                  >
                    <Image
                      source={data.serviceImage}
                      resizeMode="center"
                      style={{
                        width: "100%",
                        height: "90%",
                        position: "absolute",
                        bottom: 0,
                      }}
                    />
                  </LinearGradient>
                  <Text style={styles.serviceTitle}>{data.serviceTitle}</Text>

                  <Text style={styles.serviceDesc}>{data.serviceDes}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 1.4,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative",
    overflow: "hidden",
  },

  imageContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },

  topContentContainer: {
    width: width,
    height: "100%",
    position: "absolute",
    paddingHorizontal: 20,
    zIndex: 2,
  },
  contentHeader: {
    width: "100%",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    top: "10%",
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "pink",
  },

  topGreeting: { top: "20%", alignItems: "center" },
  input: {
    width: "100%",
    top: "25%",
    height: "10%",
    opacity: 0.9,
    borderRadius: 15,
    overflow: "hidden",
  },

  //Bottom Container

  bottom: {
    flex: 1,
  },

  botcontent: {
    flex: 1,
    paddingHorizontal: 20,
  },

  serviceHeader: {
    height: height / 13,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  serviceText: {
    fontSize: 20,
  },

  icon: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  viewText: {
    color: COLORS.orange,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },

  viewIcon: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  serviceContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  serviceCard: {
    width: "45%",
    justifyContent: "space-around",
    backgroundColor: "#F6F6FB",
    alignItems: "center",
    height: "85%",
    borderRadius: 20,
  },

  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },

  serviceTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: -25,
  },
  serviceDesc: {},
});
