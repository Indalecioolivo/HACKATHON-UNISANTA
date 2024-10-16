import "./Header.css";
import LogoMarca from "../../assets/logo-orange.png";
import UserPhoto from "../../assets/circle.png";
import IconNotification from "../../assets/icon-notifications.png"

export default function Header(){
    return <header>
        <img src={LogoMarca} alt="" />
        <p>Meus projetos</p>
        <p>Descobrir</p>
        <img src={UserPhoto} alt="" />
        <img src={IconNotification} alt="" />
    </header>
}