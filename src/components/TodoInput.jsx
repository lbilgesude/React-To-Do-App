import { useState } from 'react'

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim())
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="todo-input"
        placeholder="Yeni görev ekle..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-button" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  )
}

export default TodoInput

