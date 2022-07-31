//* A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state.

import { GET_FASHION_DETAIL_FAIL, GET_FASHION_DETAIL_REQUEST, GET_FASHION_DETAIL_RESET, GET_FASHION_DETAIL_SUCCESS, GET_FASHION_FAIL, GET_FASHION_SUCCESS } from "../Action/fashionAction";

//*Pure functions are functions that do not have any side effects and will return the same results if the same arguments are passed in.

// (state=default/initial value,action)
export const getFashionReducer = (state = {fashion: []}, action)=>{
    switch (action.type) {
        case GET_FASHION_SUCCESS:
            return { fashion: action.payload};

        case GET_FASHION_FAIL:
            return { error: action.payload};
            
        default:
            return state;
    }
};

export const getFashionDetailReducer =(state={fashion:{}}, action) => {
    switch (action.type) {
        case GET_FASHION_DETAIL_REQUEST:
            return { loading: true}
        case GET_FASHION_DETAIL_SUCCESS:
            return { loading: false, fashion: action.payload}
        case GET_FASHION_DETAIL_FAIL:
            return { loading: false, error: action.payload}
        case GET_FASHION_DETAIL_RESET:
            return { loading: false, fashion: {}}
        default:
            return state;
    }
};