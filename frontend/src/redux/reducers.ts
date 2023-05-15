import { combineReducers } from "redux";
import shoppingCartReducer from "./slices/shoppingCart/shoppingCart";
import storeItemsReducer from "./slices/storeItems/storeItems";
import categoriesReducer from "./slices/categories/categories";
import collectionsReducer from "./slices/collections/collections";
import titleReducer from "./slices/title/title";

const rootReducer = combineReducers({
  shoppingCartReducer,
  storeItemsReducer,
  categoriesReducer,
  collectionsReducer,
  titleReducer,
});

export default rootReducer;
