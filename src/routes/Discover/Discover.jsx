import "./Discover.css";
import CardDiscover from "../../modules/CardDiscover/CardDiscover";

export default function Discover() {
  return (
    <section className="discover-container">
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
    </section>
  );
}
