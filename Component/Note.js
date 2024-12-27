import { Text, View, StyleSheet } from "react-native";

function Note ({children}) {
    return(
        <View style={styles.innerContainer}>
            <Text style={styles.textConatainer}>{children}</Text>
        </View>
    );
}


export default Note;

const styles = StyleSheet.create({
    textConatainer:{
        color:'#e8ab1c',
        fontFamily:'open-sans-bold',
        fontSize:25,
        textAlign:'center'
    },
    innerContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0d0d0d',
        width:250,
        height:250,
        borderRadius:120,
        borderColor:'#e8ab1c',
        borderWidth:2,
        padding:10
    }
})