function Footer({ activeTodosCount, hasCompletedTodos, onClearCompleted }) {
  return (
    <div className="footer">
      <span className="todo-count">
        {activeTodosCount} aktif görev
      </span>
      {hasCompletedTodos && (
        <button className="clear-button" onClick={onClearCompleted}>
          Tamamlananları Temizle
        </button>
      )}
    </div>
  )
}

export default Footer

