import "./Header.css";
import LogoMarca from "../../assets/logo-orange.png";
import UserPhoto from "../../assets/circle.png";
import IconNotification from "../../assets/icon-notifications.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <div className="to-nav">
        <img src={LogoMarca} alt="" />
        <nav>
          <Link to="/myprojects" className="link">
            Meus projetos
          </Link>
          <Link to="/discover" className="link">
            Descobrir
          </Link>
        </nav>
      </div>

      <div className="hug">
        <img src={UserPhoto} alt="" />
        <img src={IconNotification} alt="" />
      </div>
    </header>
  );
}
