import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Analytic,
  Courier,
  HelpSupport,
  HomePage,
  Login,
  onBoardingScreen,
  Setting,
  Shipping,
  Tracking,
} from "../screens";
import CustomDrawer from "./CustomDrawer";

const StackScreen = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const drawerStack = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        drawerType="slide"
      >
        <Drawer.Screen component={HomePage} name="HomePage" />
        <Drawer.Screen name="Tracking" component={Tracking} />
        <Drawer.Screen name="Analytic" component={Analytic} />
        <Drawer.Screen name="Shipping" component={Shipping} />
        <Drawer.Screen name="Courier" component={Courier} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="HelpSupport" component={HelpSupport} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="onBoarding"
          component={onBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Drawer" component={drawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;

const styles = StyleSheet.create({});
