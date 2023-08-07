import {
  DELETE_WISHLIST_ERROR,
  DELETE_WISHLIST_LOADING,
  DELETE_WISHLIST_SUCCESS,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_LOADING,
  GET_WISHLIST_SUCCESS,
  POST_WISHLIST_ERROR,
  POST_WISHLIST_LOADING,
  POST_WISHLIST_SUCCESS,
} from "./type";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const WishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WISHLIST_LOADING:
      return { ...state, loading: true, error: false, data: [] };
    case GET_WISHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case POST_WISHLIST_LOADING:
      return { ...state, loading: true, error: false, data: [] };
    case POST_WISHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case POST_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    case DELETE_WISHLIST_LOADING:
      return { ...state, loading: true, error: false, data: [] };
    case DELETE_WISHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    default:
      return {
        ...state,
      };
  }
};
