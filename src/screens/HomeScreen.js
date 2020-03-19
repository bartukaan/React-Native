import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  //const greeting =['Hi There',' ','Bye Bye!'];
  
  const greeting = (
    <Text style={{ backgroundColor: "#fe1" }}>Hello To YOU!</Text>
  );
  const bye = <Text style={styles.bgColor}>BYE BYE!</Text>;

  // return <Text style={{fontsize:30}}>HomeScreen</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      {greeting}
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
       <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
        <View>{bye}</View>

      {/* <TouchableOpacity  onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>   */}
    </View>
    //<View>{bye}</View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    margin: 15
  },
  bgColor: {
    backgroundColor: "aqua"
  }
});

export default HomeScreen;
