import { Layout } from "../layout/Layout";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router";

export function HomePage() {
  console.log("CONTEXT", AuthContext);
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <Layout>
      {!authContext.token ? (
        <Redirect to="/account" />
      ) : (
        <div>
          <h1>Welcome to Done!</h1>
        </div>
      )}
    </Layout>
  );
}
