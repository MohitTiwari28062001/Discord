import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Note from "../Component/Note";
import { pixelNormalize } from "../Constants/Size";

const Bell =  ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.containerOne}>
            <View style={{backgroundColor:'#0d0d0d', width:'100%', height:'100%', justifyContent:'center', alignItems:'center', borderBottomLeftRadius:pixelNormalize(100),}}>
            <Text style={styles.textConatainer}></Text>
            </View>
            </View>
            
            <View style={styles.containertwo}>
                {/* <View style={styles.innerContainer}>
                <Text style={styles.textConatainer}>sdsdsdsds</Text>
                </View> */}

            <Note>No {'\n'}Notifications !</Note>

            </View>
        </View>
    )
}
export default Bell;

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
    // textConatainer:{
    //     color:'#e8ab1c',
    //     fontFamily:'open-sans-bold',
    //     fontSize:30
    // },
    // innerContainer:{
    //     alignItems:'center',
    //     justifyContent:'center',
    //     backgroundColor:'#000000',
    //     width:'55%',
    //     height:'45%',
    //     borderRadius:120,
    //     borderColor:'grey',
    //     borderWidth:2
    // }
});