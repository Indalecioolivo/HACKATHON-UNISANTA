import "./CardUsuario.css";
import CardImage from "../../assets/cardImage.png";

export default function CardUsuario() {
  return (
    <section className="cardUsuario-container">
        <div className="profile">
            <img src={CardImage} alt="card-profile-image"/>
            <div className="text-input">
                <div className="letters">
                    <h1>Camila Soares</h1>
                    <h3>Brasil</h3>
                </div>
                <button className="btn-card">Adicionar Projeto</button>
            </div>
        </div>
    </section>
  );
}