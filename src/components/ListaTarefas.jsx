import ItemTarefa from './ItemTarefa'

function ListaTarefas({ tarefas, onToggle, onRemover }) {
  if (tarefas.length === 0) {
    return <p className="text-center text-muted mt-4">Nenhuma tarefa ainda. Adicione uma acima!</p>
  }

  return (
    <ul className="list-group">
      {tarefas.map(tarefa => (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onToggle={onToggle}
          onRemover={onRemover}
        />
      ))}
    </ul>
  )
}

export default ListaTarefas