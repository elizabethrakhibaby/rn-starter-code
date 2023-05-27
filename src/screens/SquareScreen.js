import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";


const COLOR_INCREMENT = 15;
//needs to READ the three different state values!
//child compoennts need to change the state variables!
//GENERALLY, we create state varaibles in the most parent components that needs to read or change a state value!
//if a child needs to read the state valye, the parent can pass it down as a prop
//if child needs to change the state value, parent can pass down a callback fucntion(as a prop) to change the state vlaue 
//for this app, these three pirces aree xtremely related and a precise set of well-known ways in which we updates these values
//>>>>>>>> this makes our state a great candidate for being managed by a reducer.

/** REDUCER -   function that manages changes to an object!
 * Function that gets called with two objects
 * Argument 1: Object that has ALL OUR STTAE IN IT {red: 0, green: 0, blue:0}
 * Argument 2: Object that DESCRIBES THE UPDATE WE WANT TO MAKE {colorToChange: 'red', amount: 15}
 * We look at arg2 and use it to decide how to change arg1
 * we must never change arg1 directly
 * we always return a value to be used as arg1
 */

//we use either useState(val) or reducer!

const reducer = (state, action) => {
  //state is an object that has red,green and blue property
  //action is an object that has the proprty colorToChange and amount
  switch (action.type) {
    case 'change_red':
      //overwrite existing red property!
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payloadt < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const SquareScreen = function () {
  const [state, dispatch] = useReducer(
    reducer,
    { red: 0, green: 0, blue: 0 }
  );

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red" />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green" />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        color="Blue" />
      <View style={{
        height: 150, width: 150,
        //backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
        backgroundColor: `rgb(${red},${green},${blue})`
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;

/** Community Conventions for Action Object
 * type: String that descrives the exact change operation we want to make
 * payload: Some data that is critical to the change operation
 * 
 * type: 'change_red', payload: 15
 */



/**import React, { useReducer } from "react";
 * onIncrease = { () => {
 * if(red + COLOR_INCREMENT > 255 ){
 * return;}
 * setRed(red+COLOR_INCREMENT)
 * }}
 */

/**
 * const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change === +COLOR_INCREMENT, -COLOR_INCREMENT
    if(color === 'red'){
      if(red+change > 255 || red + change < 0){
        return;
      } else {
        setRed(red+change);
      }
    }
  };
 */

/**
 * const SquareScreen = function () {
const [red, setRed] = useState(0);
const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);

//caps lock sytax for constant variable
const COLOR_INCREMENT = 15;
//helper fucntion


//reusable state updates!
const setColor = (color, change) => {
  switch (color) {
    case 'red':
      red + change > 255 || red + change < 0 ? null : setRed(red + change);
    case 'green':
      green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    case 'blue':
      blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    default:
      return;
  }
};
//two callback functions for decrease and increase

return (
  <View>
    <ColorCounter
      onIncrease={() => setColor('red', COLOR_INCREMENT)}
      onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      color="Red" />
    <ColorCounter
      onIncrease={() => setColor('green', COLOR_INCREMENT)}
      onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      color="Green" />
    <ColorCounter
      onIncrease={() => setColor('blue', COLOR_INCREMENT)}
      onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      color="Blue" />
    <View style={{
      height: 150, width: 150,
      backgroundColor: `rgb(${red},${green},${blue})`
    }} />
  </View>
);
};
 */