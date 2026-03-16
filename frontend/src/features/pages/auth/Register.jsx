import React, { useState } from "react";
import "../../styles/auth.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="auth-page">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onInput={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            value={password}
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Register</button>
        </form>
        <p>Already </p>
      </div>
    </main>
  );
};

export default Register;
