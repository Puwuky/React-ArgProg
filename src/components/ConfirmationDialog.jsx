import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, message, type }) => {
  const dialogClass = `confirmation-dialog ${isOpen ? 'open' : ''} ${type || ''}`;

  return (
    <div className={dialogClass}>
      <div className="confirmation-content">
        <p>{message}</p>
        <div className="confirmation-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="confirm-btn" onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

ConfirmationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ConfirmationDialog;
