import "./MyProjects.css";

import ModalAdcProjeto from "../../modules/ModalAdcProjeto/ModalAdcProjeto";
import ModalVisualizarProjeto from "../../modules/ModaVisualizarProjeto/ModalVisualizarProjeto";
import ModalExcluirPJT from "../../modules/ModalExcluirPJT/ModalExcluirPJT";
import ModalDesejaExcluir from "../../modules/ModalDesejaExcluir/ModalDesejaExcluir";
import BuscadorTags from "../../modules/BuscadorTags/BuscadorTags";
import CardUsuario from "../../modules/CardUsuario/CardUsuario";
import GridProjeto from "../../modules/GridProjeto/GridProjeto";
import EsqueletoProjeto from "../../modules/EsqueletoProjeto/EsqueletoProjeto";
import ModalPjtAdcSucesso from "../../modules/ModalPjtAdcSucesso/ModalPjtAdcSucesso";
import CardDiscover from "../../modules/CardDiscover/CardDiscover";

import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function MyProjects() {
  const {
    showModalAddProduct,
    showModalVisualizarProjeto,
    showModalCadastroSucess,
    showModalWantDelete,
    showModalConfirmDelete,
  } = useContext(HomeContext);
  return (
    <section className="myprojects-container">
      {showModalAddProduct ? <ModalAdcProjeto /> : ""}
      {showModalVisualizarProjeto ? <ModalVisualizarProjeto /> : ""}
      {showModalCadastroSucess ? <ModalPjtAdcSucesso /> : ""}
      {showModalWantDelete ? <ModalDesejaExcluir /> : ""}
      {showModalConfirmDelete ? <ModalExcluirPJT /> : ""}
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
