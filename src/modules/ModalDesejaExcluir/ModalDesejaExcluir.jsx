import "./ModalDesejaExcluir.css";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function ModalDesejaExcluir() {
  const { handleWantDelete, handleConfirmDelete } = useContext(HomeContext);
  return (
    <section className="dsjExcluir-modal">
      <div className="modal">
        <h1> Deseja Excluir?</h1>
        <p> Se você prosseguir irá excluir o projeto do seu portfólio.</p>
        <div className="btn">
          <button className="excluir" onClick={() => handleConfirmDelete()}>
            Excluir
          </button>
          <button className="cancelar" onClick={() => handleWantDelete()}>
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
}
