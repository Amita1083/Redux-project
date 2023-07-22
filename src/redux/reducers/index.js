//combine all reducers
// now we have created actions, action-types,reducer, combime the reducers 
//now create store
import { combineReducers } from "redux";
import { productReducer,selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductsReducer,
})
export default reducers;