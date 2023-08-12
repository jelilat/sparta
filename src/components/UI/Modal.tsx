'use client'
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children}: Props) => {
    return (
        <>
            {
                isOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="bg-white rounded-lg w-3/4 lg:w-1/2 p-8 shadow-lg">
                            <button onClick={onClose} className="float-right text-lg font-semibold">×</button>
                            {children}
                            </div>
                            <div className="fixed inset-0 bg-black opacity-10" onClick={onClose}></div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Modal