import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = async () => {
      axios
        .get("http://localhost:3008/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("AUTH", response.data);
          setUser(response.status === 200);
          setAuth(response.status === 200);
        })
        .catch((e) => {
          console.log("AUTH", e);
          setUser(null);
        });
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
