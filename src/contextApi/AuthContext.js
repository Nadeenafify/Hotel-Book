import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setisLogged] = useState(localStorage.getItem("isLogged") === "true");
  const [Email, setEmail] = useState(localStorage.getItem("email") || "");

  return (
    <AuthContext.Provider value={{ isLogged, setisLogged, Email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
