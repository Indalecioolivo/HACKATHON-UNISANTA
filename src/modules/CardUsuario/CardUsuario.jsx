import "./CardUsuario.css";
import CardImage from "../../assets/cardImage.png";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function CardUsuario() {
  const { handleModalAddProduct } = useContext(HomeContext);
  return (
    <section className="cardUsuario-container">
      <div className="profile">
        <img src={CardImage} alt="card-profile-image" />
        <div className="text-input">
          <div className="letters">
            <h1>Camila Soares</h1>
            <h3>Brasil</h3>
          </div>
          <button className="btn-card" onClick={() => handleModalAddProduct()}>
            Adicionar Projeto
          </button>
        </div>
      </div>
    </section>
  );
}
