import { combineReducers } from "redux";
import sidebarSlice from "./reducers/sidebarSlice";
import searchSlice from "./reducers/searchSlice";
import coinSlice from "./reducers/jobSlice";
import menuSlice from "./reducers/menuSlice";
import filterSlice from "./reducers/filterSlice";
import countrySlice from "./reducers/countrySlice";

export default combineReducers({
  sidebar: sidebarSlice,
  searchBar: searchSlice,
  coins: coinSlice,
  menu: menuSlice,
  filter: filterSlice,
  country: countrySlice,
});
