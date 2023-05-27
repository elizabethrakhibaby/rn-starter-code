import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

/**
 * to prevent ios from auto capitalising and autocorrecting!
 * two important props: autoCapitalize & autoCorrect
 */
const TextScreen = function() {
    const[password,setPassword] = useState("");
    return (
        <View>
            <Text> Enter Password:</Text>
        <TextInput style = {styles.input}
        autoCapitalize= "none"
        autoCorrect = {false} 
        value = {password}
        onChangeText={newValue => setPassword(newValue)}
        /> 
        {password.length < 4 ? <Text>Password must be at least 4 characters</Text>: null }
        </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
});

export default TextScreen;