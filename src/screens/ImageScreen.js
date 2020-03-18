import React from "react";
import { View, Text, StyleSheet } from "react-native"; 
import ImageDetail from "../components/ImageDetail";


const ImageScreen = () => {
  
  return (
    <View>
      <ImageDetail title="Beach" imageSource={require('../../assets/images/beach.jpg')} imageScore='9'/>
      <ImageDetail title="Forest" imageSource={require('../../assets/images/forest.jpg')} imageScore='8'/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/images/mountain.jpg')} imageScore='7'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
