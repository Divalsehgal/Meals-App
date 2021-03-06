import React from "react";
import { Text, View, StyleSheet } from "react-native";

function DefaultText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
  },
});
export default DefaultText;
