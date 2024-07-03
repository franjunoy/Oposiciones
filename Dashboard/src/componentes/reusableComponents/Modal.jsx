import React from 'react';
import { useModal } from '@/context/ModalContext';

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 relative">
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={closeModal}
        >
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
