import axios from "axios";
export const ADD_TO_CART_FASHION = "addToCartFashion";
export const ADD_TO_CART_FASHION_ERROR = "addToCartFashionError";
export const DELETE_CART_FASHION = "deleteCartFashion";
export const RESET_CART_FASHION = "resetCartFashion";
export const ADD_TO_CART_FURNITURE = "addToCartFurniture";
export const ADD_TO_CART_FURNITURE_ERROR = "addToCartFurnitureError";
export const DELETE_CART_FURNITURE = "deleteCartFurniture";
export const RESET_CART_FURNITURE = "resetCartFurniture";
export const ADD_TO_CART_TOP_OFFER = "addToCartTopOffer";
export const ADD_TO_CART_TOP_OFFER_ERROR = "addToCartTopOfferError";
export const DELETE_CART_TOP_OFFER = "deleteCartTopOffer";
export const RESET_CART_TOP_OFFER = "resetCartTopOffer";

const URL = "https://general-shop-server-code.vercel.app";


export const addToCartFashion = (id, quantity) => async(dispatch)=> {
    try {
        const {data} = await axios.get(`${URL}/fashion/${id}`)
        dispatch({type: ADD_TO_CART_FASHION, payload: {...data, quantity}})
    } catch (error) {
        dispatch({type: ADD_TO_CART_FASHION_ERROR, payload: error.message})
    }
}

export const addToCartFurniture = (id, quantity) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/furniture/${id}`)
        dispatch({type: ADD_TO_CART_FURNITURE, payload: {...data, quantity}})
    } catch (error) {
        dispatch({type: ADD_TO_CART_FURNITURE_ERROR, payload: error.message})
    }
}
export const addToCartTopOffer = (id, quantity) => async(dispatch)=>{
    try {
        const { data } = await axios.get(`${URL}/topOffer/${id}`)
        dispatch({type: ADD_TO_CART_TOP_OFFER, payload: {...data, quantity}})
    } catch (error) {
        dispatch({type: ADD_TO_CART_TOP_OFFER_ERROR, payload: error.message})
    }
}
export const deleteCartFashion = (id) => (dispatch) => {
    dispatch({type: DELETE_CART_FASHION, payload: id})
}
export const deleteCartFurniture = (id) => (dispatch)=>{
    dispatch({type: DELETE_CART_FURNITURE, payload: id})
}
export const deleteCartTopOffer = (id) => (dispatch)=>{
    dispatch({type: DELETE_CART_TOP_OFFER, payload: id})
}