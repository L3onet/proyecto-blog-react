import './Header.css';

function Header({titulo, subtitulo}) {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-titulo">{titulo}</h1>
                {subtitulo && <p className="header-subtitulo">{subtitulo}</p>}
            </div>
        </header>
    );
}

export default Header;