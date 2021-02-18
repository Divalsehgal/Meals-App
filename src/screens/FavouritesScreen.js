import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButtons";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
const FavouritesScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.favouriteMeals);
  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favourite meals found. Start adding more !</DefaultText>
      </View>
    );
  }

  return (
    <MealList navigation={props.navigation} displayMeals={availableMeals} />
  );
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favourite Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
export default FavouritesScreen;
