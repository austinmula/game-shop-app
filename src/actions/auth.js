import { LOGIN_SUCCESS, LOGIN_FAIL, SET_MESSAGE, LOGOUT } from "./type";

import { login, logout } from "../services/auth.service";

export const loginUser = (user) => (dispatch) => {
  return login(user).then(
    (data) => {
      localStorage.setItem("user", JSON.stringify(data.data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logoutUser = () => (dispatch) => {
  logout();

  dispatch({
    type: LOGOUT,
  });
};
