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

  const [showModalVisualizarProjeto, setShowModalVisualizarProjeto] =
    useState(false);

  function handleModalVisualizarProjeto() {
    showModalVisualizarProjeto
      ? setShowModalVisualizarProjeto(false)
      : setShowModalVisualizarProjeto(true);
    handleModalAddProduct();
  }

  const [showModalCadastroSucess, setShowModalCadastroSucess] = useState(false);

  function handleModalCadastroSucess() {
    showModalCadastroSucess
      ? setShowModalCadastroSucess(false)
      : setShowModalCadastroSucess(true);
    if (showModalAddProduct) {
      handleModalAddProduct();
    }
  }

  const [showModalWantDelete, setShowModalWantDelete] = useState(false);
  function handleWantDelete() {
    showModalWantDelete
      ? setShowModalWantDelete(false)
      : setShowModalWantDelete(true);
  }

  const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false);
  function handleConfirmDelete() {
    showModalConfirmDelete
      ? setShowModalConfirmDelete(false)
      : setShowModalConfirmDelete(true);
    if (showModalWantDelete) {
      handleWantDelete();
    }
  }

  return (
    <HomeContext.Provider
      value={{
        toggleModule,
        setModule,
        showModalAddProduct,
        handleModalAddProduct,
        showModalVisualizarProjeto,
        handleModalVisualizarProjeto,
        showModalCadastroSucess,
        handleModalCadastroSucess,
        showModalWantDelete,
        handleWantDelete,
        showModalConfirmDelete,
        handleConfirmDelete,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
