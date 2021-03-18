import { Login } from "../services/AuthService";
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

async function loginRequest(user, dispatch) {
  Login(user)
    .then((token) => {
      console.log("LR_TOKEN", token);
    })
    .catch((error) => {
      console.error("LR_ERROR", error);
    });
  // todo: dispatch additional actions depending results from authService
  return { type: LOGIN_REQUEST, payload: null };
}
async function loginFailure(error) {
  return { type: LOGIN_FAILURE, payload: error };
}
async function loginSuccess() {
  return { type: LOGIN_SUCCESS, payload: null };
}
async function registerRequest() {
  return { type: REGISTER_REQUEST, payload: null };
}
async function registerSuccess() {
  return { type: REGISTER_SUCCESS, payload: null };
}
async function registerFailure() {
  return { type: REGISTER_FAILURE, payload: null };
}
async function logoutRequest() {
  return { type: LOGOUT_REQUEST, payload: null };
}
async function logoutSuccess() {
  return { type: LOGOUT_SUCCESS, payload: null };
}
async function logoutFailure() {
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
