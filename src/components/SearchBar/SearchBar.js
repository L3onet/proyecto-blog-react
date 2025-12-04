import './SearchBar.css';

function SearchBar( { busqueda, onBuscar}) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar posts..."
                value={busqueda}
                onChange={(e) => onBuscar(e.target.value)}
                className="search-input"
            />
            <span className="search-icon">🔍</span>
        </div>
    );
    
}

export default SearchBar;