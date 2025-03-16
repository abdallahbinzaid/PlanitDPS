"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simula autenticación exitosa: por ejemplo, si el correo es "usuario@udbproyectos.com" y la contraseña "1234"
    if (email === "test@test.com" && password === "1234") {
      setUser({ email, username: "TestUser", role: "admin" });
      return true;
    }
    return false;
  };

  const register = async ({ username, email, password }) => {
    // Simula registro exitoso sin una validación real
    setUser({ email, username, role: "miembro" });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
