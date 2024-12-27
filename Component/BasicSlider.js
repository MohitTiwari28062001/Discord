import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,
  Text
} from "react-native";

const images = [
    {id:1, img:require("../assets/Images/GroupOne/Gaming.jpg"), color:"#e8ab1c"},
    {id:2, img:require("../assets/Images/GroupTwo/Reactor.jpg"), color:"#e8ab1c"},
    {id:3, img:require("../assets/Images/GroupThree/Listening.jpg"), color:"#e8ab1c"},
]
    const scrollX = useRef(new Animated.Value(0)).current;

    let { width: windowWidth, height:windowHeight } = useWindowDimensions();
    windowHeight=windowHeight-380;

    return (
      <SafeAreaView style={styles.container}>

            <Image source={require("../assets/Images/Discord.png")} />
            <Text>Discord</Text>
            <View style={styles.textAreaContainer}>

                {images.map((image, imageIndex)=>{

                    const inputRange=[
                        windowWidth*(imageIndex-1),
                        windowWidth*(imageIndex),
                        windowWidth*(imageIndex+1),
                    ];
                return(
                <Animated.Text style={[styles.textView, {transform:[
                    {translateY:scrollX.interpolate({
                        inputRange,
                        outputRange:[-380, -30, 0],
                    })}
                ]},{
                    opacity:scrollX.interpolate({
                        inputRange,
                        outputRange:[0, 1, 0]
                    })
                }, {
                    color:image.color
                }]}>
                    {image.title}
                </Animated.Text>
                );
                })}

            </View>
            <View style={[styles.scrollContainer, {height:windowHeight} ]}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
                )}
            scrollEventThrottle={16}
          >
            {images.map((image, imageIndex) => {
              return (
                <Animated.View
                  style={{ width: windowWidth,}}
                  key={imageIndex}
                >
                  <Image  source={image.img} style={styles.card} />
                  
                  <Text style={styles.Text}>Let's connect with {'\n'} your friends</Text>
                  </Animated.View>
              );
            })}
          </ScrollView>

        </View>
        <View style={styles.indicatorContainer}>

            {
                images.map((image, imageIndex)=>{
                    const width=scrollX.interpolate({
                        inputRange:[
                            windowWidth*(imageIndex-1),
                            windowWidth*(imageIndex),
                            windowWidth*(imageIndex+1),
                        ],
                        outputRange:[8, 16, 8],
                        extrapolate:"clamp",
                    })

                    return(
                        <Animated.View style={[styles.normalDots, {width}, {backgroundColor:image.color}]}/>

                       
                    );
                })
            }

        </View>




      </SafeAreaView>
    );
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex:1,
      height:"100%"
    },
    scrollContainer: {
        shadowColor:"black",
        shadowOffset:{
            
            
        },
        shadowOpacity:1,
    },
    card: {
      flex: 1,
      marginVertical: 10,
      width:'80%',
      overflow: "hidden",
      alignSelf:"center",
      borderRadius:30
    },
    indicatorContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    normalDots:{
        width:8,
        height:8,
        borderRadius:4,
        color:'green',
      
        marginHorizontal:4,
    },
    textAreaContainer:{
       
        marginBottom:10,
    },
    textView:{
        position:"absolute",
        fontSize:22,
        fontWeight:"600",
        textAlign:"center",
    },
    Text:{
        color:'white',
        textAlign:'center',
        marginBottom:20,
        marginTop:20,
        fontFamily:"open-sans-bold",
        fontSize:20,
        backgroundColor:'#141414',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    }
  });