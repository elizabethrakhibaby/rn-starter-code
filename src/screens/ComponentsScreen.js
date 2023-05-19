import React from "react";
import { Text, StyleSheet, View } from "react-native";


const HomeScreen = function () {
    const myName = 'Elizabeth'
    const myAgeIntro = <Text style={{ color: 'blue'}}> I am 20 years old.</Text>
    return (
        <View>
            <Text style={styles.bigHeader}>Getting started with React Native!</Text>
            <Text style={styles.nameHeader}> My name is {myName}.</Text>
            {myAgeIntro}
        </View>
    );
};

const styles = StyleSheet.create({
    bigHeader: {
        fontSize: 45,
        color: 'red',
    },

    nameHeader: {
        fontSize: 20,
    }
});

export default HomeScreen;