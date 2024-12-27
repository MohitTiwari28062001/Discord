import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import PreviewScreen from "./Screens/PreviewScreen";
import ChatViewScreen from "./Screens/ChatViewScreen";
import AboutViewScreen from "./Screens/AboutViewScreen";
import Message from "./Screens/MessageScreen";
import { StyleSheet } from "react-native";

const AppNavigator = createStackNavigator(
  {
    Preview: PreviewScreen,
    Chat: ChatViewScreen,
    About: AboutViewScreen,
    Message: Message,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#000000",
      },
      headerTintColor: "#FFF",
      headerShown: false,
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Navigator>
      <PreviewScreen />
    </Navigator>
  );
}
const styles = StyleSheet.create({});
