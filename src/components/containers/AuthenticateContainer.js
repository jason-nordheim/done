import { RegisterForm } from "../forms/RegisterForm";
import { LoginForm } from "../forms/LoginForm";
import { useState } from "react";

const forms = {
  login: "login",
  register: "register",
};

export function AuthenticateContainer() {
  const [form, setForm] = useState(forms.login);

  function switchView(event) {
    event.preventDefault();
    form === forms.login ? setForm(forms.register) : setForm(forms.login);
  }

  return form === forms.login ? (
    <div className="card shadow">
      <LoginForm />
      <span>
        Don't have an account? Register <a onClick={switchView}>here</a>!
      </span>
    </div>
  ) : (
    <div className="card shadow">
      <RegisterForm />
      <span>
        Already have an account? Login <a onClick={switchView}>here</a>
      </span>
    </div>
  );
}
