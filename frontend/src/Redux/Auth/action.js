import * as types from "./actionTypes";
import axios from "axios";
import {
  USER_LOGIN,
  ADD_NEW_ADDRESS,
  USER_SIGNUP,
  USER_PROFILE,
} from "../.././Utils/Api";
const token = localStorage.getItem("token");

export const AddNewAddress = (payload) => (dispatch) => {
  dispatch({ type: types.USER_ADDRESS_REQUEST });
  return axios
    .patch(ADD_NEW_ADDRESS, payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.USER_ADDRESS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_ADDRESS_FAILURE, payload: err });
    });
};

export const userSignup = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(USER_SIGNUP, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
    });
};

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(USER_LOGIN, payload)
    .then((res) => {
      //   console.log(res.data.message);
      return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });
};

export const getProfile = (token) => async (dispatch) => {
  return await axios
    .get(USER_PROFILE, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return dispatch({ type: types.USER_PROFILE_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
