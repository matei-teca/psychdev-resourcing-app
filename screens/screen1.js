import React, { useState , useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground, useWindowDimensions  } from "react-native";

import { globalStyles } from "../styles/globalStyles";
import { names } from "../screensNames/screensNames";

import { globalColors } from "../styles/globalColors";


import Firebase from '../config/firebase';
import db from "../config/firebase"




// import img from "../assets/usedImg/homeScreenimg"

export default function Screen1({ navigation }) {



  // firebase.firestore().settings({timestampsInSnapshots: true});


  // useEffect(() => {
  //   firebase.firestore().collection("cafes").get().then((snapshot) => {
  //           console.log(snapshot.data().city)})
  // }, [])

  const [userType, setUsertType] = useState(false)

  const [showTopics, setShowTopics] = useState(true);

  const centralButtonPressHandler = () => {
        navigation.navigate(names.screen1A)
  };

  const { height, width } = useWindowDimensions();
  const windowWidth = width

 

  return (
    <View style={styles.container0}>
      
                <View style={styles.containerA}>

                <ImageBackground resizeMode="cover" style={styles.homeScreenImg} source={require("../assets/usedImg/homeScreenImg.jpg")}> 
                 <View style={styles.containerB1}>
                      
                 <View style={styles.centralButtonContainer}>
                 <TouchableOpacity
                   onPress={centralButtonPressHandler}
                   style={styles.centralButton}
                 >
                   <Text style={styles.centralButtonText}>Incepe</Text>
                   <Text style={styles.centralButtonText}>Aici</Text>
                 </TouchableOpacity>
                 </View>
     
                 <View style={styles.welcomeTextContainer }>
                 <Text style={[styles.welcomeText, globalStyles.textShadow]}>Bine ai venit!</Text>
     
                 </View>
                 {/* <Button title={"yes"} onPress={() => navigation.navigate("Test Screen")}/> */}

                 <View style={[windowWidth > 500 ? styles.welcomeTextContainer2BigScreen : styles.welcomeTextContainer2]}>
                 <Text style={[styles.welcomeText, styles.welcomeText2, globalStyles.textShadow]}>Aceasta este Psihotereca,</Text>
                 <Text style={[styles.welcomeText, styles.welcomeText2, globalStyles.textShadow]}>o aplicatie care </Text>
                 <Text style={[styles.welcomeText, styles.welcomeText2, globalStyles.textShadow]}>te ajuta sa te ajuti </Text>
                 
     
                 </View>
                  </View>
                 </ImageBackground>
               </View>
               </View>
               )}

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

  centralButtonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "30%",
  },
  
  centralButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    elevation: 8,
    // backgroundColor: "#00001B",
    backgroundColor: globalColors.thirdColor,
    borderRadius: 100,
    borderColor: globalColors.mainColor,
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    shadowColor: globalColors.mainColor,
    shadowOpacity: 0.7,
    shadowOffset: { height: 5, width: 0 },
    shadowRadius: 20,
    elevation: 2,

  },

  centralButtonText: {
    fontSize: 23,
    color: globalColors.secondColor,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
    
  },

  welcomeTextContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    marginTop: "10%",
    position: "absolute",
  },

  welcomeText: {
    width: "100%",
    marginBottom: "5%",
    color: globalColors.secondColor,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

   welcomeTextContainer2: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    marginBottom: "7%",
    position: "relative"
  },

  welcomeTextContainer2BigScreen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    marginTop: "20%",
    position: "absolute",
  },

 

  
  welcomeText2: {
    fontSize: 18,
    marginBottom: "2%",
  },

  item2: {
    fontSize: 10,
    color: "black",
    marginBottom: "10%",
    textAlign: "center",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  topicButtonsCo1: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  topicButtonsCo2: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  topicButton: {
    flex: 0.2,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
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
    flex: 0.4,
    width: "75%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "3%"

  },

  
  bottomText:{
    color: globalColors.secondColor,
    fontSize: 12,
    fontWeight: "bold",

  },
});





