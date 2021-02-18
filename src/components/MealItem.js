import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DefaultText from "./DefaultText";

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealsHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealsDetail }}>
            <DefaultText> {props.duration}</DefaultText>
            <DefaultText> {props.complexity.toUpperCase()}</DefaultText>
            <DefaultText> {props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealsHeader: {
    height: "85%",
  },
  mealsDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",

    textAlign: "center",
  },
});
export default MealItem;
