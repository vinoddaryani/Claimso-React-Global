// src/components/MissingInfoModal.jsx -- NEW COMPONENT with BEM Naming

import React, { useState, useEffect } from 'react';

// You can remove the CSS import if global.css is loaded in main.jsx
// import './global.css'; 

const MissingInfoModal = ({ isOpen, onClose, purchase, onSave }) => {
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (purchase?.missingInfo) {
      const initialData = purchase.missingInfo.reduce((acc, field) => {
        acc[field.field] = '';
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [purchase]);

  if (!isOpen || !purchase?.missingInfo || purchase.missingInfo.length === 0) {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await onSave(purchase.id, formData);
    setIsSaving(false);
    onClose();
  };

  return (
    // The Block: 'missing-info-modal'
    <div className="missing-info-modal">
      <div className="missing-info-modal__overlay"></div>
      <div className="missing-info-modal__content">
        <h2 className="missing-info-modal__title">Complete Your Purchase Info</h2>
        <p className="missing-info-modal__subtitle">Adding these details for your "{purchase.name}" will help with future claims.</p>
        
        <div className="missing-info-modal__form">
          {purchase.missingInfo.map((item) => (
            <div className="missing-info-modal__field" key={item.field}>
              <label htmlFor={item.field} className="missing-info-modal__label">{item.prompt}</label>
              <input
                className="missing-info-modal__input"
                type="text"
                id={item.field}
                name={item.field}
                value={formData[item.field] || ''}
                onChange={handleInputChange}
                placeholder={`Enter ${item.field}...`}
              />
            </div>
          ))}
        </div>

        <div className="missing-info-modal__actions">
          <button 
            className="missing-info-modal__button missing-info-modal__button--secondary" 
            onClick={onClose} 
            disabled={isSaving}>
            Cancel
          </button>
          <button 
            className="missing-info-modal__button missing-info-modal__button--primary" 
            onClick={handleSave} 
            disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Info'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissingInfoModal;