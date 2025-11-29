import { useState } from 'react'
import { useTodos } from './hooks/useTodos'
import TodoInput from './components/TodoInput'
import FilterButtons from './components/FilterButtons'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [filter, setFilter] = useState('all')
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeTodosCount,
    hasCompletedTodos
  } = useTodos()

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">To-Do List</h1>
        
        <TodoInput onAddTodo={addTodo} />

        <FilterButtons 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />

        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <Footer
          activeTodosCount={activeTodosCount}
          hasCompletedTodos={hasCompletedTodos}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}

export default App
