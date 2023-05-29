import React from "react";
import { Text, StyleSheet, View } from "react-native";


const BoxScreen = function() {

    return (
        <View style = {styles.parentStyle}>
            <View style = {styles.viewOneStyle}/>
            <View style = {styles.viewTwoStyle}/>
            <View style = {styles.viewThreeStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        border:10,
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    viewOneStyle:{
        height:50,
        width:50,
        backgroundColor: "red"
    },
    viewTwoStyle:{
        height:50,
        width:50,
        backgroundColor: "blue",
        top:50
    },
    viewThreeStyle:{
        height:50,
        width:50,
        backgroundColor: "yellow"
    }
  });


export default BoxScreen;