import React from "react";
import {
  StyleSheet,

  FlatList,

} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.colour}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoriesMeals",
            params: {
              categoriesId: itemData.item.id,
            },
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
      data={CATEGORIES}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: ()=>(
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,

    alignItems: "center",
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
