import { LOGIN, LOGOUT } from "./authTypes";
import { httpRequest, developerName } from "../../http/httpRequest";
import { showLoader, hideLoader, showAlert } from "../app/appActions";

export function login(formData, username) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await httpRequest("/login" + developerName, "POST", formData);

      if (res.status === "error") {
        const usernameMessage = res.message.username
          ? "Username: " + res.message.username
          : "";
        const passwordMessage = res.message.password
          ? "Password: " + res.message.password
          : "";
        return dispatch(showAlert(usernameMessage + " " + passwordMessage));
      }

      localStorage.setItem("token", res.message.token);
      localStorage.setItem("username", username);

      dispatch({ type: LOGIN, payload: res.message.token, username });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
export function logout() {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    dispatch({ type: LOGOUT });
  };
}
export function checkLogin() {
  return (dispatch) => {
    const lcToken = localStorage.getItem("token") || null;
    const lcUsername = localStorage.getItem("username") || "";

    dispatch({ type: LOGIN, payload: lcToken, username: lcUsername });
  };
}
