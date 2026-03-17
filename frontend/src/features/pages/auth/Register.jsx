import { useState } from "react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { loading, handleRegister } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister({ username, email, password });

    navigate("/");
  };

  return (
    <main className="auth-page">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
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
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
