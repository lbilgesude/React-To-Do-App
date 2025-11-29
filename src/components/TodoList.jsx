import TodoItem from './TodoItem'

function TodoList({ todos, filter, onToggle, onDelete }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const getEmptyMessage = () => {
    if (filter === 'all') return 'Henüz görev eklenmedi'
    if (filter === 'active') return 'Aktif görev yok'
    if (filter === 'completed') return 'Tamamlanan görev yok'
    return 'Görev bulunamadı'
  }

  return (
    <div className="todos-container">
      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          {getEmptyMessage()}
        </div>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}

export default TodoList

