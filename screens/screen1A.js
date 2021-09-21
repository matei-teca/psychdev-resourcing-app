import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,Image, TextInput, Alert, ImageBackground, useWindowDimensions } from "react-native";

import { globalStyles } from "../styles/globalStyles";
import { names } from "../screensNames/screensNames";
import { globalColors } from "../styles/globalColors";
import { TabRouter } from "@react-navigation/native";



export default function Screen1A({ route, navigation }) {
  const { height, width } = useWindowDimensions();
  const windowWidth = width
    return (
        <View style={styles.containerA}>

        <ImageBackground resizeMode="cover" style={styles.homeScreenImg} source={require("../assets/usedImg/homeScreenImg.jpg")}> 


    <View style={styles.containerB}>
        <View style={styles.containerB2}>
        <View style={styles.containerC}>
        <View style={styles.topicButtonsCo1}>
      <TouchableOpacity
        onPress={() => {
          
          // setShowTopics(!showTopics);
          // setUsertType(false);

          navigation.navigate(names.screen1B)
       }}
        style={[styles.topicButton]}
      >
        <Text style={styles.topicButtonText}>Utilizator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(names.screen4)
          // setShowTopics(true);
          // setUsertType(false);
        }}
        style={[styles.topicButton]}
      >
        <Text style={styles.topicButtonText}>Specialist</Text>
      </TouchableOpacity>

      </View>
      
      <View style={ [windowWidth > 500 ? styles.bottomTextContainerBigScreen : styles.bottomTextContainer]}>
                      <Text style={[styles.bottomText, globalStyles.textShadow]}>Varianta specialist este pentru psihologii specialisti ce sunt membri ai echipei Psihotereca</Text>
                      </View>
      </View>
      </View>
    </View>
      </ImageBackground>
      </View>
    );


  }

  
  const styles = StyleSheet.create({
    container0: {
      flex: 1,
      width: "100%"
    },
    containerA: {
      flex: 1,
      width: "100%"
    },
  
    homeScreenImg: {
      flex: 1,
      justifyContent: "center"
    },
  
    containerB: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  
      width: "100%"
    },
  
    containerB1: {
      flex: 1,
      alignItems: "center",
      width: "100%"
    },
  
  
    containerB2: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    containerC: {
      flex: 1,
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    topicButtonsCo1: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: "10%",
      width: "100%",
    },
    
    topicButton: {
      flex: 0.25,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5%",
      elevation: 8,
      backgroundColor: globalColors.thirdColor,
      borderRadius: 10,
      paddingVertical: 0,
      paddingHorizontal: 0,
      borderColor: globalColors.mainColor,
      borderWidth: 1,
      // transform: [{ rotate: "-5deg" }]
      // shadowColor: globalColors.mainColor,
      // shadowOpacity: 0.4,
      // shadowOffset: { height: 10, width: 0 },
      // shadowRadius: 20,
    },
  
    topicButtonText: {
      color: globalColors.secondColor,
    },
  
    topicButton3: {    
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center",
      width: 65,
      // height: 50,
      elevation: 8,
      // backgroundColor: "#00001B",
      backgroundColor: globalColors.thirdColor,
      borderRadius: 100,
      borderColor: globalColors.mainColor,
      borderWidth: 1,
      // paddingVertical: 3,
      paddingHorizontal: 3,
      shadowColor: globalColors.mainColor,
      shadowOpacity: 0.7,
      shadowOffset: { height: 5, width: 0 },
      shadowRadius: 20,
    },
  
    bottomTextContainer:{
      flex: 0.2,
      width: "75%",
      justifyContent: "flex-end",
      alignItems: "center",
      textAlign: "center",

      marginBottom: "10%"
  
    },
    bottomTextContainerBigScreen: {
      width: "75%",
      justifyContent: "flex-end",
      alignItems: "center",
      textAlign: "center",

      position: "absolute",
      marginTop: "5%"
    },
  
    
    bottomText:{
      color: globalColors.secondColor,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
  
    },

    
  });
  
  