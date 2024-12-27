import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "../navigation/tabs";

const Chat = (props) => {
    return(
        <>

        {/* <View style={styles.mainContainer}>
            <Text>This is Chat screen</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Preview")}>
                <Text>Tap here to navigate to HomeScreen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate("About")}>
                <Text>Tap here to navigate to AboutViewScreen</Text>
            </TouchableOpacity>
        </View> */}

    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
    </>
    );
}

export default Chat;

const styles = StyleSheet.create({
    mainContainer:{
        // flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
});
