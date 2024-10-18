import "./GridProjeto.css";
import ImageIcon from "../../assets/collections.png";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function GridProjeto() {
  const { handleModalAddProduct } = useContext(HomeContext);
  return (
    <section
      className="gridProjetos-container"
      onClick={() => handleModalAddProduct()}
    >
      <img src={ImageIcon} alt="" />
      <h3>Adicione seu primeiro projeto</h3>
      <p>Compartilhe seu talento com milhares de pessoas</p>
    </section>
  );
}
