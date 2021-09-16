import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Linking,
  useWindowDimensions
} from "react-native";
import { names } from "../screensNames/screensNames";

import { globalStyles } from "../styles/globalStyles";
import { globalColors } from "../styles/globalColors";

import testData from "../data/testData";

export default function Screen3({ navigation }) {

  const { height, width } = useWindowDimensions();
  const windowWidth = width
  
  return (
    <View style={styles.containerA}>
      <ImageBackground
        resizeMode="cover"
        style={styles.screen3Img}
        source={require("../assets/usedImg/screen3Img.jpg")}
      >
        {/* <View style={styles.containerB}>
            <Text>Hello World from, {names.screen3}</Text>
            <Text>Work in progress</Text>
        </View> */}

        <View style={styles.flatList}>
          <FlatList
            // style={windowWidth < 500 ? { width: "80%" } : { width: 400 }}
            style={{ width: "80%", maxWidth: 400 }}

            data={testData}
            showsVerticalScrollIndicator={true}
            numColumns={1}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <TouchableOpacity
                  onPress = {() => Linking.openURL(item.resource.url)}
                  >
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.screen3ItemBg}
                    source={require("../assets/usedImg/screen3ItemBg.jpg")}
                  >
                    {/* <View style={styles.itemPadding}> */}
                    <View
                      style={{ backgroundColor: "rgba(255,255,255,0.5)", flex: 1 }}
                    >
                    <View style={styles.itemPadding}>
                      <Text style={[styles.itemText, styles.itemTopicText]}>
                        {item.resource.topic}
                      </Text>
                      <Text style={[styles.itemText, styles.itemTitleText]}>
                        {item.resource.title}
                      </Text>
                      <Text style={[styles.itemText, styles.itemAuthorText]}>
                        ({item.resource.author})
                      </Text>
                      <Text style={[styles.itemText, styles.itemDetailsText]}>
                        {item.resource.specific}
                      </Text>
                    </View>
                    </View>
                    {/* </View> */}
                  </ImageBackground>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        {/* <View style={globalStyles.buttonsContainer}>
        <TouchableOpacity
          style={[globalStyles.customButton1]}
          onPress={() => navigation.navigate(names.tab1, {screen: names.screen1})}
        >
          <Text style={globalStyles.customButton1Text}>Go to {names.screen1}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
            onPress={() => navigation.navigate("Profile", {
              screen: names.screen2})}
            style={[globalStyles.customButton1, globalStyles.customButton2]}
          >
            <Text style={[globalStyles.customButton1Text, globalStyles.customButton2Text]}>Go to {names.screen2}</Text>
          </TouchableOpacity>
        */}

        {/* </View>  */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerA: {
    flex: 1,
    width: "100%",
  },

  screen3Img: {
    flex: 1,
    justifyContent: "center",
  },

  containerB: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1%",
  },

  flatList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "3%",
    width: "100%",
  },

  item: {
    flex: 1,
    width: "100%",
    marginVertical: 9,
    borderWidth: 5,
    borderColor: globalColors.mainColor,
    // padding: 10,
    backgroundColor: globalColors.secondColor,
  },

  screen3ItemBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)"
  },

  itemPadding: {
    padding: 10,
  },

  itemText: {
 
    color: globalColors.thirdColor,
  },

  itemTopicText: {
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: 'underline',
    marginBottom: 6,
  },

  itemTitleText: {
    fontSize: 15,
    fontStyle: "italic",
  },

  itemAuthorText: {
    fontSize: 12,

  },

  itemDetailsText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
