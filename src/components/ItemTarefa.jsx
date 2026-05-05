function ItemTarefa ({ tarefa, onToggle, onRemover }) {
    return (
        <li>
            <span
                style={{ textDecoration: tarefa.feita ? 'line-through' : 'none' }}
                onClick={() => onToggle(tarefa.id)}
            >
                {tarefa.texto}
            </span>
            <button onClick={() => onRemover(tarefa.id)}>🗑️</button>
        </li>
    )    
}