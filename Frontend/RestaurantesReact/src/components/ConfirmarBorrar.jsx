import React from "react";


// RECUADRO DE CONFIRMAR DE ELIMINAR ELEMENTO DE RESTAURANTE
const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center ">
    <div className="border border-dark dng">
    <div className="confirmation-dialog p-4">
      <p>{message}</p>
      <button onClick={onConfirm} className="btn btn-outline-danger btns">Aceptar</button>
      <button onClick={onCancel} className="btn btn-primary">Cancelar</button>
    </div>
    </div>
    </div>
  );
};

export default ConfirmationDialog;