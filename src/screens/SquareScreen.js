import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);
  console.log(green);
  console.log(blue);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
       
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
       
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
