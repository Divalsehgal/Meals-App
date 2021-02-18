import { MEALS } from "../../data/dummy-data";
import { SET_FILTER, TOGGLE_FAVOURITE } from "../actions/meals";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favouriteMeals: updatedFavMeals,
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);

        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
      return {
        ...state,
      };
    case SET_FILTER:
      const appliedFilter = action.payload;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilter.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilter.vegan && !meal.isVegan) return false;
        if (appliedFilter.lactose && !meal.isLactoseFree) return false;
        if (appliedFilter.vegetarian && !meal.isVegetarian) return false;
        return true;
      });

      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
      };

    default:
      return state;
  }
};
export default mealsReducer;
