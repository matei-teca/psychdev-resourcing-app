import { StyleSheet} from "react-native";
import {globalColors} from "./globalColors"

export const globalStyles = StyleSheet.create({

  textShadow: {

    textShadowColor:globalColors.mainColor,
    textShadowOffset:{width: 1, height: 1},
    shadowOpacity: 1,
    textShadowRadius:5,
  },
  
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },

  customButton1: {
    textAlign: "center",
    width: "90%",
    // marginVertical: 20,
     marginBottom: 5,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },

  customButton1Text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },

  customButton2: {
    marginVertical: 0,
    backgroundColor: "white",
    marginBottom: "1%",
  },

  customButton2Text: {
    color: "#009688",
  },

  });
