import { useState } from 'react';
import './Tabs.css';

function Tabs({ children }) {
    const [tabActiva, setTabActiva] = useState(0);
    
    return (
        <div className="tabs">
            <div className="tabs-header">
                {children.map((child, index) => (
                    <button
                        key={index}
                        className={`tab-button ${tabActiva === index ? 'active' : ''}`}
                        onClick={() => setTabActiva(index)}
                    >
                        {child.props.titulo}
                    </button>
                ))}
            </div>
            
            <div className="tabs-content">
                {children[tabActiva]}
            </div>
        </div>
    );
}

function Tab({ children }) {
    return <div className="tab-panel">{children}</div>;
}

export { Tabs, Tab };