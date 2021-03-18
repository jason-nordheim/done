export { Login };

class AuthError extends Error {
  constructor(message, response) {
    super(message);
    this.message = message;
    this.response = response;
  }
}

async function Login(user) {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
  const data = await res.json();

  console.log("LOGIN_RESPONSE", { response: res, data });

  if (!data.token) throw new AuthError(data.error, res);

  return data.token;
}

async function Logout(dispatch) {}
