import * as types from "./actionTypes";

const initialState = {
  token: null,
  currentUser: {},
  role: null,
  isLoading: false,
  isError: false,
  isAuth: false,
  id: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
      

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        role: payload.role,
        id: payload._id,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: null,
      };

    case types.USER_SIGNUP_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        currentUser: payload,
      };

    case types.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
