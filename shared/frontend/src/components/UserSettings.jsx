import React from 'react';
import Button from './Button';

const UserSettings = ({ userEmail, onClose, onLogout, isCalendarSynced, onCalendarSyncToggle, onOpenDeleteConfirm, currentTheme, onToggleTheme }) => {

    const handleVisitWebsite = () => {
      window.open('https://claimso.com/version', '_blank');
      onClose();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 'var(--spacing-3)', gap: 'var(--spacing-3)' }}>
            <div style={{ paddingBottom: 'var(--spacing-3)', borderBottom: '1px solid var(--border-color)' }}>
                <p className="text-tertiary" style={{ fontSize: '11px', marginBottom: 'var(--spacing-1)' }}>Logged in as:</p>
                <p className="text-primary" style={{ fontSize: '13px', fontWeight: '500' }}>{userEmail}</p>
            </div>

            {/* Calendar Sync Option */}
            <div className="flex-row" style={{ alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-2) 0' }}>
                <span className="text-secondary" style={{ fontSize: '12px' }}>Calendar Sync</span>
                
                {/* vvvv --- THIS IS THE BRUTE FORCE, DEFINITIVE FIX --- vvvv */}
                <label className="toggle-switch" htmlFor="calendar-sync-toggle">
                    <input 
                        id="calendar-sync-toggle"
                        type="checkbox" 
                        checked={isCalendarSynced} 
                        onChange={onCalendarSyncToggle}
                        // This inline style is extremely high-specificity and guarantees the input is hidden
                        style={{
                            opacity: 0,
                            width: 0,
                            height: 0,
                            position: 'absolute' // Takes the element completely out of the layout flow
                        }}
                    />
                    <span className="slider"></span>
                </label>
                {/* ^^^^ --- END OF FIX --- ^^^^ */}
            </div>

            <Button onClick={onToggleTheme} variant="secondary" style={{ width: '100%' }}>
                Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
            </Button>
            
            <Button
                onClick={onOpenDeleteConfirm}
                variant="danger"
                disabled={!isCalendarSynced}
                style={{ justifyContent: 'center', width: '100%' }}
            >
                Delete All Calendar Alerts
            </Button>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-3)', marginTop: 'var(--spacing-3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                <Button onClick={onLogout} variant="danger" style={{ width: '100%' }}>
                    Log Out
                </Button>
                <button onClick={handleVisitWebsite} style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', fontSize: '10px', cursor: 'pointer', padding: 'var(--spacing-1)', marginTop: 'var(--spacing-2)' }}>
                  Claimso (v1.0.0)
                </button>
            </div>
        </div>
    );
};

export default UserSettings;