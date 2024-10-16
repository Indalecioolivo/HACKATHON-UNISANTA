import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [teste, setTeste] = useState();
  return (
    <HomeContext.Provider value={{ teste, setTeste }}>
      {children}
    </HomeContext.Provider>
  );
};
