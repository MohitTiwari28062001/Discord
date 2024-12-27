import { Text, View , StyleSheet, TextInput} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import{ pixelNormalize} from "../Constants/Size";
function SearchBar() {
    return(
        <View style={styles.mainContainer}>
            <FontAwesome5 style={styles.containerOne} name="search" size={pixelNormalize(20)} color="#ffffff" />
            <TextInput style={styles.containerTwo} placeholder="Search" placeholderTextColor={"grey"}/>
            <Feather
                name="send"
                size={pixelNormalize(20)}
                color="#e8ab1c"
                style={{
                    borderLeftColor:'grey',
                    borderLeftWidth:pixelNormalize(1),
                    paddingLeft:pixelNormalize(20.58)
                }}
            />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // margin:20,
        marginBottom: pixelNormalize(39),
        width: pixelNormalize(306),
        height: pixelNormalize(70),
        backgroundColor:'#191919',
        borderRadius:10,
        flexDirection:'row',
    },
    containerOne:{
        flex:0.20,
        width: pixelNormalize(24),
        height: pixelNormalize(24),
    },
    containerTwo:{
        flex:0.60,
        textAlign:'left',
        fontFamily:'open-sans-regular',
        width: pixelNormalize(46),
        height: pixelNormalize(19),
    },
    containerThree:{
        color:'white',
        flex:0.20,
    }
});