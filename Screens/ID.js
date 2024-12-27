import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { pixelNormalize } from "../Constants/Size";

const ID = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.containerOne}>
          <View
            style={{
              backgroundColor: "#0d0d0d",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: pixelNormalize(100),
            }}
          ></View>
        </View>

        <View style={styles.containertwo}>
          <View style={styles.nameContainer}>
            <View style={styles.nameStyle}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "open-sans-bold",
                  fontSize: pixelNormalize(24),
                }}
              >
                Roy Jashon
              </Text>
            </View>
            <View style={styles.emailStyle}>
              <Text
                style={{
                  color: "#878787",
                  fontFamily: "open-sans-regular",
                  fontSize: pixelNormalize(15),
                }}
              >
                jashonroy132@gmail.com
              </Text>
            </View>
          </View>

          <View style={styles.profileContainer}>
            <Ionicons
              name="ios-person-circle"
              size={pixelNormalize(24)}
              color="white"
              style={styles.imageStyle}
            />
            <Text style={styles.text}>Profile</Text>
          </View>

          <View style={styles.languagesContainer}>
            <FontAwesome
              name="language"
              size={pixelNormalize(24)}
              color="white"
              style={styles.imageStyle}
            />
            <Text style={styles.text}>Languages</Text>
          </View>

          <View style={styles.idContainer}>
            <MaterialCommunityIcons
              name="credit-card-scan-outline"
              size={pixelNormalize(24)}
              color="white"
              style={styles.imageStyle}
            />
            <Text style={styles.text}>Face ID</Text>
          </View>

          <View style={styles.infoContainer}>
            <AntDesign
              name="exclamationcircle"
              size={pixelNormalize(24)}
              style={styles.imageStyle}
            />
            <Text style={styles.text}>App Info</Text>
          </View>

          <View style={styles.careContainer}>
            <Ionicons
              name="md-call-sharp"
              size={pixelNormalize(24)}
              color="white"
              style={styles.imageStyle}
            />
            <Text style={styles.text}>Customer Care</Text>
          </View>
        </View>
        <Image
          style={{
            position: "absolute",
            top: pixelNormalize(55),
            width: pixelNormalize(104),
            height: pixelNormalize(104),
            borderWidth: pixelNormalize(4),
            borderColor: "#0d0d0d",
            borderRadius: pixelNormalize(120),
          }}
          source={require("../assets/kazi.png")}
        />
      </View>
    </>
  );
};
export default ID;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
    width: pixelNormalize(414),
  },
  containerOne: {
    flex: 0.2,
    backgroundColor: "#000000",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containertwo: {
    flex: 0.8,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: pixelNormalize(100),
  },
  nameContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    margin: pixelNormalize(15),
  },
  profileContainer: {
    color: "#e8ab1c",
    fontFamily: "open-sans-bold",
    fontSize: pixelNormalize(30),
    flex: 0.16,
    flexDirection: "row",
  },
  languagesContainer: {
    color: "#e8ab1c",
    fontFamily: "open-sans-bold",
    fontSize: pixelNormalize(30),
    flex: 0.16,
    flexDirection: "row",
  },
  idContainer: {
    color: "#e8ab1c",
    fontFamily: "open-sans-bold",
    fontSize: pixelNormalize(30),
    flex: 0.16,
    flexDirection: "row",
  },
  infoContainer: {
    color: "#e8ab1c",
    fontFamily: "open-sans-bold",
    fontSize: pixelNormalize(30),
    flex: 0.16,
    flexDirection: "row",
  },
  careContainer: {
    color: "#e8ab1c",
    fontFamily: "open-sans-bold",
    fontSize: pixelNormalize(30),
    flex: 0.16,
    flexDirection: "row",
  },
  text: {
    color: "#ffffff",
    flex: 0.7,
    // marginTop:pixelNormalize(5),
    fontFamily: "open-sans-regular",
    fontSize: pixelNormalize(17),
    marginRight: pixelNormalize(50),
    width: pixelNormalize(52),
    height: pixelNormalize(24),
  },
  imageStyle: {
    flex: 0.3,
    color: "white",
    marginLeft: pixelNormalize(30),
    width: pixelNormalize(24),
    height: pixelNormalize(24),
  },
  nameStyle: {
    width: pixelNormalize(140),
    height: pixelNormalize(33),
  },
  emailStyle: {
    width: pixelNormalize(192),
    height: pixelNormalize(21),
    marginTop:pixelNormalize(5)
  },
});
