import { AUTH_CONSTANTS } from "./AuthConstants";

// destructuring exports from other files
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

export const initAuthState = {
  token: undefined,
  pendingRequest: false,
  error: undefined,
};
export const authReducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        pendingRequest: true,
        error: undefined,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pendingRequest: false,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pendingRequest: false,
        error: action.payload,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        pendingRequest: true,
        error: undefined,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        pendingRequest: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        pendingRequest: false,
        error: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        pendingRequest: true,
        error: undefined,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        pendingRequest: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        pendingRequest: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unsupported Action: "${action.type}"`);
  }
};
