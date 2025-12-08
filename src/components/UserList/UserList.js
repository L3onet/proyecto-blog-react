import './UserList.css';
import UserCard from '../UserCard/UserCard';

function UserList({ usuarios, onEditar, onEliminar }) {
    if (usuarios.length === 0) {
        return (
            <div className="user-list-empty">
                <p>No hay usuarios para mostrar</p>
            </div>
        );
    }
    
    return (
        <div className="user-list">
            {usuarios.map(usuario => (
                <UserCard 
                    key={usuario.id}
                    usuario={usuario}
                    onEditar={onEditar}
                    onEliminar={onEliminar}
                />
            ))}
        </div>
    );
}

export default UserList;