import React from "react";

const Modal = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Booking Successful!</h2>
        <p className="text-gray-700 mb-4">Thank you for booking with us. We are excited to have you on our tour. Our team will get in touch with you shortly.</p>
        <button onClick={handleClose} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default Modal;
