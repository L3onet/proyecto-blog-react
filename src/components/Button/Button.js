import './Button.css';

function Button({ 
    texto, 
    onClick, 
    tipo = "primary", 
    deshabilitado = false,
    icono 
}) {
    return (
        <button 
            className={`btn btn-${tipo}`}
            onClick={onClick}
            disabled={deshabilitado}
        >
            {icono && <span className="btn-icono">{icono}</span>}
            <span>{texto}</span>
        </button>
    );
}

export default Button;