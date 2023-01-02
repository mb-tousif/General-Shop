import axios from "axios";
export const GET_TOP_OFFER_SUCCESS = "getTopOfferSuccess";
export const GET_TOP_OFFER_FAIL = "getTopOfferFail";
export const GET_TOP_OFFER_DETAIL_REQUEST = "getTopOfferDetailRequest";
export const GET_TOP_OFFER_DETAIL_SUCCESS = "getTopOfferDetailSuccess";
export const GET_TOP_OFFER_DETAIL_FAIL = "getTopOfferDetailFail";
export const GET_TOP_OFFER_DETAIL_RESET = "getTopOfferDetailReset";
//* An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.type

const URL = "https://general-shop-server-code.vercel.app";

export const getTopOffer = () => async (dispatch) => {
  //* action can also be used for api calls,
  try {
    const { data } = await axios.get(`${URL}/topOffers`);
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

export const getTopOfferDetail = (id) => async(dispatch) => {
  try {
    // console.log( id);
    dispatch({type: GET_TOP_OFFER_DETAIL_REQUEST})
    const { data } = await axios.get(`${URL}/topOffer/${id}`);
    dispatch({type: GET_TOP_OFFER_DETAIL_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: GET_TOP_OFFER_DETAIL_FAIL, payload: error.message})
  }
}
/**
 * obj={
 * data:
 * status:
 * header:
 * }
 * obj.data
 * {data} = obj
 */
