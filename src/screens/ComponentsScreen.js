import React from "react";
import { Text, StyleSheet,View } from "react-native";

const ComponentsScreen = () => {
 // return <Text style={styles.textStyle}> This is the components screen </Text>;

  const name = "Bartu";

  return (
    <View>
      <Text style={styles.textStyle}>Bu react bi harika dostum...</Text>
      <Text style={styles.subHeaderStyle}>Hoşgeldin KRAL {name} !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
