import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = function () {
    //todo: useState instead of normal var declartion
    const[counter, setCounter] = useState(0);
    /**
     * useState(k) --> initialise a new data with default value k that we will track
     * counter has initial value k, piece if state that we will change over time
     * we should not change counter variable DIRECTLY 
     * setCounter function is called instead
     * 
     */
    return (
        <View>
            <Button title="Increase"
                onPress={() => {
                    //dont do this: counter++;
                    //adding one to current value, we never change value of counter directly!
                    setCounter(counter+1);
                    //console.log(counter);
                }}
            />

            <Button title="Decrease"
                onPress={() => {
                   // dont do this: counter--;
                   setCounter(counter-1);
                   //console.log(counter);
                }}
            />

<Text> Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default CounterScreen;

/**
 * useState is a hook a function adds new funtionality to a function
 * When we navigate to CounterScreen,
 * counter is initialised
 * 
 * When increase button is touched, onpress callback is executed
 * 
 * onpress calls setCounter to update value 
 * 
 * After a brief pause, react automatically rerenders CounterScreen
 * 
 * CounterScreen was alrady ran once. The state varable counter is NOT initialised again
 * 
 * counter now has an updated value of 1
 * 
 * We never directly modify a state varaible. React does not detect this change! Only use the setter function!
 * 
 * We can track any kind of data - number,string,array
 * When components is rerendered, all its children gets rerendered
 * 
 * A state varaible can be passed to a child components. The state variable is now being used as props.
 */