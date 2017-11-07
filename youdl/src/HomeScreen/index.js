import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import LoginScreen from "../LoginScreen/LoginScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Login: { screen: LoginScreen },
        Chat: { screen: MainScreenNavigator },
        Profile: { screen: Profile }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;
