//* A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state.

import { GET_FURNITURE_FAIL, GET_FURNITURE_SUCCESS } from "../Action/furnitureAction";

//*Pure functions are functions that do not have any side effects and will return the same results if the same arguments are passed in.
// (state=default/initial value,action)
export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_FURNITURE_SUCCESS:
      return { furniture: action.payload };
    case GET_FURNITURE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
