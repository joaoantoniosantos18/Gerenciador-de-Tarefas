import { useState } from 'react'
import AdicionarTarefa from './components/AdicionarTarefas'
import ListaTarefas from './components/ListaTarefas'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(texto) {
    if (!texto.trim()) return
    const novaTarefa = { id: Date.now(), texto, feita: false }
    setTarefas([...tarefas, novaTarefa])
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
    <div className="container py-5" style={{maxWidth: '600px'}}>
      <h1 className='text-center mb-4'>Gerenciador de Tarefas</h1>
      <AdicionarTarefa onAdicionar={adicionarTarefa} />
      <div className='card'>
        <div className='card-body'>
            <ListaTarefas
            tarefas={tarefas}
            onToggle={toggleTarefa}
            onRemover={removerTarefa}
        />
        </div>
      </div>
    </div>  
  )
}

export default App