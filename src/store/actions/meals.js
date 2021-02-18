export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SET_FILTER= "SET_FILTER";

export const toggleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    payload: id,
  };
};
export const setFilters=(filterSettings)=>{
  return {
    type:SET_FILTER,
    payload:filterSettings
  }
}