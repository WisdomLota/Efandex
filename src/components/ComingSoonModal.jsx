import React from 'react';
import { X } from 'lucide-react';

const ComingSoonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        <div className="flex justify-center items-center mb-4">
            <img src="/images/rocket3D.png" alt="rocket image" className='w-24 h-24'/>
        </div>
        <h3 className="text-2xl font-bold mb-2">Coming Soon!</h3>
        <p className="text-gray-600">
          Our app is currently in development. Stay tuned for the launch!
        </p>
      </div>
    </div>
  );
};

export default ComingSoonModal;