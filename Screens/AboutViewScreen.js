import { TouchableOpacity, View, StyleSheet, Text} from "react-native";

const About= (props) =>{
    return(
        <View style={styles.mainContainer}>
            <Text>This is Home screen</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
                <Text>Tap here to navigate to Chat Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
});
