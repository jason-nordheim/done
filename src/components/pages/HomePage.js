import { Layout } from "../layout/Layout";
import { RegisterForm } from "../forms/RegisterForm";
//import { LoginForm } from "../forms/LoginForm";

export function HomePage() {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
}
