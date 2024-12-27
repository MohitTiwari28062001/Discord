import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Note from "../Component/Note";
import { pixelNormalize } from "../Constants/Size";

const Favorite =  ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.containerOne}>
            <View style={{backgroundColor:'#0d0d0d', width:'100%', height:'100%', justifyContent:'center', alignItems:'center', borderBottomLeftRadius:pixelNormalize(100),}}>
            <Text style={styles.textConatainer}></Text>
            </View>
            </View>
            
            <View style={styles.containertwo}>
            <Note>No {'\n'}Favorite !</Note>
            </View>
        </View>
    )
}
export default Favorite;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0d0d0d'
    },
    containerOne:{
        flex:0.15,
        backgroundColor:'#000000',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    containertwo:{
        flex:0.85,
        backgroundColor:'black',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:pixelNormalize(100),
    },
    textConatainer:{
        color:'#e8ab1c',
        fontFamily:'open-sans-bold',
        fontSize:pixelNormalize(30)
    }
});