import React, { useState } from "react";
import "../../styles/auth.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

  const { loading, handleLogin } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin({ email, password })

    navigate('/')
  };

  return (
    <>
      <main className="login-page">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </main>
    </>
  );
};

export default Login;
