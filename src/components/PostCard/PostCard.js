import './PostCard.css';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

function PostCard({ post, onLeerMas }) {
    const categoriaTipo = {
        "Tutorial": "info",
        "JavaScript": "warning",
        "CSS": "success",
        "React": "primary"
    };
    
    return (
        <article className="post-card">
            <div className="post-card-imagen">
                <img src={post.imagen} alt={post.titulo} />
                <div className="post-card-categoria">
                    <Badge 
                        texto={post.categoria} 
                        tipo={categoriaTipo[post.categoria] || "default"}
                    />
                </div>
            </div>
            
            <div className="post-card-body">
                <h2 className="post-card-titulo">{post.titulo}</h2>
                
                <div className="post-card-meta">
                    <span className="post-autor">👤 {post.autor}</span>
                    <span className="post-fecha">📅 {post.fecha}</span>
                </div>
                
                <p className="post-card-resumen">{post.resumen}</p>
                
                <div className="post-card-stats">
                    <span>❤️ {post.likes} likes</span>
                    <span>💬 {post.comentarios} comentarios</span>
                </div>
            </div>
            
            <div className="post-card-footer">
                <Button 
                    texto="Leer más"
                    tipo="primary"
                    onClick={() => onLeerMas(post.id)}
                    icono="📖"
                />
            </div>
        </article>
    );
}

export default PostCard;