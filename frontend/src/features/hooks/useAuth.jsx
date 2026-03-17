import { AuthContext } from "../contexts/auth.context";
import { login, register, profile, logout } from "../services/auth.api";

import React, { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    const data = await register({ username, email, password });
    setUser(data.user);
    setLoading(false);
  }

  async function handleLogin({ username, email, password }) {
    setLoading(true);
    const data = await login({ username, email, password });
    setUser(data.user);
    setLoading(false);
  }

  async function handleProfile() {
    setLoading(true);
    const data = await profile();
    setUser(data.user);
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    const data = await logout();
    setUser(data.user);
    setLoading(false);
  }

  return ({ user, loading, handleRegister, handleLogin, handleProfile, handleLogOut });

};

export default useAuth;
