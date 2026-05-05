function ItemTarefa ({ tarefa, onToggle, onRemover }) {
    return (
        <li className={`list-group-item d-flex align-items-center gap-3 ${tarefa.feita ? 'tarefa-feita' : ''}`}>
            
            {/* Círculo clicável */}
            <div
                className={`circulo ${tarefa.feita ? 'circulo-preenchido' : ''}`}
                onClick={() => onToggle(tarefa.id)}
            />

            {/* Texto da tarefa */}
            <span
                className="flex-grow-1"
                style={{ 
                    textDecoration: tarefa.feita ? 'line-through' : 'none',
                    color: tarefa.feita ? '#7a9bbf' : '#e0f0ff',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(tarefa.id)}
            >
                {tarefa.texto}
            </span>

            {/* Botão remover */}
            <button 
                onClick={() => onRemover(tarefa.id)} 
                className="btn btn-sm btn-outline-danger"
            >
                🗑️
            </button>
        </li>
    )    
}

export default ItemTarefa;