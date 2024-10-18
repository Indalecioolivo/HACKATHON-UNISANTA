import "./ModalAdcProjeto.css";
import ImageIcon from "../../assets/collections.png";
import GridProjeto from "../GridProjeto/GridProjeto";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function ModalAdcProjeto() {
  const {
    handleModalAddProduct,
    handleModalVisualizarProjeto,
    handleModalCadastroSucess,
  } = useContext(HomeContext);
  return (
    <section className="container-modal">
      <div className="modal">
        <div className="title-modal">
          <h1>Adicionar Projeto</h1>
        </div>

        <div className="configuracoes">
          <div className="selecionar">
            <p>Selecione o conteudo que você deseja fazer upload</p>

            <div>
              <GridProjeto />
            </div>
          </div>

          <form action="" className="formulario">
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Tags" />
            <input type="text" placeholder="Link" />
            <textarea
              maxlength="150"
              name="descricao"
              id="descricao"
              placeholder="Descrição"
            ></textarea>
          </form>
        </div>

        <div className="button-container">
          <p
            className="visualizar"
            onClick={() => handleModalVisualizarProjeto()}
          >
            {" "}
            Visualizar publicação
          </p>

          <div className="btn">
            <button
              className="salvar"
              onClick={() => handleModalCadastroSucess()}
            >
              {" "}
              Salvar{" "}
            </button>
            <button
              className="cancelar"
              onClick={() => handleModalAddProduct()}
            >
              {" "}
              Cancelar{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
