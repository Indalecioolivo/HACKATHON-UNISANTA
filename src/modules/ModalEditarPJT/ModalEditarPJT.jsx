import "./ModalEditarPJT.css";
import Sucesso from "../../assets/sucesso.png"

export default function ModalEditarPJT(){
    return(

    
    <section className="editar-modal">
        <div className="modal3">
            <h1> Edição concluída com sucesso!</h1>
            <img src={Sucesso}></img>
            <button class="voltar"> VOLTAR PARA PROJETOS </button> 
        </div>

    </section>
    )
}