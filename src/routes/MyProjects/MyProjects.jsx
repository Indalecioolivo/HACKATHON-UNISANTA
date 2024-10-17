import "./MyProjects.css";
import BuscadorTags from "../../modules/BuscadorTags/BuscadorTags";
import CardUsuario from "../../modules/CardUsuario/CardUsuario";
import GridProjeto from "../../modules/GridProjeto/GridProjeto";

export default function MyProjects() {
  return (
    <section className="myprojects-container">
      <h2>Meus Projetos</h2>
      <CardUsuario/>
      <BuscadorTags/>
      <GridProjeto/>
    </section>
  );
}
