import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getFurnitureReducer } from "../Reducer/getFurnitureReducer";
import { getTopOfferReducer } from "../Reducer/getTopOfferReducer";

//* multiple reducer have to get combined with combineReducer fn
//* combineReducer takes an obj, inside that obj we pass multiple reducers
const reducer = combineReducers({
  getFurniture: getFurnitureReducer,
  getTopOffer: getTopOfferReducer,
});

const middleware = [thunk];

//* createStore takes 2 args: reducers,middleware
//* redux-thunk used in action for api call
//*to use middleware in devtools, e have 2 use applyMiddleware
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
