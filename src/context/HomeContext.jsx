import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [toggleModule, setToggleModule] = useState(true);
  function setModule() {
    toggleModule ? setToggleModule(false) : setToggleModule(true);
  }

  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  function handleModalAddProduct() {
    showModalAddProduct
      ? setShowModalAddProduct(false)
      : setShowModalAddProduct(true);
  }

  return (
    <HomeContext.Provider
      value={{
        toggleModule,
        setModule,
        showModalAddProduct,
        handleModalAddProduct,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
