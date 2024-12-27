import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Screens/Home";
import ID from "../Screens/ID";
import Post from "../Screens/Post";
import Favorite from "../Screens/Favorite";
import Bell from "../Screens/Bell";

import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { Image } from "react-native";
import { pixelNormalize } from "../Constants/Size";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          postion: "absolute",
          elevation: pixelNormalize(0),
          height: pixelNormalize(70),
          backgroundColor: "#0d0d0d",
          borderTopWidth: pixelNormalize(1),
          borderTopColor: "#191919",
          width: pixelNormalize(414),
        
        },
        tabBarActiveTintColor:'#e8ab1c'
      }}
    >
      <Tab.Screen
        name="Discord"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={pixelNormalize(30)}  color={color} style={{height: pixelNormalize(30), width:pixelNormalize(30)}}/>
          ),
          headerLeft: () => (
            <Ionicons
              name="grid"
              size={pixelNormalize(24)}
              color="white"
              style={{ width: pixelNormalize(24), height: pixelNormalize(24) }}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTitleStyle: {
            width: pixelNormalize(76),
            height: pixelNormalize(28),
          },
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(10),
          headerRight: () => (
            <Image
              source={require("../assets/Images/Background/ele.png")}
              style={{ width: pixelNormalize(36), height: pixelNormalize(36) }}
            />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
          },
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => (
            <Foundation
              name="heart"
              size={pixelNormalize(30)}
              color={color}
              style={{ height: pixelNormalize(30), width:pixelNormalize(30) }}
            />
          ),
          headerLeft: () => (
            <Ionicons name="grid" size={pixelNormalize(24)} color="white" />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(10),
          headerRight: () => (
            <Image source={require("../assets/Images/Background/ele.png")} />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
            borderBottomWidth: pixelNormalize(0),
          },
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({color}) => (
            // <AntDesign
            //   name="pluscircle"
            //   size={pixelNormalize(30)}
            //   color={color}
            //   style={{height: pixelNormalize(30), width:pixelNormalize(30)}}
            // />
            //   <FontAwesome5 name="plus-square" size={pixelNormalize(30)} color={color}  style={{height: pixelNormalize(30), width:pixelNormalize(30)}}/>
              <Ionicons name="md-add-circle-sharp" size={50} color={color}/>
          ),
          headerLeft: () => (
            <Ionicons name="grid" size={pixelNormalize(24)} color="white" />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(10),
          headerRight: () => (
            <Image source={require("../assets/Images/Background/ele.png")} />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
            borderBottomWidth: pixelNormalize(0),
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Bell}
        options={{
          tabBarIcon: ({color}) => (
            <Octicons
              name="bell-fill"
              size={pixelNormalize(28)}
              color={color}
              style={{height: pixelNormalize(30), width:pixelNormalize(30)}}
            />
          ),
          headerLeft: () => (
            <Ionicons name="grid" size={pixelNormalize(24)} color="white" />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(10),
          headerRight: () => (
            <Image source={require("../assets/Images/Background/ele.png")} />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
            borderBottomWidth: pixelNormalize(0),
          },
        }}
      />

      <Tab.Screen
        name="Discord "
        component={ID}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person" size={pixelNormalize(24)} color={color} />
          ),
          headerLeft: () => (
            <Ionicons name="grid" size={pixelNormalize(24)} color="white" />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(10),
          headerRight: () => (
            <Image source={require("../assets/Images/Background/ele.png")} />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
            borderBottomWidth: pixelNormalize(0),
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
