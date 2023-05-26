import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = function() {
//needs to READ the three different state values!
//child compoennts need to change the state variables!
//GENERALLY, we create state varaibles in the most parent components that need sto read or change a state value!
//if a child needs to read the state valye, the parent can pass it down as a prop
//if child needs to change the state value, parent can pass down a callback fucntion(as a prop) to change the state vlaue 
// >>>> 
    return (
        <View>
            <ColorCounter color = "Red"/>
            <ColorCounter color = "Green"/>
            <ColorCounter color = "Blue"/>
        </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;