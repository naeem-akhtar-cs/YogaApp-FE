import React from "react";

interface ModalProps {
    show: boolean;
    message: string;
    onClose: () => void;
}

const Modal = ({ show, message, onClose }: ModalProps) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-10">
                <h2 className="text-2xl mb-4 text-center">Payment Status</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-center">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
