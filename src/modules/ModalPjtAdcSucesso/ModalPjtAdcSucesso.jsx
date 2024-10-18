import "./ModalPjtAdcSucesso.css";
import Sucesso from "../../assets/sucessEdit.png";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function ModalPjtAdcSucesso() {
  const { handleModalCadastroSucess } = useContext(HomeContext);
  return (
    <section className="modalAdcSucess-container">
      <div className="modal">
        <h1> Projeto adicionado com sucesso!</h1>
        <div className="img">
          <img src={Sucesso}></img>
        </div>
        <button className="voltar" onClick={() => handleModalCadastroSucess()}>
          VOLTAR PARA PROJETOS
        </button>
      </div>
    </section>
  );
}
