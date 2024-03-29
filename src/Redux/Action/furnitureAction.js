import axios from "axios";

//Action Type
export const GET_FURNITURE_SUCCESS = "getFurnitureSuccess";
export const GET_FURNITURE_FAIL = "getFurnitureFail";

export const GET_FURNITURE_DETAIL_REQUEST = "getFashionDetailRequest";
export const GET_FURNITURE_DETAIL_SUCCESS = "getFashionDetailSuccess";
export const GET_FURNITURE_DETAIL_FAIL = "getFashionDetailFail";
export const GET_FURNITURE_DETAIL_RESET = "getFashionDetailReset";

//* An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.type

const URL = "https://general-shop-server-code.vercel.app";

export const getFurniture = () => async (dispatch) => {
  //* action can also be used for api calls,
  try {
    const { data } = await axios.get(`${URL}/furnitures`);
    //  console.log(data)
    //  dispatch fn internally calls reducer
    //  we dispatch values in useReducer hook
    dispatch({
      type: GET_FURNITURE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Error while calling api", error.message);
    dispatch({ type: GET_FURNITURE_FAIL, payload: error.message });
  }
};

export const getFurnitureDetail = (id) => async (dispatch) => {
  try {
    dispatch({type: GET_FURNITURE_DETAIL_REQUEST})
    const { data } = await axios.get(`${URL}/furniture/${id}`);
    dispatch({type: GET_FURNITURE_DETAIL_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: GET_FURNITURE_DETAIL_FAIL, payload: error.message})
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
