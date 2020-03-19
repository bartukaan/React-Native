import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "stretch"
    // flexDirection:'row'
    //alignContent:"center",
    //alignSelf="flex-end",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red"
    //flex:4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    //flex:4,
    // alignSelf:'stretch',
    //     position:'absolute',
    //     fontSize:18,
    //     top :0,
    //     bottom:0,
    //     left:0,
    //     right:0,
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red"
    //flex:1
  }
});

export default BoxScreen;
