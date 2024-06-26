"use client";
import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
