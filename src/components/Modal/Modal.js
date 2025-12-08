import { useEffect } from 'react';
import './Modal.css';
import Button from '../Button/Button';

function Modal({ isOpen, onClose, titulo, children, footer }) {
    // Cerrar con ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{titulo}</h2>
                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                </div>
                
                <div className="modal-body">
                    {children}
                </div>
                
                {footer && (
                    <div className="modal-footer">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;