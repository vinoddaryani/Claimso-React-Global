// src/components/UserSettings.jsx
import React, { useState } from 'react';
import Button from './Button';
import ModalWrapper from './ModalWrapper'; // Now used for our custom confirmation

const UserSettings = ({ userEmail, onClose, onLogout, isCalendarSynced, onCalendarSyncToggle, onDeleteAllCalendarAlerts }) => {
    const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false);

    const handleConfirmDelete = () => {
        onDeleteAllCalendarAlerts();
        setIsDeleteConfirmModalOpen(false); // Close confirmation modal
        onClose(); // Close the main popover
    };

    const handleVisitWebsite = () => {
      window.open('https://claimso.com/version', '_blank');
      onClose();
    };


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 'var(--md3-spacing-4)', gap: 'var(--md3-spacing-3)' }}>
                {/* User Info */}
                <div style={{ paddingBottom: 'var(--md3-spacing-3)', borderBottom: '1px solid var(--md3-outline)' }}>
                    <p style={{ fontSize: '11px', color: 'var(--md3-on-surface-variant)', marginBottom: 'var(--md3-spacing-1)' }}>Logged in as:</p>
                    <p style={{ fontSize: '13px', fontWeight: '500', color: 'var(--md3-on-surface)' }}>{userEmail}</p>
                </div>

                {/* Calendar Sync Option */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--md3-spacing-2) 0' }}>
                    <span style={{ fontSize: '12px', color: 'var(--md3-on-surface)' }}>Calendar Sync</span>
                    <label className="switch">
                        <input type="checkbox" checked={isCalendarSynced} onChange={onCalendarSyncToggle} />
                        <span className="slider round"></span>
                    </label>
                </div>

                {/* Delete All Calendar Alerts Button */}
                <Button
                    onClick={() => setIsDeleteConfirmModalOpen(true)}
                    variant="danger"
                    elevation={0}
                    style={{ justifyContent: 'flex-start', paddingLeft: '0', minWidth: 'auto', textTransform: 'none', fontSize: '12px', color: 'var(--md3-error)', border: 'none', background: 'transparent' }}
                >
                    Delete All Calendar Alerts
                </Button>

                {/* Footer Actions */}
                <div style={{ borderTop: '1px solid var(--md3-outline)', paddingTop: 'var(--md3-spacing-3)', marginTop: 'var(--md3-spacing-3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--md3-spacing-2)' }}>
                    <Button onClick={onLogout} variant="danger" elevation={1} style={{ fontSize: '12px', width: '100%', textTransform: 'none' }}>
                        Log Out
                    </Button>
                    <button
                      onClick={handleVisitWebsite}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--md3-on-surface-variant)',
                        fontSize: '10px',
                        cursor: 'pointer',
                        padding: 'var(--md3-spacing-1)',
                        marginTop: 'var(--md3-spacing-2)'
                      }}
                    >
                      Claimso (v0.1.0)
                    </button>
                </div>
            </div>

            {/* Custom Delete Confirmation Modal */}
            <ModalWrapper
                isOpen={isDeleteConfirmModalOpen}
                onClose={() => setIsDeleteConfirmModalOpen(false)}
                title="Are you sure?"
                customWidth="320px"
            >
                <div className="flex-col gap-4">
                    <p style={{ fontSize: '12px', color: 'var(--md3-on-surface-variant)' }}>
                        All Claimso calendar alerts will be deleted. This action cannot be undone.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--md3-spacing-3)', marginTop: 'var(--md3-spacing-4)' }}>
                        <Button onClick={() => setIsDeleteConfirmModalOpen(false)} variant="secondary" elevation={0} style={{ fontSize: '11px' }}>
                            Clicked by Accident
                        </Button>
                        <Button
  onClick={handleConfirmDelete}
  variant="contained"
  sx={{
    fontSize: 11,
    backgroundColor: 'var(--md3-error)',
    color: 'black !important',          // ← ensure black text
    boxShadow: 1,
    '&:hover': { backgroundColor: 'var(--md3-error)' }
  }}
>
  Delete All Calendar Alerts
</Button>
> {/* Red OK button */}
                            Yes, Delete
                        </Button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

export default UserSettings;