import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

import { names } from "../screensNames/screensNames";


export default function TopicsButtons({navigation}) {
  return (
    <View style={styles.containerB}>
                    <View style = {styles.topicButtonsCo1}>
        <TouchableOpacity
            style={[styles.topicButton, styles.topicButton1]}
            
          >
            <Text style={styles.topicButtonText}>Depression</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topicButton, styles.topicButton1]}
          >
            <Text style={styles.topicButtonText}>Topic Button 2</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={[styles.topicButton, styles.topicButton1]}
          >
            <Text style={styles.topicButtonText}>Topic Button 3</Text>
          </TouchableOpacity>
          </View>

          <View style = {styles.topicButtonsCo2}>
          <TouchableOpacity
            style={[styles.topicButton, styles.topicButton1]}
          >
            <Text style={styles.topicButtonText}>Topic Button 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topicButton, styles.topicButton1]}
          >
            <Text style={styles.topicButtonText}>Topic Button 2</Text>
          </TouchableOpacity>

           <TouchableOpacity
            style={[styles.topicButton, styles.topicButton1]}
          >
            <Text style={styles.topicButtonText}>Topic Button 3</Text>
          </TouchableOpacity>

          </View>


    </View>
  );
}

const styles = StyleSheet.create({

  // containerA: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "red"
  // },
  containerB: {
    flex: 1,
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-between",
  },

  topicButtonsCo1: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  topicButtonsCo2: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  topicButton: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    backgroundColor: "navy",
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 12,
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },

  centralButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
