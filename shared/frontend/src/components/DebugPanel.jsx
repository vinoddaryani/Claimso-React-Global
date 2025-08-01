// src/components/DebugPanel.jsx -- NEW COMPONENT (for development only)

import React from 'react';
import { 
    simulatePriceDropPurchase,
    simulateWarrantyPurchase,
    simulateMissingInfoPurchase,
    simulateArchivedPurchase
} from '../utils/simulation';
import Button from './Button';

const DebugPanel = () => {
    // This component will only be rendered in development mode.
    if (!import.meta.env.PROD) {
        return null;
    }

    const panelStyles = {
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '10px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
    };

    const titleStyles = {
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        textAlign: 'center',
        margin: '0 0 5px 0',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '5px'
    };

    return (
        <div style={panelStyles}>
            <h3 style={titleStyles}>🔧 Debug Panel</h3>
            <Button onClick={simulatePriceDropPurchase} variant="secondary" style={{fontSize: '11px', padding: '4px 8px'}}>+ Price Drop Item</Button>
            <Button onClick={simulateWarrantyPurchase} variant="secondary" style={{fontSize: '11px', padding: '4px 8px'}}>+ Warranty Item</Button>
            <Button onClick={simulateMissingInfoPurchase} variant="secondary" style={{fontSize: '11px', padding: '4px 8px'}}>+ Missing Info Item</Button>
            <Button onClick={simulateArchivedPurchase} variant="secondary" style={{fontSize: '11px', padding: '4px 8px'}}>+ Archived Item</Button>
        </div>
    );
};

export default DebugPanel;