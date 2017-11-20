import HomeScreen from "./src/HomeScreen/index.js";
import LoginScreen from "./src/LoginScreen/LoginScreen.js";
import {StackNavigator} from 'react-navigation';

const LoginRouter = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Login: { screen: LoginScreen },
    }
);

export default LoginRouter;
