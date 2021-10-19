import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MealsScreen from "./screens/Meals";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import Modal from "./screens/Modal";

const OnBoardingNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: "Register",
  }
);

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen,
    },
  },
  {
    initialRouteName: "Meals",
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const BaseStack = createSwitchNavigator(
  {
    OnBoarding: OnBoardingNavigator,
    Root: RootStack,
  },
  {
    initialRouteName: "OnBoarding",
  }
);

export default createAppContainer(BaseStack);
