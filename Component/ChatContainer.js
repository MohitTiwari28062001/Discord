import { Text, View, StyleSheet, Image } from "react-native";

function ChatConainer({source,name,message,time,number}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerOne}>
        <Image source={require('../assets/Images/Background/ele.png')}/>
      </View>

      <View style={styles.containerTwo}>
        <Text style={styles.text}>Hekloo</Text>
        <Text style={styles.text}>Hekloo</Text>
      </View>

      <View style={styles.containerThree}>
        <Text style={styles.leftText}>Hekloo</Text>
        <Text style={styles.leftText}>Hekloo</Text>
      </View>
    </View>
  );
}

export default ChatConainer;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  containerOne: {
    color: "#ffffff",
    fontSize: 20,
    flex: 0.3,
  },
  containerTwo: {
    color: "#ffffff",
    fontSize: 20,
    flex: 0.3,
  },
  containerThree: {
    color: "#ffffff",
    fontSize: 20,
    flex: 0.3,
  },
  text:{
    color:'#ffffff'
  },
  leftText:{
    color:'#ffffff',
    textAlign:'right'
  }
});
