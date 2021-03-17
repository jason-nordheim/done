import { useEffect, useState } from "react";
import "./RegisterForm.css";

export function RegisterForm() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function validUser() {
    return user.email && user.password && user.first_name && user.last_name;
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 2000);
    }
  }, [error]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (validUser()) {
      try {
        console.log(user);
        const res = await fetch("http://localhost:5000/api/users", {
          method: "POST",
          body: JSON.stringify({ ...user }),
          headers: { "Content-Type": "application/json" },
          mode: "cors",
        });
        const data = await res.json();
        if (data.error) {
          console.log(data["error"]);
          setError(data["error"]);
        } else {
          console.log(data);
        }
      } catch (error) {}
    }
  }

  function updateUser(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const { first_name, last_name, email, password } = user;
  return (
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
      {error && <span className="error">{error}</span>}
    </form>
  );
}
