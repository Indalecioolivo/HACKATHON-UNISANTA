import "./CadastroSucedido.css";
import Sucesso from "../../assets/sucesso.png";

export default function CadastroSucedido() {
  return (
    <section className="cadastroSucedido-container">
        <img src={Sucesso} alt="icone-suceso" />
        <h3>
            Cadastro feito com sucesso
        </h3>
    </section>
  );
}