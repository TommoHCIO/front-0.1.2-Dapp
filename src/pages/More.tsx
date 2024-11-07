import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function More() {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <MoreHorizontal className="w-8 h-8 text-[#00D1FF]" />
        <h1 className="text-2xl font-bold">More</h1>
      </div>
      <p className="text-slate-300">Additional settings and features.</p>
    </div>
  );
}

export default More;