import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,Image, TextInput, Alert, ImageBackground, useWindowDimensions } from "react-native";

import { globalColors } from "../styles/globalColors";



import firebase from 'firebase/app';




export default function ScreenFb({ route, navigation }) {

    const firebaseConfig = {
        apiKey: "AIzaSyDPZWRuVcnb81L4Z2Jgj2VMVmRYgYxen4U",
        authDomain: "summerapp-c3722.firebaseapp.com",
        projectId: "summerapp-c3722",
        storageBucket: "summerapp-c3722.appspot.com",
        messagingSenderId: "1019891528438",
        appId: "1:1019891528438:web:a9ec2f91038e275623b2d7",
        measurementId: "G-B656LVH2ZC"
      };
      
      firebase.initializeApp(firebaseConfig);
      
      // firebase.initializeApp(config);
      
      // Listen for authentication state to change.
      firebase.auth().onAuthStateChanged(user => {
        if (user != null) {
          console.log('We are authenticated now!');
        }
      
        // Do other things
      });
      
      async function loginWithFacebook() {
        await Facebook.initializeAsync('<FACEBOOK_APP_ID>');
      
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      
        if (type === 'success') {
          // Build Firebase credential with the Facebook access token.
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
      
          // Sign in with credential from the Facebook user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .catch(error => {
              // Handle Errors here.
            });
        }
      }



      

    return (
        <View style={styles.containerA}>
<TouchableOpacity
        onPress={() => {
            loginWithFacebook()
        }}
        style={[styles.topicButton]}
      >
        <Text style={styles.topicButtonText}>Specialist</Text>
      </TouchableOpacity>
      </View>
    );


  }

  
  const styles = StyleSheet.create({
  containerA: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},

  topicButton: {
    flex: 0.25,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    elevation: 8,
    backgroundColor: globalColors.thirdColor,
    color: "white",
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
      color: "white"
  }
  });
  
  