'use client'
import React from 'react'

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={onClose}
            ></div>
            <div className="absolute bg-white rounded-lg w-3/4 lg:w-1/2 p-8 shadow-lg">
              <button onClick={onClose} className="absolute top-2 right-2 text-lg font-semibold">×</button>
              {children}
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  