//* A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state.

import { GET_TOP_OFFER_FAIL, GET_TOP_OFFER_SUCCESS } from "../Action/topOfferAction";

//*Pure functions are functions that do not have any side effects and will return the same results if the same arguments are passed in.
// (state=default/initial value,action)
export const getTopOfferReducer = (state = { topOffer: [] }, action) => {
  switch (action.type) {
    case GET_TOP_OFFER_SUCCESS:
      return { topOffer: action.payload };
    case GET_TOP_OFFER_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
