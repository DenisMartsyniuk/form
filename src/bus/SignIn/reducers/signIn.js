import { createReducer } from "@reduxjs/toolkit";

import { authActions } from "bus/SignIn/actions";

const token = localStorage.getItem("token");

const initialState = {
  token: token,
  error: null,
  loading: false,
  succeed: false,
};

const signInReducer = createReducer(initialState, {
  [authActions.signIn.start]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [authActions.signIn.success]: (state, { payload }) => ({
    ...state,
    succeed: true,
    loading: false,
    token: payload.accessToken,
  }),
  [authActions.signIn.error]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error.code,
  }),
});

export default signInReducer;
