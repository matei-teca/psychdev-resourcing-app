import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Linking } from "react-native";

import { IconButton } from "../components";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

// for getting data from Firestore Database
import { db } from "../config/firebase";


const auth = Firebase.auth();

export default function SpecialistScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [userInput, setUserInput] = useState([]);
  const [reloder, setReloder] = useState(0);

  // for getting data from Firestore Database

  useEffect(() => {

    db.collection("PsihoterecaInputsTesting").onSnapshot({
      next: querySnapshot => {
        const userInput = querySnapshot.docs.map(docSnapshot => ({
          id: docSnapshot.id,
          name: docSnapshot.data().name,
          topic: docSnapshot.data().topic,
          situatie: docSnapshot.data().situatie,
          email: docSnapshot.data().email,
        }))
        setUserInput(userInput)
      },
      error: error => console.log(error)
    })

    db.collection("PsihoterecaInputsTesting")
      .get()
      .then(result => result.docs ).then( docs => docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        topic: doc.data().topic,
        situatie: doc.data().situatie, 
        email: doc.data().email, 
        }))).then(userInput => setUserInput(userInput))
  
  }, []);


  // db.collection("PsihoterecaInputsTesting")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.docs.forEach((doc) => {
  //         return (
  //           // setUserInputId([{id: doc.id
  //           // }]),
  //           setUserInput((prevItems) => [
  //             ...prevItems,
  //             { situatie: doc.data().situatie, email: doc.data().email, id: doc.id },
  //           ]),
  //           console.log(userInput)
  //         );
  //       });
  //     });

  return (
    <View style={styles.container}>
        

      <StatusBar style="dark-content" />
      <ImageBackground resizeMode="cover" style={styles.specialistScreenImg} source={require("../assets/usedImg/specialistImg.jpeg")} accessible={true}
                   accessibilityLabel={"Aceasta este imaginea de fundal" } accessibilityRole={"image"} accessibilityHint={"In imaginea aceasta, un om se uita ganditor catre cer"}>
      
      
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <IconButton
          name="logout"
          size={24}
          color="#fff"
          onPress={handleSignOut}
        />
      </View>
      <Text style={styles.text}>Your UID is: {user.uid} </Text>
      <Text style={styles.text}>
        O sa vezi aici toate cererile utilizatorilor
      </Text>

      <ScrollView>

      <View style={styles.containerB}>
        {userInput.map((input) => {
          return (
            <View  style={styles.containerC}> 
            <View  style={styles.containerC2} 
                    key={input.id}>

                      <View style={styles.containerC3}>
                      <Text style={styles.nameText}>{input.name}</Text>
                      <TouchableOpacity style={styles.containerD2} onPress = { () => {db.collection("PsihoterecaInputsTesting").doc(input.id).delete()}}><Text>X</Text></TouchableOpacity>
                      </View>

              <Text style={styles.situatieText}>({input.topic})</Text>
              <Text style={styles.situatieText}>{input.situatie}</Text>

              
              </View>
              

              <View style={styles.emailContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + input.email)} style={styles.email}>
              <Text >{input.email}</Text>
              </TouchableOpacity>
              </View>

              {/* <TouchableOpacity style={styles.containerD2} onPress = { () => {db.collection("PsihoterecaInputsTesting").doc(input.id).delete()}}><Text>X</Text></TouchableOpacity> */}
            </View>
          );
        })}
      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#e93b81",
    paddingTop: 50,
    paddingHorizontal: 12,
    alignItems: "center"
  },

  specialistScreenImg: {
    flex: 1,
    justifyContent: "center"
  },

  containerB: {
    marginBottom: 40,
    alignItems: "center"
    // backgroundColor: "purple"
  },
  containerC: {
    flex: 1,
    backgroundColor:"green",
    minHeight: 300,
    maxHeight: 400,
    width: 350,
    padding: 30,
    marginTop: 40,
    borderRadius: 10
  },

  containerC2: {
    flex: 1,
    backgroundColor:"red",

  },

  containerC3: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerD: {
    flex: 0.1,
    alignItems: "center",
    backgroundColor:"yellow"
  },

  containerD2: {
    flex: 0.1,
    backgroundColor:"blue",    
    alignItems: "center",
    justifyContent: "center",
    minWidth: 10
  },

  nameText: {
    fontSize: 20
  },

  situatieText:{
    marginTop: 20
  },

  emailContainer:{
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "10%",
    backgroundColor: "yellow",
    
  },

  email: {
    flex:1,
    borderRadius: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200
  },

 

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
});
