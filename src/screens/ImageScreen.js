import React from "react";
import { Text, StyleSheet, View } from "react-native";
//parent component!
//need to import children ../ means go up one directory!
import ImageDetail from "../components/ImageDetail";

const ImageScreen = function () {

  return (
    <View>
      <Text>This is the Image Screen</Text>
      <ImageDetail title="beach" imageSource={require("../../assets/beach.jpg")}
        imageScore={9} />
      <ImageDetail title="forest" imageSource={require("../../assets/forest.jpg")}
        imageScore={7} />
      <ImageDetail title="mountain" imageSource={require("../../assets/mountain.jpg")}
        imageScore={4} />
    </View>
  );
};
//create a resuable component called ImageDetail - Components show ONE LITTLE PORTION OF SCREEN
//


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;




/** To show similar looking components
 * 1. Create a compoents 
 * and pass in props to *CUSTOMISE* how that component gets displayed!!!
 * 
 */



/** 
 * we will store reusuable componets under "components" file
 * resuable components display only small portion of screen
 * 
 * we will store full components under "screen" file
 * full components show the entire screen
 */

