import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AuthenticateContainer } from "../containers/AuthenticateContainer";
import { Layout } from "../layout/Layout";

export function AccountPage() {
  const authContext = useContext(AuthContext);
  return (
    <Layout>
      {authContext.state.token ? <h1>Welcome</h1> : <AuthenticateContainer />}
    </Layout>
  );
}
