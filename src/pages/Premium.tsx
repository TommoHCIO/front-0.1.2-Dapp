import React, { useMemo } from 'react';
import { Star, Crown, Shield, Rocket, Gift, Zap, Trophy, Target, Lock } from 'lucide-react';

interface Tier {
  name: string;
  level: number;
  requiredStake: string;
  color: string;
  benefits: string[];
  icon: React.ElementType;
}

function Premium() {
  const stakedAmount = 500; // This would come from your global state management

  const tiers: Tier[] = [
    {
      name: 'Bronze',
      level: 1,
      requiredStake: '100',
      color: 'from-amber-700 to-amber-500',
      icon: Shield,
      benefits: [
        'Basic engagement rewards',
        'Standard content creation tools',
        'Community access'
      ]
    },
    {
      name: 'Silver',
      level: 2,
      requiredStake: '500',
      color: 'from-slate-400 to-slate-300',
      icon: Star,
      benefits: [
        '1.5x engagement rewards',
        'Premium content creation tools',
        'Priority community support',
        'Custom profile badge'
      ]
    },
    {
      name: 'Gold',
      level: 3,
      requiredStake: '1,000',
      color: 'from-yellow-500 to-amber-400',
      icon: Crown,
      benefits: [
        '2x engagement rewards',
        'Advanced analytics dashboard',
        'Exclusive community events',
        'NFT creation tools',
        'Verified account status'
      ]
    },
    {
      name: 'Diamond',
      level: 4,
      requiredStake: '5,000',
      color: 'from-[#00D1FF] to-[#0029FF]',
      icon: Trophy,
      benefits: [
        '3x engagement rewards',
        'Personal account manager',
        'Early access to new features',
        'Custom NFT collection',
        'Premium API access',
        'Exclusive investment opportunities'
      ]
    }
  ];

  const currentTier = useMemo(() => {
    return tiers.reduce((prev, curr) => {
      return stakedAmount >= parseInt(curr.requiredStake.replace(',', '')) ? curr : prev;
    }, tiers[0]);
  }, [stakedAmount]);

  const nextTier = useMemo(() => {
    const currentIndex = tiers.findIndex(tier => tier.name === currentTier.name);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  }, [currentTier]);

  const progressToNextTier = useMemo(() => {
    if (!nextTier) return 100;
    const required = parseInt(nextTier.requiredStake.replace(',', ''));
    const prevRequired = parseInt(currentTier.requiredStake.replace(',', ''));
    return Math.min(((stakedAmount - prevRequired) / (required - prevRequired)) * 100, 100);
  }, [currentTier, nextTier, stakedAmount]);

  return (
    <div className="space-y-6">
      {/* Current Level Status */}
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentTier.color} flex items-center justify-center`}>
              <currentTier.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{currentTier.name} Level</h1>
              <p className="text-slate-400">Level {currentTier.level} Account</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">Current Stake</p>
            <p className="text-2xl font-bold text-[#00D1FF]">{stakedAmount} CTE</p>
          </div>
        </div>

        {nextTier && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Progress to {nextTier.name}</span>
              <span className="text-[#00D1FF]">{Math.round(progressToNextTier)}%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${nextTier.color} transition-all duration-1000`}
                style={{ width: `${progressToNextTier}%` }}
              />
            </div>
            <p className="text-sm text-slate-400">
              Stake {parseInt(nextTier.requiredStake.replace(',', '')) - stakedAmount} more CTE to reach {nextTier.name}
            </p>
          </div>
        )}
      </div>

      {/* Premium Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <Rocket className="w-8 h-8 text-[#00D1FF] mb-4" />
          <h3 className="text-lg font-semibold mb-2">Boosted Rewards</h3>
          <p className="text-slate-400">Earn up to 3x more CTE tokens from your social interactions</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <Gift className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Exclusive NFTs</h3>
          <p className="text-slate-400">Access to limited edition NFTs and digital collectibles</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <Zap className="w-8 h-8 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Priority Features</h3>
          <p className="text-slate-400">Early access to new platform features and tools</p>
        </div>
      </div>

      {/* Account Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative bg-slate-800/50 rounded-xl p-6 border ${
              currentTier.level >= tier.level ? 'border-[#00D1FF]' : 'border-slate-700'
            }`}
          >
            {currentTier.level >= tier.level ? (
              <div className="absolute top-4 right-4 bg-[#00D1FF] text-white text-xs px-2 py-1 rounded-full">
                Unlocked
              </div>
            ) : (
              <div className="absolute top-4 right-4 flex items-center text-slate-400 text-xs">
                <Lock className="w-3 h-3 mr-1" />
                Locked
              </div>
            )}
            
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                <tier.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="text-sm text-slate-400">{tier.requiredStake} CTE Required</p>
              </div>
            </div>

            <ul className="space-y-2">
              {tier.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Target className="w-4 h-4 text-[#00D1FF] mr-2" />
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Premium;