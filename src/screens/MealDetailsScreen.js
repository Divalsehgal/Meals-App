import React, { useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  ScrollView,
} from "react-native";
import HeaderButton from "../components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite } from "../store/actions/meals";
const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText> {props.children}</DefaultText>
    </View>
  );
};
const MealDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const currentFavouriteMealisFavourite = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id == mealId)
  );
  const dispatch = useDispatch();

  const togglefavouritehandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: togglefavouritehandler });
  }, [togglefavouritehandler]);

  useEffect(() => {
    props.navigation.setParams({ currentFav: currentFavouriteMealisFavourite });
  }, [currentFavouriteMealisFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText> {selectedMeal.duration}</DefaultText>
        <DefaultText> {selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText> {selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>

        {selectedMeal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient} </ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>

        {selectedMeal.steps.map((steps) => (
          <ListItem key={steps}>{steps} </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavourites = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("currentFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite Screen"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavourites}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealsDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  details: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 23,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailsScreen;
