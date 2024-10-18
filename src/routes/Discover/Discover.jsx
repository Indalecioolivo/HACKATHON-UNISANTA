import "./Discover.css";
import CardDiscover from "../../modules/CardDiscover/CardDiscover";
import ModalVisualizarProjeto from "../../modules/ModaVisualizarProjeto/ModalVisualizarProjeto";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function Discover() {
  const { showModalVisualizarProjeto } = useContext(HomeContext);
  return (
    <section className="discover-container">
      {showModalVisualizarProjeto ? <ModalVisualizarProjeto /> : ""}
      <div className="div-text">
        <p className="discover-text">
          Junte-se à comunidade de inovação, inspiração e descobertas,
          transformando experiências em conexões inesquecíveis
        </p>
        <fieldset>
          <legend>Buscar tags</legend>
          <input></input>
        </fieldset>
      </div>
      <section className="to-cards">
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
      </section>
      {/* <ModalVisualizarProjeto /> */}
    </section>
  );
}
