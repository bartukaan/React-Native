import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {

          const [password,setPassword] = useState('');

  return (
    <View>
      <Text style={styles.text}>Enter password </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue=>setPassword(newValue)}
      />
      {/* <Text >Your password is {password}</Text> */}
      {password.length < 4 ? <Text>Password must be at least 4 characters</Text>: null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  },
  text: {
    margin: 20
  }
});

export default TextScreen;
