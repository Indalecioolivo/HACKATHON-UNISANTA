import "./MyProjects.css";

import ModalAdcProjeto from "../../modules/ModalAdcProjeto/ModalAdcProjeto";
import ModalVisualizarProjeto from "../../modules/ModaVisualizarProjeto/ModalVisualizarProjeto";

import BuscadorTags from "../../modules/BuscadorTags/BuscadorTags";
import CardUsuario from "../../modules/CardUsuario/CardUsuario";
import GridProjeto from "../../modules/GridProjeto/GridProjeto";
import EsqueletoProjeto from "../../modules/EsqueletoProjeto/EsqueletoProjeto";


export default function MyProjects() {
  return (
    <section className="myprojects-container">

      {/* <ModalAdcProjeto/> */}

      <ModalVisualizarProjeto/>

      {/* <h2>Meus Projetos</h2>
      <CardUsuario/>
      <BuscadorTags/>
      
      <div className="projetos">
        <GridProjeto/>
        <EsqueletoProjeto/>
      </div> */}

    </section>
  );

}
