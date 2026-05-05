import { useState } from 'react'
import './App.css'
import AdicionarTarefa from './components/AdicionarTarefa.jsx'

function App() {
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(texto) {
    if (!texto.trim()) return
    setTarefas([...tarefas, { id: Date.now(), texto, feita: false }])
  }

  function toggleTarefa(id) {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, feita: !t.feita } : t
    ))
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h1 className="mb-4">Gerenciador de Tarefas</h1>

      <AdicionarTarefa onAdicionar={adicionarTarefa} />

      <ul className="list-group mt-3">
        {tarefas.map(tarefa => (
          <li
            key={tarefa.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              style={{ textDecoration: tarefa.feita ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </li>
        ))}
        {tarefas.length === 0 && (
          <li className="list-group-item text-muted">Nenhuma tarefa ainda.</li>
        )}
      </ul>
    </div>
  )
}

export default App