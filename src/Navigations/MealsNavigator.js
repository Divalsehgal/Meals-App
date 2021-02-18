import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer"
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMeals from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FavouritesScreen from "../screens/FavouritesScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FilterScreen from "../screens/FilterScreen";
import { Text } from "react-native";

const defaultConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle:{
fontFamily:"open-sans"
  },
  headerBackTitleStyle:{
    fontFamily:"open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoriesMeals: {
      screen: CategoriesMeals,
    },
    MealDetail: {
      screen: MealDetailsScreen,
    },
  },
  {
    defaultNavigationOptions: defaultConfig,
  }
);

const FavouriteNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultConfig,
  }
);
const MealsFavTabNavigator = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel:<Text style={{fontFamily:"open-sans"}}>
Meals
          </Text>
      },
    },
    Favourites: {
      screen: FavouriteNavigator,
      navigationOptions: {
        tabBarLabel: "Favourites !",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.accentColor,
      },
    },
  },
  {
    activeColor: "white",
    shifting: true,
  }
);

const FilterNavigator=createStackNavigator({
  Filters:FilterScreen
},  {
  defaultNavigationOptions: defaultConfig,
})
const MainNavigator=createDrawerNavigator({
  Mealsfav:{screen:MealsFavTabNavigator,navigationOptions:{
    drawerLabel:"Meals"

  }},
  Filters:FilterNavigator,
},{
  contentOptions:{
    activeTintColor:Colors.accentColor,
    labelStyle:{
      fontFamily:"open-sans"
    }

  }
});
export default createAppContainer(MainNavigator);
