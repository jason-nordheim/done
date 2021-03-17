import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [state, setState] = useState({});

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export const AuthConsumer = AuthContext.Consumer;
