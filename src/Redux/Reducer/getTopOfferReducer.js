//* A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state.

import { GET_TOP_OFFER_DETAIL_FAIL, GET_TOP_OFFER_DETAIL_REQUEST, GET_TOP_OFFER_DETAIL_RESET, GET_TOP_OFFER_DETAIL_SUCCESS, GET_TOP_OFFER_FAIL, GET_TOP_OFFER_SUCCESS } from "../Action/topOfferAction";

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

export const getTopOfferDetailReducer = (state = { topOffer: {} }, action) => {
  switch (action.type) {
    case GET_TOP_OFFER_DETAIL_REQUEST:
      return { loading: true };
    case GET_TOP_OFFER_DETAIL_SUCCESS:
      return { loading: false, topOffer: action.payload };
    case GET_TOP_OFFER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case GET_TOP_OFFER_DETAIL_RESET:
      return { loading: false, topOffer: {} };
    default:
      return state;
  }
};
