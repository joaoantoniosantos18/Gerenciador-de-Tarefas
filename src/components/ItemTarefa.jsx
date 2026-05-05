import { useState } from "react"

function ItemTarefa ({ tarefa, onToggle, onRemover, onEditar }) {

  const [editando, setEditando] = useState(false)
  const [textoEdit, setTextoEdit] = useState(tarefa.texto)

  function confirmarEdicao() {
    onEditar(tarefa.id, textoEdit)
    setEditando(false)
  }

  function cancelarEdicao() {
    setTextoEdit(tarefa.texto) 
    setEditando(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') confirmarEdicao()
    if (e.key === 'Escape') cancelarEdicao()
  }

  return (
    <li className={`list-group-item d-flex align-items-center gap-3 ${tarefa.feita ? 'tarefa-feita' : ''}`}>

      <div
        className={`circulo ${tarefa.feita ? 'circulo-preenchido' : ''}`}
        onClick={() => onToggle(tarefa.id)}
      />

      {editando ? (
        <>
          <input
            className="form-control form-control-sm flex-grow-1"
            value={textoEdit}
            onChange={e => setTextoEdit(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button className="btn btn-sm btn-success" onClick={confirmarEdicao}>✅</button>
          <button className="btn btn-sm btn-secondary" onClick={cancelarEdicao}>❌</button>
        </>

      ) : (
        <>
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
          <button className="btn btn-sm btn-outline-primary" onClick={() => setEditando(true)}>✏️</button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => onRemover(tarefa.id)}>🗑️</button>
        </>
      )}

    </li>
  )
}

export default ItemTarefa