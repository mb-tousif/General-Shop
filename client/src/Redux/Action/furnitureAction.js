import axios from "axios";
export const GET_FURNITURE_SUCCESS = "getFurnitureSuccess";
export const GET_FURNITURE_FAIL = "getFurnitureFail";
//* An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.type

const URL = "http://localhost:4000/furnitures";

export const getFurniture = () => async (dispatch) => {
  //* action can also be used for api calls,
  try {
    const { data } = await axios.get(URL);
    //    console.log(res)
    //    dispatch fn internally calls reducer
    //* we dispatch values in useReducer hook
    dispatch({
      type: GET_FURNITURE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Error while calling api", error.message);
    dispatch({ type: GET_FURNITURE_FAIL, payload: error.message });
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