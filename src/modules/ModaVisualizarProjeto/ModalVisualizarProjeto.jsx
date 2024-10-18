import "./ModalVisualizarProjeto.css";
import UserPhoto from "../../assets/circle.png";
import ProjectImage from "../../assets/projectImage.png";
import X from "../../assets/fechar.png";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

export default function ModalVisualizarProjeto() {
  const { handleModalVisualizarProjeto } = useContext(HomeContext);
  return (
    <section className="visualizarProjeto-container">
      <div className="modal">
        <div className="fechar">
          <img src={X} alt="" onClick={() => handleModalVisualizarProjeto()} />
        </div>
        <div className="conteudo">
          <div className="modal-header">
            <div className="profile">
              <img src={UserPhoto} alt="" />
              <div className="user-name">
                <p>Camila Soares</p>
                <p>12/12</p>
              </div>
            </div>
            <h1>Ecommerce One Page</h1>
            <div className="tags">
              <p>UX</p>
              <p>Web</p>
            </div>
          </div>
          <img
            src={ProjectImage}
            alt="imagem do projeto"
            className="projectImage"
          />
          <div className="modal-footer">
            <p>
              Temos o prazer de compartilhar com vocês uma variação da nosso
              primeiro recurso gratuito, Monoceros. É um modelo de uma página
              para mostrar seus produtos. Tentamos redesenhar uma versão mais
              B2C e minimalista do nosso primeiro template de e-commerce.
            </p>
            <p className="download-link">
              Download: <br />
              <a href="https://gumroad.com/products/wxCSL">
                https://gumroad.com/products/wxCSL
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
