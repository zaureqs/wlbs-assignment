import React from 'react';

const ErrorDialog = ({ error, onClose }) => {
  if (!error.message.length) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
        <div className="text-xl font-semibold mb-4">
          Error
        </div>
        <div className="text-sm mb-4">
          <p>{error?.message}</p>
        </div>
        <div className="flex justify-end">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorDialog;
