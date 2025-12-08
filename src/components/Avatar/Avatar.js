import './Avatar.css';

function Avatar({ src, alt, tamaño = "medium" }) {
    return (
        <div className={`avatar avatar-${tamaño}`}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default Avatar;