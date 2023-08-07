import axios from "axios";
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

import { WISHLIST_DATA } from "../.././Utils/Api";

const token = localStorage.getItem("token");

export const getWishListData = (token) => async (dispatch) => {
  dispatch({ type: GET_WISHLIST_LOADING });
  try {
    const res = await axios.get(WISHLIST_DATA, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return dispatch({ type: GET_WISHLIST_SUCCESS, payload: res.data });
  } catch (er) {
    return dispatch({ type: GET_WISHLIST_ERROR });
  }
};

export const addWishListData = (data) => async (dispatch) => {
  dispatch({ type: POST_WISHLIST_LOADING });
  try {
    const res = await axios.post(WISHLIST_DATA, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: POST_WISHLIST_SUCCESS, payload: res.data });
    dispatch(getWishListData(token));
    return res.data;
  } catch (er) {
    return dispatch({ type: POST_WISHLIST_ERROR });
  }
};

export const deleteWishListData = (id) => async (dispatch) => {
  dispatch({ type: DELETE_WISHLIST_LOADING });
  try {
    const res = await axios.delete(`${WISHLIST_DATA}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: DELETE_WISHLIST_SUCCESS, payload: res.data });
    dispatch(getWishListData(token));
    return res.data;
  } catch (er) {
    return dispatch({ type: DELETE_WISHLIST_ERROR });
  }
};
