function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'Tümü' },
    { key: 'active', label: 'Aktif' },
    { key: 'completed', label: 'Tamamlanan' }
  ]

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter.key}
          className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons

