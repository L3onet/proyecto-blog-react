import './UserCard.css';
import Avatar from '../Avatar/Avatar';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

function UserCard({ usuario, onEditar, onEliminar }) {
    const badgeTipo = usuario.activo ? "success" : "danger";
    const badgeTexto = usuario.activo ? "Activo" : "Inactivo";
    
    return (
        <div className="user-card">
            <div className="user-card-header">
                <Avatar 
                    src={usuario.avatar} 
                    alt={usuario.nombre}
                    tamaño="large"
                />
            </div>
            
            <div className="user-card-body">
                <h3>{usuario.nombre}</h3>
                <p className="user-email">{usuario.email}</p>
                <p className="user-rol">{usuario.rol}</p>
                <Badge texto={badgeTexto} tipo={badgeTipo} />
            </div>
            
            <div className="user-card-footer">
                <Button 
                    texto="Editar" 
                    tipo="primary"
                    onClick={() => onEditar(usuario.id)}
                    icono="✏️"
                />
                <Button 
                    texto="Eliminar" 
                    tipo="danger"
                    onClick={() => onEliminar(usuario.id)}
                    icono="🗑️"
                />
            </div>
        </div>
    );
}

export default UserCard;