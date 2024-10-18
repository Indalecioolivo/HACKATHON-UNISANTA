import "./CardDiscover.css";
import ImgDiscover from "../../assets/img-discover.png";
import ProjectImage from "../../assets/projectimage.png";
import ProfileDiscover from "../../assets/pfp-discover.png";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function CardDiscover() {
  const { handleModalVisualizarProjeto } = useContext(HomeContext);
  return (
    <div className="card-publi" onClick={() => handleModalVisualizarProjeto()}>
      <img className="publi-img" src={ImgDiscover} alt="" />
      <p className="user-infos">
        <img className="user-photo" src={ProfileDiscover} alt="" />
        <p className="user-name">Bianca Martin • 02/24</p>
      </p>
    </div>
  );
}
