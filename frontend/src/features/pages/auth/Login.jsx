import React, { useState } from "react";
import "../../styles/auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="login-page">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              value={username}
              onInput={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onInput={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
