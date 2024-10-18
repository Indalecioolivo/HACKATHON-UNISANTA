import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [teste, setTeste] = useState();
  const [toggleModule, setToggleModule] = useState(true);
  function setModule() {
    toggleModule ? setToggleModule(false) : setToggleModule(true);
  }

  return (
    <HomeContext.Provider value={{ toggleModule, setModule }}>
      {children}
    </HomeContext.Provider>
  );
};
