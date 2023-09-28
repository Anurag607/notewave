import { combineReducers } from "redux";
import sidebarSlice from "./reducers/sidebarSlice";
import searchSlice from "./reducers/searchSlice";
import noteSlice from "./reducers/noteSlice";
import menuSlice from "./reducers/menuSlice";
import filterSlice from "./reducers/filterSlice";
import categorySlice from "./reducers/categorySlice";
import formSlice from './reducers/formSlice';
import colorSlice from "./reducers/colorSlice";

export default combineReducers({
  sidebar: sidebarSlice,
  searchBar: searchSlice,
  notes: noteSlice,
  menu: menuSlice,
  filter: filterSlice,
  cateogry: categorySlice,
  form: formSlice,
  color: colorSlice,
});
