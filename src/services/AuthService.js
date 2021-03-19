class AuthError extends Error {
  constructor(message, response) {
    super(message);
    this.message = message;
    this.response = response;
  }
}

async function Register(user) {
  const res = await fetch("http://localhost:5000/api/users", {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });

  if (res.status !== 200) {
    throw new AuthError("Registration Failed", res);
  }

  const data = await res.json();
  return data;
}

async function Login(user) {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });

  if (res.status !== 200) {
    throw new AuthError("Unauthorized", res);
  }
  const data = await res.json();
  return data;
}

async function Logout(dispatch) {}
export { Register, Login, Logout, AuthError };
