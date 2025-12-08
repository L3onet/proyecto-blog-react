import './Badge.css';

function Badge({ texto, tipo = "default" }) {
    return (
        <span className={`badge badge-${tipo}`}>
            {texto}
        </span>
    );
}

export default Badge;