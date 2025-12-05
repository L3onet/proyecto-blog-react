import './CategoryFilter.css';

function CategoryFilter({ categorias, categoriaActiva, onCambiarCategoria}) {
    return (
        <div className="category-filter">
            {categorias.map((categoria, index) => (
                <button
                    key={index}
                    className={`filter-btn ${categoriaActiva === categoria ? "active" : ""}`}
                    onClick={() => onCambiarCategoria(categoria)}
                    >
                        {categoria}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;