import { createContext, useContext, useReducer } from "react";
import { authReducer, initAuthState } from "./AuthReducer";

// create context
const AuthContext = createContext();

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
