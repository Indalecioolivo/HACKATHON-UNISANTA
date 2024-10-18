import "./ModalDesejaExcluir.css";
import Sucesso from "../../assets/sucesso.png"

export default function DesejaExcluirPJT(){
    return(
   
    <section className="dsjexcluir-modal">
        <div className="modal5">
            <h1> Deseja Excluir?</h1>
            <p> Se você prosseguir irá excluir o projeto do seu portfólio. </p>
            <div className="botoes"> 
                <button className="excluir">Excluir</button>
                <button className="cancel">Cancelar</button>
            </div>
        </div>
    </section>
    )
}