import React, { useState } from 'react';
import { Wallet, ChevronDown, ExternalLink, Copy, LogOut } from 'lucide-react';

export function WalletButton() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // Simulated wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setShowMenu(false);
  };

  if (!isConnected) {
    return (
      <button 
        onClick={handleConnect}
        disabled={isConnecting}
        className="flex items-center px-4 py-2 bg-gradient-to-r from-[#00D1FF] to-[#0029FF] rounded-full hover:opacity-90 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Wallet className={`w-5 h-5 mr-2 ${isConnecting ? 'animate-pulse' : ''}`} />
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center px-4 py-2 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 transition-colors"
      >
        <Wallet className="w-5 h-5 mr-2 text-[#00D1FF]" />
        <span className="mr-2">0x1234...5678</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-64 bg-slate-800 rounded-lg border border-slate-700 shadow-lg">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-400">Connected Wallet</span>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-slate-700 rounded-lg transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded-lg transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Balance</span>
                <span className="font-medium">1,234.56 CTE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Staked</span>
                <span className="font-medium text-[#00D1FF]">500.00 CTE</span>
              </div>
            </div>
            <button
              onClick={handleDisconnect}
              className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Disconnect</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}