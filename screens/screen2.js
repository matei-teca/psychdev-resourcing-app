import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,Image, TextInput, Alert, ImageBackground } from "react-native";

import { globalStyles } from "../styles/globalStyles";
import { names } from "../screensNames/screensNames";
import { globalColors } from "../styles/globalColors";
import { TabRouter } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";

// for saving data to Firestore Database
import { db } from "../config/firebase"




export default function Screen2({ route, navigation }) {
  const { topic } = route.params;

  const [inputedName, setInputedName] = useState("");
  const [inputed, setInputed] = useState("");
  const [inputedMail, setInputedMail] = useState("");

  const [moreDetails, setMoreDetails] = useState(false);

  const saveToDataBase = () =>{
    db.collection('PsihoterecaInputsTesting').add({name:inputedName, situatie: inputed, email: inputedMail, topic: topic})
  }
  
    return (
      <View style={styles.containerA}>
        <ImageBackground resizeMode="cover" style={styles.screen2Img} source={require("../assets/usedImg/screen2Img.jpg")}>
        <View style={styles.containerB}>
            <Text style = {styles.screen2Text}>Ok, problema ta este legata de {topic} </Text>
            <Text style = {styles.screen2Text}>Spune-ne mai multe, pentru a intelege situatia si a-ti putea face o recomandare</Text>

            <TouchableOpacity onPress={() => setMoreDetails(!moreDetails)}>
              <Image style={styles.moreDetails} source={require("../assets/usedImg/moreDetailsSymbol.png")} />
            </TouchableOpacity>

            {moreDetails ? <Text style = {[styles.screen2Text, {marginBottom: 30}]}>Unul dintre specialistii nostri iti va recomanda niste resurse (video, lecturi, ..) astfel incat tu sa poti gestiona singur situatia prin care treci </Text> : <Text></Text>}
        </View>

        <Animatable.View
        animation="fadeInUpBig"
        style = {styles.containerC}
      >
                <TextInput  style={styles.inputMail} placeholder={"Numele tau"} placeholderTextColor="gray" onChangeText= { text => setInputedName(text)} value = {inputedName}/>
                

                {/* ref={input => { this.textInput = input }}
                ref={input2 => { this.textInput2 = input2 }}
                ref={input3 => { this.textInput3 = input3 }}  */}

        <TextInput  style={styles.input} placeholder={"Descrie situatia ta "}  placeholderTextColor="gray"  multiline={true}  onChangeText= { text => setInputed(text)}/>
        <TextInput style={styles.inputMail} placeholder={"example@gmail.com"} placeholderTextColor="gray" keyboardType="email-address" onChangeText= { text => setInputedMail(text)}/>

        <TouchableOpacity
          style={[globalStyles.customButton1, styles.submitButton]}
          onPress={() => {
            if (inputed.length > 5 && inputedMail.length > 5){
              // Alert.alert("Ok", "Situatia ta va fi analizata de catre un specialist, si vei primi un raspuns cat se poate de repedde", [{text: "Ok"}, {text: "Nope"}]);
              alert("Situatia ta va fi analizata de catre un specialist, si vei primi un raspuns cat se poate de repede pe adresa de mail " + inputedMail+ "\n\n\n" + '"' + inputed + '"');
              // navigation.navigate(names.tab2);
              saveToDataBase();
              setInputedName("");
              // this.textInput.clear();
              // this.textInput2.clear();
              // this.textInput3.clear();

              // setTimeout(() => {alert("Aceasta este Biblioteca, unde gasesti cele mai recomandate lecturi"), 1000})
            } else if (inputed.length > 30 && inputedMail.length < 5) {
              alert("Nu ai introdus o adresa de email valida")
            } else if (inputed.length < 30 && inputedMail.length > 5) {
              alert("Nu ai descris suficient situatia")
            }
            
            else (alert("Nu ai introdus nicio informatie")) }}

            accessible={true}
                   accessibilityLabel={"Acesta este butonul de submit"} accessibilityRole={"button"}
                   accessibilityHint={"apsand acest buton, informatiile scrise de catre tine vor fi trimise catre specialisti"}
             >
          <Text style={globalStyles.customButton1Text}>SUBMIT</Text>
        </TouchableOpacity>
        </Animatable.View>

 
{/* 
        <View style={globalStyles.buttonsContainer}>
        <TouchableOpacity
          style={[globalStyles.customButton1]}
          onPress={() => navigation.navigate(names.screen1)}
        >
          <Text style={globalStyles.customButton1Text}>Go to {names.screen1}</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            onPress={() =>
              navigation.navigate(names.tab2, {
                screen: names.screen3,}
              )
            }
            style={[globalStyles.customButton1, globalStyles.customButton2]}
          >
            <Text style={[globalStyles.customButton1Text, globalStyles.customButton2Text]}>
            Go to {names.screen3}
            </Text>
          </TouchableOpacity>
       
  
        </View> */}
        </ImageBackground>
      </View>
    );


  }

  
  const styles = StyleSheet.create({
    
    containerA: {
      flex: 1,

    },



    screen2Img: {
      flex: 1,
      justifyContent: "center"
    },
  
    containerB: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: "5%",
  
    },

    screen2Text:{
      color: globalColors.secondColor,
      fontWeight: "bold",
      fontSize: 16,
      maxWidth: 450,
      textShadowColor:globalColors.mainColor,
      textShadowOffset:{width: 1, height: 1},
      shadowOpacity: 1,
      textShadowRadius:5,
      marginBottom: 8
    },

    moreDetails: {
      width: 30,
      height:30,
      marginTop: 10
    },
  
    containerC: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 100
    },

    input: {
      minHeight: 100,
      maxHeight: 300,
      width: "70%",
      maxWidth: 450,
      margin: 12,
      borderWidth: 1,
      borderColor: globalColors.mainColor,
      padding: 20,
      paddingTop: 20,
      color: "white",
      backgroundColor: globalColors.thirdColor,
      opacity: 0.8,
      fontStyle: "italic"
    },

    inputMail: {
      height: 60,
      width: "70%",
      maxWidth: 450,
      margin: 12,
      borderWidth: 1,
      borderColor: globalColors.mainColor,
      padding: 20,
      paddingHorizontal: 20,
      color: "white",
      backgroundColor: globalColors.thirdColor,
      opacity: 0.8,
      fontStyle: "italic"
    },

    submitButton: {
      width: "30%",
      maxWidth: 150,
      backgroundColor: globalColors.mainColor,
      marginTop: 20
    }
  
  });
  