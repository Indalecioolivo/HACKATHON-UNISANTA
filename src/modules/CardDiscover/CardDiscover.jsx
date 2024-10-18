import "./CardDiscover.css";

import ImgDiscover from "../../assets/img-discover.png";
import ProfileDiscover from "../../assets/pfp-discover.png";

export default function CardDiscover() {
  return (
    <div className="card-publi">
      <img className="publi-img" src={ImgDiscover} alt="" />
      <p className="user-infos">
        <img className="user-photo" src={ProfileDiscover} alt="" />
        <p className="user-name">Bianca Martin • 02/24</p>
      </p>
    </div>
  );
}
