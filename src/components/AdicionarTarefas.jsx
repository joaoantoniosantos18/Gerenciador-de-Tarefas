import { useState } from "react";

function AdicionarTarefas({ onAdicionar }) {
    const [texto, setTexto] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAdicionar(texto);
        setTexto("");
    }

    return(
        <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite uma nova tarefa..."
                className="form-control"

            />
            <button className="btn btn-primary" type="submit">Adicionar</button>
        </form>
    )
}

export default AdicionarTarefas;