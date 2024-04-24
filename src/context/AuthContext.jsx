import { Children, createContext, useState } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthContextProvider, authContext };
