import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesMeals = (props) => {
  const catId = props.navigation.getParam("categoriesId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText> No Meals found , maybe check your filters</DefaultText>
      </View>
    );
  }
  return <MealList displayMeals={displayMeals} navigation={props.navigation} />;
};

CategoriesMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoriesId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default CategoriesMeals;
