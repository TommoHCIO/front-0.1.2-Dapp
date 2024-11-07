import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative">
        <div className="w-8 h-8 border-2 border-[#00D1FF] rounded-full"></div>
        <div className="w-8 h-8 border-2 border-transparent border-t-[#00D1FF] rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
}