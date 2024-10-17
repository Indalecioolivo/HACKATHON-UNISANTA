import "./Discover.css";
import ImgDiscover from "../../assets/img-discover.png";
import ProfileDiscover from "../../assets/pfp-discover.png";

export default function Discover() {
  return (
    <section className="discover-container">
      <div className="div-text">
        <p className="discover-text">Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</p>
          <input className="discover-input"></input>
      </div>
      <div className="div-imgs">
        <img className="discover-img" src={ImgDiscover} alt="" />
        <p className="teste">
          <img className="discover-profile" src={ProfileDiscover} alt="" />
          <p className="discover-profile-text">Bianca Martin • 02/24</p>
        </p>
      </div>
    </section>
  );
}
