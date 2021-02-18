import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";
import {useSelector} from "react-redux"
function MealList(props) {
  const favouriteMeals=useSelector(state=>state.meals.favouriteMeals)
  const renderMealItem = (itemData) => {
    const isFavourite=favouriteMeals.some(meal=>meal.id===itemData.item.id)
    return (
      <MealItem
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        title={itemData.item.title}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle:itemData.item.title,
              isFav:isFavourite
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        data={props.displayMeals}
        style={{ width: "100%" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default MealList;
