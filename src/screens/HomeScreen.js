import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//function declaration!
const HomeScreen = ({ navigation }) => {


  return (

    <View>
      <Text style={styles.text}>Hi There! This is the home screen</Text>

      <Button title="Go to Components Screen"
        onPress={() => navigation.navigate("Components")}
      />

      <Button title="Go to List Screen"
        onPress={() => navigation.navigate("ListOfFriends")}
      />

      <Button title="Go to Images Screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />


      <Button title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button title="Go to Colour Demo"
        onPress={() => navigation.navigate("Color")}
      />

      <Button title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />



    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


/*Wrap text element and button element using View,
 *because you can only return a SINGLE ROOT ELEMENT.
 */
    //title = " ": you can pass a string to a prop without curly brackets

/** Button is self closing element,
 * shows prestyled text! 
 * <Button title = "Go to Components Screen"
  onPress={() => console.log("Button Pressed!!")}
   />
 * */

/* TouchableOpacity is not self closing element,
upon tapping it, it briefly fades out for a split second, 
you can style text however you want,
you can put in text or image!
<TouchableOpacity onPress={() => props.navigation.navigate("ListOfFriends")}>
<Text>Go to List Menu</Text>
</TouchableOpacity>
 */

/** Destrcuturng props
 * FROM
 * const HomeScreen = (props) => {
 * CHANGE TO
 * const HomeScreen = ({navigation}) => {
 * we now only have access of navigation property from the props objects
 * we no longer have access to props
 * so we can change from props.navigation.navigate to navigation.navigate
 */


/**
* console.log(props);
* 
* In terminal, you can see that:
* properties that exist inside props is shown!
* navigation property -> points to actions,addLister,dangeruoslyGetParent...
* 
* 
* console.log(props.navigation) shows the props.navigation object
* there is a navigate property!!!!
*/