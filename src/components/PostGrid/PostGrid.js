import './PostGrid.css';
import PostCard from '../PostCard/PostCard';

function PostGrid({ posts, onLeerMas }) {
    if (posts.length === 0) {
        return (
            <div className="post-grid-empty">
                <p>😔 No se encontraron posts con esos criterios</p>
            </div>
        );
    }
    
    return (
        <div className="post-grid">
            {posts.map(post => (
                <PostCard 
                    key={post.id}
                    post={post}
                    onLeerMas={onLeerMas}
                />
            ))}
        </div>
    );
}

export default PostGrid;