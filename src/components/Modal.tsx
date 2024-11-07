import React, { useEffect, useCallback } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="w-full transform transition-all duration-300 ease-in-out animate-modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}