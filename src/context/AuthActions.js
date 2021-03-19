import { Login, Register } from "../services/AuthService";
import { AUTH_CONSTANTS } from "./AuthConstants";
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = AUTH_CONSTANTS;

function loginRequest(user, dispatch) {
  Login(user)
    .then((data) => {
      dispatch(loginSuccess(data.token));
    })
    .catch((error) => {
      // todo: dispatch additional actions depending results from authService
      dispatch(loginFailure("Invalid Credentials"));
    });
  return { type: LOGIN_REQUEST, payload: null };
}
function loginFailure(error) {
  return { type: LOGIN_FAILURE, payload: error };
}
function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, payload: token };
}
function registerRequest(user, dispatch) {
  Register(user)
    .then((data) => {
      console.log("RR", data);
      dispatch(loginRequest(user, dispatch));
    })
    .catch((error) => {
      console.log("RF", error);
      dispatch(registerFailure(error.message));
    });
  return { type: REGISTER_REQUEST, payload: null };
}
function registerSuccess() {
  return { type: REGISTER_SUCCESS, payload: null };
}
function registerFailure(error) {
  return { type: REGISTER_FAILURE, payload: error };
}
function logoutRequest() {
  return { type: LOGOUT_REQUEST, payload: null };
}
function logoutSuccess() {
  return { type: LOGOUT_SUCCESS, payload: null };
}
function logoutFailure() {
  return { type: LOGOUT_FAILURE, payload: null };
}
export {
  loginRequest,
  loginFailure,
  loginSuccess,
  registerRequest,
  registerSuccess,
  registerFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
};
