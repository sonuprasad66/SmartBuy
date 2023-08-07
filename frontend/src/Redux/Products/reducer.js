import * as types from "./actionTypes";

const initialState = {
  products: [],
  filterProducts: [],
  productsDetails: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };

    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, products: [] };

    case types.GET_FILTER_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_FILTER_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterProducts: payload,
      };

    case types.GET_FILTER_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, filterProducts: [] };

    case types.GET_PRODUCTS_DETAILS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productsDetails: payload,
      };

    case types.GET_PRODUCTS_DETAILS_FAILURE:
      return { ...state, isLoading: false, isError: true, productsDetails: {} };

    case types.SORTED_BY_PRICE_REQUEST:
      return { ...state, isLoading: true };

    case types.SORTED_BY_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterProducts: payload,
      };

    case types.SORTED_BY_PRICE_FAILURE:
      return { ...state, isLoading: false, isError: true, filterProducts: [] };

    case types.SORTED_BY_DISCOUNT_REQUEST:
      return { ...state, isLoading: true };

    case types.SORTED_BY_DISCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterProducts: payload,
      };

    case types.SORTED_BY_DISCOUNT_FAILURE:
      return { ...state, isLoading: false, isError: true, filterProducts: [] };

    case types.SORTED_BY_RATING_REQUEST:
      return { ...state, isLoading: true };

    case types.SORTED_BY_RATING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterProducts: payload,
      };

    case types.SORTED_BY_RATING_FAILURE:
      return { ...state, isLoading: false, isError: true, filterProducts: [] };

    default:
      return state;
  }
};
