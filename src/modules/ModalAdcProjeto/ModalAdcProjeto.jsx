import "./ModalAdcProjeto.css";
import ImageIcon from "../../assets/collections.png";
import GridProjeto from "../GridProjeto/GridProjeto";

export default function ModalAdcProjeto() {
  return (
    <section className="container-modal">
      <div className="modal">

        <div className="title-modal">
          <h1>Adicionar Projeto</h1>
        </div>

        <div className="configuracoes">

          <div className="selecionar">
            <p>Selecione o conteudo que você deseja fazer upload</p>
            {/* Defininir nome da classe */}
            <div>{/* <GridProjeto /> */}</div>
          </div>

          <form action="" className="formulario">
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Tags" />
            <input type="text" placeholder="Link" />
            <textarea maxlength="150"
              name="descricao"
              id="descricao"
              placeholder="Descrição"
            ></textarea>
          </form>
        </div>

        <div className="button-container">
            <p className="visualizar"> Visualizar publicação</p>
                      
            <div className="btn">
                <button class ="salvar"> Salvar </button>
                <button className="cancelar"> Cancelar </button>
            </div>
        </div>

      </div>
    </section>
  );
}
