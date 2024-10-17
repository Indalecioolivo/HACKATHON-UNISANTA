import "./GridProjeto.css";
import ImageIcon from "../../assets/collections.png";

export default function GridProjeto() {
    return (
      <section className="gridProjetos-container">
        <button>
        <img src={ImageIcon} alt="" />
          <h3>
            Adicione seu primeiro projeto
          </h3>
          <p>Compartilhe seu talento com milhares de pessoas</p>
        </button>
      </section>
    );
  }