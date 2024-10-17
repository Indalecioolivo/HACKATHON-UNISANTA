import "./Discover.css";
import ImgDiscover from "../../assets/img-discover.png";

export default function Discover() {
  return (
    <section className="discover-container">
      <div>
        <p className="discover-text">Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</p>
          <input className="discover-input"></input>
      </div>
      <div>
        <img className="img-fixed" src={ImgDiscover} alt="" />
      </div>
    </section>
  );
}
