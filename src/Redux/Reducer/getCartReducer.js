import { ADD_TO_CART_FASHION, ADD_TO_CART_FURNITURE, ADD_TO_CART_TOP_OFFER, DELETE_CART_FASHION, DELETE_CART_FURNITURE, DELETE_CART_TOP_OFFER } from "../Action/CartAction";


export const getFashionCartReducer = (state = { CartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_FASHION:
      const item = action.payload;
      const exist = state.CartItems.find(fashion=> fashion._id === item._id)
      if (exist){
        return { ...state, CartItems: state.CartItems.map(data=> data.fashion === exist.fashion ? item : data)}
      }else{
        return { ...state, CartItems: [ ...state.CartItems, item]}
      }

    case DELETE_CART_FASHION:
      return { ...state, CartItems: state.CartItems.filter(fashion => fashion._id !== action.payload)};
    default:
      return state;
  }
};

export const getFurnitureCartReducer = (state = { CartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_FURNITURE:
      const item = action.payload;
      const exist = state.CartItems.find(furniture=> furniture._id === item.id)
      if (exist){
        return { ...state, CartItems: state.CartItems.map(data=> data.furniture === exist.furniture ? item : data)}
      }else{
        return { ...state, CartItems: [ ...state.CartItems, item]}
      }

    case DELETE_CART_FURNITURE:
      return { ...state, CartItems: state.CartItems.filter(furniture => furniture._id !== action.payload)};
    default:
      return state;
  }
};

export const getTopOfferCartReducer = (state = { CartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_TOP_OFFER:
      const item = action.payload;
      const exist = state.CartItems.find(topOffer=> topOffer._id === item.id)
      if (exist){
        return { ...state, CartItems: state.CartItems.map(data=> data.fashion === exist.fashion ? item : data)}
      }else{
        return { ...state, CartItems: [ ...state.CartItems, item]}
      }
    case DELETE_CART_TOP_OFFER:
      return { ...state, CartItems: state.CartItems.filter(topOffer => topOffer._id !== action.payload)};
    default:
      return state;
  }
};
