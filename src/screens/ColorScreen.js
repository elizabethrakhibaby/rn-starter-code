import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";


const ColorScreen = function () {
    //deafult colors is an empty array!
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button title="Add a Colour"
                onPress={() => {
                    //creating brand new array []
                    //...colors adds existing array elements of colors into new array
                    //randomRgb() adds a new entry!
                    setColors([...colors, randomRgb()]);
                }} 
                />

            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={ ({item}) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    );
                }}
            />
        </View>
    );
};

//helper fucntion to generate colour

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    //return template string using backticks
    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ColorScreen;

//To build a list of elements, out of an array of data, use FlatList!