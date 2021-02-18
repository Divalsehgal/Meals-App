import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButtons";
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux"
import { setFilters } from "../store/actions/meals";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        thumbColor={Colors.primaryColor}
        trackColor={{ true: Colors.primaryColor }}
        value={props.value}
        onValueChange={(value) => props.onChange(value)}
      />
    </View>
  );
};
const FilterScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appliedFactors = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      lactose: isLactoseFree,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFactors))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian,dispatch]);


  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text styles={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={setIsLactoseFree}
      />
      <FilterSwitch label="Vegan" value={isVegan} onChange={setisVegan} />

      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={setIsVegetarian}
      />
    </View>
  );
};
FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Screen",
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

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",

    width: "80%",
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    margin: 20,
    textAlign: "center",
  },
});
export default FilterScreen;
