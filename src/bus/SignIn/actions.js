import { createAction } from "@reduxjs/toolkit";

const API_URL = "https://localhost:5000";

const API = {
  SIGN_IN: `${API_URL}/login`,
};

export const authActions = {
  signIn: {
    request: createAction("SIGN_IN_REQUEST", ({ username, password }) => ({
      payload: {
        url: API.SIGN_IN,
        method: "post",
        data: { username, password },
      },
    })),
    start: createAction("SIGN_IN_START"),
    success: createAction("SIGN_IN_SUCCESS"),
    error: createAction("SIGN_IN_ERROR"),
  },
};
