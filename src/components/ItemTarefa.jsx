function ItemTarefa ({ tarefa, onToggle, onRemover }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span
                style={{ textDecoration: tarefa.feita ? 'line-through' : 'none' }}
                onClick={() => onToggle(tarefa.id)}
            >
                {tarefa.texto}
            </span>
            <button onClick={() => onRemover(tarefa.id)} className="btn btn-sm btn-outline-danger">🗑️</button>
        </li>
    )    
}

export default ItemTarefa;