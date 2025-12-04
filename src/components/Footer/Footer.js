import './Footer.css';

function Footer({ anio, nombreEmpresa, enlaces }) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <p>&copy; {anio} {nombreEmpresa}. Todos los derechos reservados.</p>
                </div>
                
                {enlaces && (
                    <div className="footer-enlaces">
                        {enlaces.map((enlace, index) => (
                            <a 
                                key={index} 
                                href={enlace.url}
                                className="footer-enlace"
                            >
                                {enlace.texto}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;