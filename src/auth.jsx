import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);

  const login = (senha) => {
    if (senha === "admin123") {
      setAutenticado(true);
      return true;
    }
    return false;
  };

  const logout = () => setAutenticado(false);

  return (
    <AuthContext.Provider value={{ autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);