import "./ModalAdcProjeto.css";
import ImageIcon from "../../assets/collections.png";
import "./ModalAdcProjeto.css";
import GridProjeto from "../GridProjeto/GridProjeto";

export default function ModalAdcProjeto() {
  return (
    <section className="container-modal">
      <div className="modal">
        <div className="title-modal">
          <h1>Adicionar Projeto</h1>
          <p>Selecione o conteudo que você deseja fazer upload</p>
        </div>
        <div className="configuracoes">
          <div className="selecionar">{/* <GridProjeto /> */}</div>

          <form action="" className="caixas-textos">
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Tags" />
            <input type="text" placeholder="Link" />
            <textarea
              name="descricao"
              id="descricao"
              placeholder="Descrição"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
}
