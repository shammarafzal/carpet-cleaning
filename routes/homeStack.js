import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignupScreen from "../screens/signup_screen";
import PinCodeScreen from "../screens/pin_code_screen";

const screens = {
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  PinCodeScreen: {
    screen: PinCodeScreen,
    navigationOptions: {
      headerShown: true,
      
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
