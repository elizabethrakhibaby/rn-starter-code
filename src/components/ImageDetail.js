import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";


//props destructuring!
const ImageDetail = ({imageSource, title, imageScore}) => {

    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image score - {imageScore}</Text>
        </View>
    );
};

/**
 * const ImageDetail = props => {

    return (
        <View>
        <Image source = {props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>Image score - {props.imageScore}</Text>
        </View>
    );
};
 */

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ImageDetail;


//<Image source = {require('../../assets/beach.jpg')}/>