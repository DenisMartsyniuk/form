import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "bus/SignIn/actions";

const API_URL = "http://127.0.0.1:5000";

const API = {
  SIGN_IN: `${API_URL}/login`,
};

export function useSignIn() {
  const dispatch = useDispatch();

  const handleSignIn = useCallback(
    async (params) => {
      dispatch(authActions.signIn.start());

      try {
        const responce = await fetch(API.SIGN_IN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(params),
        });

        if (responce.status !== 200) {
          throw new Error(responce.status);
        }

        const data = await responce.json();

        localStorage.setItem("token", data.accessToken);

        dispatch(authActions.signIn.success(data));
      } catch (e) {
        dispatch(authActions.signIn.error(e));
      }
    },
    [dispatch]
  );

  return {
    handleSignIn,
  };
}
