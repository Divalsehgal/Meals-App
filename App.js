import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import {createStore,combineReducers,compose } from "redux";
import { AppLoading } from "expo";
import {Provider} from "react-redux"
import MealsNavigator from "./src/Navigations/MealsNavigator";
import { enableScreens } from "react-native-screens";
import mealsReducer from "./src/store/reducer/meals";
enableScreens();
const rootReducer=combineReducers({meals:mealsReducer})
const store=createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <Provider store={store}><MealsNavigator /></Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
