import axios from "axios";
export const GET_TOP_OFFER_SUCCESS = "getTopOfferSuccess";
export const GET_TOP_OFFER_FAIL = "getTopOfferFail";
//* An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.type

const URL = "http://localhost:4000/topOffers";

export const getTopOffer = () => async (dispatch) => {
  //* action can also be used for api calls,
  try {
    const { data } = await axios.get(URL);
      //  console.log(data)
    //    dispatch fn internally calls reducer
    //* we dispatch values in useReducer hook
    dispatch({
      type: GET_TOP_OFFER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Error while calling api", error.message);
    dispatch({ type: GET_TOP_OFFER_FAIL, payload: error.message });
  }
};
/**
 * obj={
 * data:
 * status:
 * header:
 * }
 * obj.data
 * {data} = obj
 */
