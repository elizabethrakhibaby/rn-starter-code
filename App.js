import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen  from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen"
/**
 * my name is elizabeth
 * stack navigator allows us to change/naviagte the content of screen
 * Props are not limited to primitive elements(pass props e.g <Text style ={styles.textStyle}> created by RN
 * Components, that we create, can also receive props!
 *  
 */

const navigator = createStackNavigator(
  {

    //LHS are route objects!
    Home: HomeScreen,
    Components : ComponentsScreen,
    ListOfFriends : ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
