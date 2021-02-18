import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

function CategoryGridTile(props) {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation:5
  },
  container: {
    height: "100%",
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});
export default CategoryGridTile;
