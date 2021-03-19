import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { registerRequest } from "../../context/AuthActions";
import "./RegisterForm.css";

export function RegisterForm() {
  const { state, dispatch } = useContext(AuthContext);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function validUser() {
    return user.email && user.password && user.first_name && user.last_name;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validUser()) {
      dispatch(registerRequest(user, dispatch));
    }
  }

  function updateUser(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const { first_name, last_name, email, password } = user;
  return !state.token ? (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={first_name}
          onChange={updateUser}
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={last_name}
          onChange={updateUser}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={updateUser}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={updateUser}
        />
      </div>
      <div>
        <input
          type="submit"
          value="Register"
          onClick={handleSubmit}
          disabled={!validUser()}
        />
      </div>
      {state.error && <span className="error">{state.error}</span>}
    </form>
  ) : (
    <h1>Already Logged In</h1>
  );
}
