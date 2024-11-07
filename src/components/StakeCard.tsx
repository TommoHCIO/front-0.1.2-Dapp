import React, { useState, useCallback } from 'react';
import { Coins, TrendingUp, Clock, Lock } from 'lucide-react';

interface StakeCardProps {
  availableBalance: string;
  stakedAmount: string;
  apy: number;
}

export function StakeCard({ availableBalance, stakedAmount, apy }: StakeCardProps) {
  const [amount, setAmount] = useState('');
  const [isStaking, setIsStaking] = useState(false);
  const [showUnstake, setShowUnstake] = useState(false);

  const handleStake = useCallback(async () => {
    if (!amount || isStaking) return;
    
    setIsStaking(true);
    try {
      // Simulate staking transaction
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Staking feature coming soon!');
    } catch (error) {
      console.error('Staking failed:', error);
    } finally {
      setIsStaking(false);
      setAmount('');
    }
  }, [amount, isStaking]);

  const handleUnstake = useCallback(async () => {
    if (isStaking) return;
    
    setIsStaking(true);
    try {
      // Simulate unstaking transaction
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Unstaking feature coming soon!');
    } catch (error) {
      console.error('Unstaking failed:', error);
    } finally {
      setIsStaking(false);
    }
  }, [isStaking]);

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Lock className="w-8 h-8 text-[#00D1FF]" />
          <h2 className="text-2xl font-bold">Stake $CTE</h2>
        </div>
        <div className="flex items-center space-x-2 text-[#00D1FF]">
          <TrendingUp className="w-5 h-5" />
          <span className="font-bold">{apy}% APY</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Staking Form */}
        <div className="space-y-4">
          <div className="bg-slate-700/30 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400">Available Balance</span>
              <span className="text-white font-medium">{availableBalance} CTE</span>
            </div>
            <div className="relative mt-4">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to stake"
                className="w-full bg-slate-800/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
              />
              <button
                onClick={() => setAmount(availableBalance)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#00D1FF] hover:text-[#0029FF]"
              >
                MAX
              </button>
            </div>
          </div>

          <button
            onClick={handleStake}
            disabled={!amount || isStaking || Number(amount) <= 0}
            className="w-full py-3 bg-gradient-to-r from-[#00D1FF] to-[#0029FF] text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isStaking ? 'Staking...' : 'Stake CTE'}
          </button>
        </div>

        {/* Staked Amount */}
        <div className="space-y-4">
          <div className="bg-slate-700/30 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400">Currently Staked</span>
              <span className="text-white font-medium">{stakedAmount} CTE</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center text-slate-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Locked for 7 days</span>
              </div>
              <div className="flex items-center text-[#00D1FF]">
                <Coins className="w-4 h-4 mr-1" />
                <span>+2.5 CTE earned</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleUnstake}
            disabled={isStaking || Number(stakedAmount) <= 0}
            className="w-full py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isStaking ? 'Unstaking...' : 'Unstake CTE'}
          </button>
        </div>
      </div>

      {/* Staking Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-700/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Flexible Staking</h3>
          <p className="text-slate-400 text-sm">Stake your CTE tokens and earn rewards with 7-day lock period</p>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Compound Rewards</h3>
          <p className="text-slate-400 text-sm">Automatically reinvest your earnings to maximize returns</p>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">No Minimum</h3>
          <p className="text-slate-400 text-sm">Start earning rewards with any amount of CTE tokens</p>
        </div>
      </div>
    </div>
  );
}