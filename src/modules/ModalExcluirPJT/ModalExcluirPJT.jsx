import "./ModalExcluirPJT.css";
import Sucesso from "../../assets/sucesso.png"

export default function ModalExcluirPJT(){
    return(

    
    <section className="excluir-modal">
        <div className="modal2">
            <h1> Projeto deletado com sucesso!</h1>
            <img src={Sucesso}></img>
            <button class="voltar"> VOLTAR PARA PROJETOS </button> 
        </div>

    </section>
    )
}