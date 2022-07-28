import axios from "axios";

//* An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.type .

//Action Type
export const GET_FASHION_SUCCESS = "getFashionSuccess"
export const GET_FASHION_FAIL = "getFashionFail";

// Data API URL
const URL = "https://fathomless-brushlands-54478.herokuapp.com/fashion";

export const getFashion = () => async (dispatch) =>{
  //* action can also be used for api calls,
  try {
    const { data } = await axios.get(URL);
    //  console.log(data)
    //  dispatch fn internally calls reducer
    //  we dispatch values in useReducer hook
    dispatch({
        type: GET_FASHION_SUCCESS,
        payload: data,
    });
  } catch (error) {
    console.log("Error while calling api", error.message);
    dispatch({
        type: GET_FASHION_FAIL,
        payload: error.message
    });
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