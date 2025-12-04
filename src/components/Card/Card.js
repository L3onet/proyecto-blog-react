import './Card.css';

function Card({ titulo, contenido, imagen, footer, children }) {
    return (
        <div className="card">
            {imagen && (
                <div className="card-imagen">
                    <img src={imagen} alt={titulo} />
                </div>
            )}
            
            <div className="card-body">
                {titulo && <h3 className="card-titulo">{titulo}</h3>}
                
                {contenido && <p className="card-contenido">{contenido}</p>}
                
                {children && <div className="card-children">{children}</div>}
            </div>
            
            {footer && (
                <div className="card-footer">
                    {footer}
                </div>
            )}
        </div>
    );
}

export default Card;