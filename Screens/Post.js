import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { pixelNormalize } from "../Constants/Size";

import Note from "../Component/Note";

const Post = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.containerOne}>
          <View
            style={{
              backgroundColor: "#000000",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: pixelNormalize(100),
              width: pixelNormalize(414),
            }}
          >
            <View
              style={{
                flex: 0.12,
                alignItems: "center",
                justifyContent: "center",
                width: pixelNormalize(119),
                height: pixelNormalize(33),
                marginBottom:pixelNormalize(20)
              }}
            >
              <Text
                style={{
                  backgroundColor: "#0d0d0d",
                  paddingTop: pixelNormalize(8),
                  paddingBottom: pixelNormalize(8),
                  paddingLeft: pixelNormalize(15),
                  paddingRight: pixelNormalize(15),
                  borderRadius: pixelNormalize(15),
                  fontSize: pixelNormalize(12),
                  color: "#e8ab1c",
                }}
              >
                30 May 2021
              </Text>
            </View>
            <View style={styles.text}>
              <Image
                source={require("../assets/two.png")}
                style={{
                  borderRadius: pixelNormalize(10),
                  textAlign: "center",
                  // backgroundColor: "green",
                  height: pixelNormalize(168),
                  width: pixelNormalize(298),
                }}
              />

              <View
                style={{
                  height: pixelNormalize(33),
                  width: pixelNormalize(33),
                  
                }}
              >
                <Image
                  source={require("../assets/Images/Christopher/Chirs.png")}
                  style={{
                  // height: pixelNormalize(33),
                  // width: pixelNormalize(33),
                  padding: pixelNormalize(16),
                  height:'100%',
                  width:"100%",
                  marginLeft:pixelNormalize(22),
                  marginRight:pixelNormalize(30)
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flex: 0.27,
                flexDirection: "row",
                justifyContent: "center",
                alignItems:'center',
                marginTop:pixelNormalize(8)
              }}
            >
              <Image
                source={require("../assets/Images/ImageTwo/second.png")}
                style={{
                  borderRadius: pixelNormalize(10),
                  textAlign: "center",
                  // backgroundColor: "green",
                  height: pixelNormalize(129),
                  width: pixelNormalize(298),
                  marginLeft:pixelNormalize(30.5),
                  marginRight:pixelNormalize(85.5) 
                }}
              />
            </View>

            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                width: '100%',
                marginTop: pixelNormalize(12),
              }}
            >
              <View
                style={{
                  color: "red",
                  flex: 0.9,
                  flexDirection: "row",
                  marginTop: pixelNormalize(10),
                  width:'100%',
                  height:'100%',
                }}
              >
                <Ionicons
                  name="ios-checkmark-outline"
                  size={pixelNormalize(24)}
                  color="#e8ab1c"
                  style={{ flex: 0.9, marginLeft:pixelNormalize(30)}}
                />
                <Text
                  style={{
                    color: "white",
                    width: pixelNormalize(38),
                    height: pixelNormalize(19),
                    fontSize: pixelNormalize(12),
                    marginBottom: pixelNormalize(37),
                    
                  }}
                >
                  12 Min
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 0.12,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                width: pixelNormalize(298),
                height: pixelNormalize(99),
                backgroundColor: "#0d0d0d",
                borderRadius: pixelNormalize(10),
                marginRight: pixelNormalize(15),
                paddingBottom: pixelNormalize(16),
                paddingLeft: pixelNormalize(14),
                paddingRight: pixelNormalize(13),
                paddingTop: pixelNormalize(16),
              }}
            >
              <Text style={{ color: "white", backgroundColor: "#0d0d0d" }}>
                WOW...Hi Christopher Mark. It looks amazing. Where do you
                exaxtly are? I truly envy you!
              </Text>
            </View>

            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                width: "100%",
              }}
            >
              <View style={{ flex: 0.9, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 0.8,
                    marginBottom: pixelNormalize(51),
                    marginTop: pixelNormalize(12),
                    marginLeft:pixelNormalize(30)
                  }}
                >
                  <Ionicons
                    name="ios-checkmark-outline"
                    size={24}
                    color="grey"
                  />
                </View>
                <Text
                  style={{
                    flex: 0.2,
                    color: "white",
                    fontSize: pixelNormalize(13),
                    width: pixelNormalize(34),
                    height: pixelNormalize(19),
                    marginBottom: pixelNormalize(46),
                    marginTop: pixelNormalize(12),
                  }}
                >
                  5 Min
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containertwo}>
          <View style={styles.bottomContainer}>
            <TextInput
              placeholder="Your Message"
              placeholderTextColor={"grey"}
              style={{
                flex: 0.6,
                textAlign: "left",
                marginLeft: pixelNormalize(24),
                fontFamily: "open-sans-regular",
              }}
            />
            <MaterialIcons
              name="insert-photo"
              size={pixelNormalize(24)}
              style={{
                color: "white",
                flex: 0.1,
                textAlign: "center",
              }}
            />
            <Ionicons
              name="camera"
              size={pixelNormalize(24)}
              style={{
                color: "white",
                flex: 0.1,
                textAlign: "center",
                paddingLeft: pixelNormalize(15),
                paddingRight: pixelNormalize(15.42),
              }}
            />
            <Feather
              name="send"
              size={pixelNormalize(23)}
              color="#e8ab1c"
              style={{
                flex: 0.1,
                borderLeftColor: "grey",
                borderLeftWidth: pixelNormalize(1),
                paddingLeft: pixelNormalize(15.58),
                textAlign: "center",
                  marginRight: pixelNormalize(15),
                  width:pixelNormalize(24),
                  height:pixelNormalize(24)
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  containerOne: {
    flex: 0.8,
    backgroundColor: "#0d0d0d",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: pixelNormalize(28),
  },
  containertwo: {
    flex: 0.2,
    backgroundColor: "#0d0d0d",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: pixelNormalize(100),
  },
  text: {
    color: "#e8ab1c",
    fontFamily: "open-sans-bold",
    height: "100%",
    width:'100%',
    flex: 0.28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    color: "white",
    backgroundColor: "#191919",
    width: pixelNormalize(306),
    height: pixelNormalize(70),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: pixelNormalize(10),
    flexDirection: "row",
    marginTop: pixelNormalize(50),
    marginBottom: pixelNormalize(50),
    marginLeft: pixelNormalize(54),
    marginRight: pixelNormalize(54),
  },
});
