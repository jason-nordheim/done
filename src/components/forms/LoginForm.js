import { useContext, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginRequest } from "../../context/AuthActions";
import "./LoginForm.css";

export function LoginForm() {
  const { state, dispatch } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validUser = () => user.email && user.password;

  async function handleSubmit(event) {
    event.preventDefault();
    if (validUser()) {
      dispatch(loginRequest(user, dispatch));
      //   try {
      //     const res = await fetch("http://localhost:5000/api/login", {
      //       method: "POST",
      //       body: JSON.stringify({ ...user }),
      //       headers: { "Content-Type": "application/json" },
      //       mode: "cors",
      //     });
      //     const data = await res.json();
      //     console.log("data", data);
      //     if (data.error) {
      //       console.log(data["error"]);
      //       setError(data["error"]);
      //     } else {
      //     }
      //   } catch (error) {
      //     console.log("error", error);
      //   }
    }
  }

  function updateUser(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  console.log(state);
  const { email, password } = user;
  return !state.token ? (
    <form onSubmit={handleSubmit} className="shadow">
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
          value="Login"
          onClick={handleSubmit}
          disabled={!validUser()}
        />
      </div>
      {state.error && <span className="error">{state.error}</span>}
    </form>
  ) : (
    <h3>All logged In!</h3>
  );
}
