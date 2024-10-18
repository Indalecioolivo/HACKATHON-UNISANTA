import "./MyProjects.css";

import ModalAdcProjeto from "../../modules/ModalAdcProjeto/ModalAdcProjeto";
import ModalVisualizarProjeto from "../../modules/ModaVisualizarProjeto/ModalVisualizarProjeto";
import ModalExcluirPJT from "../../modules/ModalExcluirPJT/ModalExcluirPJT";
import ModalEditarPJT from "../../modules/ModalEditarPJT/ModalEditarPJT";
import ModalDesejaExcluir from "../../modules/ModalDesejaExcluir/ModalDesejaExcluir";

import BuscadorTags from "../../modules/BuscadorTags/BuscadorTags";
import CardUsuario from "../../modules/CardUsuario/CardUsuario";
import GridProjeto from "../../modules/GridProjeto/GridProjeto";
import EsqueletoProjeto from "../../modules/EsqueletoProjeto/EsqueletoProjeto";
import CadastroSucedido from "../../modules/CadastroSucedido/CadastroSucedido";

export default function MyProjects() {
  return (
    <section className="myprojects-container">
      {/* <ModalAdcProjeto /> */}
      {/* <ModalVisualizarProjeto/> */}
      {/* {<ModalExcluirPJT/>} */}
      {/* <ModalEditarPJT/> */}
      {/* <CadastroSucedido/> */}
      <div className="usuario">
        <CardUsuario />
        <BuscadorTags />
      </div>
      <div className="projetos">
        <GridProjeto />
        <EsqueletoProjeto />
        <EsqueletoProjeto />
      </div>
    </section>
  );
}
