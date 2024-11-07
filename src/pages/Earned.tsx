import React, { useState } from 'react';
import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, Award, Share2 } from 'lucide-react';
import { StakeCard } from '../components/StakeCard';

const TRANSACTION_HISTORY = [
  {
    id: 1,
    type: 'earned',
    amount: '+50 CTE',
    description: 'Post reached 1,000 likes',
    timestamp: '2 hours ago',
    status: 'Completed'
  },
  {
    id: 2,
    type: 'earned',
    amount: '+125 CTE',
    description: 'Weekly engagement rewards',
    timestamp: '1 day ago',
    status: 'Completed'
  },
  {
    id: 3,
    type: 'staked',
    amount: '-500 CTE',
    description: 'Staked in reward pool',
    timestamp: '3 days ago',
    status: 'Completed'
  },
  {
    id: 4,
    type: 'earned',
    amount: '+75 CTE',
    description: 'Content creation bonus',
    timestamp: '5 days ago',
    status: 'Completed'
  }
];

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Content Creator',
    description: 'Created 50+ posts',
    progress: 75,
    reward: '100 CTE'
  },
  {
    id: 2,
    title: 'Engagement Master',
    description: 'Received 1000+ likes',
    progress: 90,
    reward: '250 CTE'
  },
  {
    id: 3,
    title: 'Community Builder',
    description: 'Referred 10 users',
    progress: 40,
    reward: '500 CTE'
  }
];

function Earned() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-[#00D1FF]/20 to-[#0029FF]/20 rounded-xl p-6 border border-[#00D1FF]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400">Total Earned</p>
              <h3 className="text-2xl font-bold text-white mt-1">2,547 CTE</h3>
            </div>
            <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-xl flex items-center justify-center">
              <Coins className="w-6 h-6 text-[#00D1FF]" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-emerald-400 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+12.5% from last week</span>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400">Staked Amount</p>
              <h3 className="text-2xl font-bold text-white mt-1">500 CTE</h3>
            </div>
            <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-slate-300" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-[#00D1FF] text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>15.2% APY</span>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400">Available Balance</p>
              <h3 className="text-2xl font-bold text-white mt-1">2,047 CTE</h3>
            </div>
            <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center">
              <Share2 className="w-6 h-6 text-slate-300" />
            </div>
          </div>
          <button className="w-full mt-4 py-2 bg-[#00D1FF] text-white rounded-lg font-medium hover:bg-[#0029FF] transition-colors">
            Withdraw
          </button>
        </div>
      </div>

      {/* Staking Section */}
      <StakeCard
        availableBalance="2,047"
        stakedAmount="500"
        apy={15.2}
      />

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b border-slate-700">
        {['overview', 'history', 'achievements'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-4 text-sm font-medium transition-colors relative capitalize ${
              activeTab === tab ? 'text-[#00D1FF]' : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D1FF]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="bg-slate-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Earning Breakdown</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="font-medium">Content Creation</p>
                  <p className="text-sm text-slate-400">Earned from posts and engagement</p>
                </div>
              </div>
              <p className="text-lg font-semibold">1,247 CTE</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Staking Rewards</p>
                  <p className="text-sm text-slate-400">Earned from staked CTE</p>
                </div>
              </div>
              <p className="text-lg font-semibold">800 CTE</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Referral Bonus</p>
                  <p className="text-sm text-slate-400">Earned from referrals</p>
                </div>
              </div>
              <p className="text-lg font-semibold">500 CTE</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-slate-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
          <div className="space-y-4">
            {TRANSACTION_HISTORY.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === 'earned' ? 'bg-emerald-500/20' : 'bg-blue-500/20'
                  }`}>
                    {transaction.type === 'earned' ? (
                      <ArrowUpRight className={`w-5 h-5 ${
                        transaction.type === 'earned' ? 'text-emerald-500' : 'text-blue-500'
                      }`} />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-slate-400">{transaction.timestamp}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'earned' ? 'text-emerald-400' : 'text-blue-400'
                  }`}>
                    {transaction.amount}
                  </p>
                  <p className="text-sm text-slate-400">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="bg-slate-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="space-y-4">
            {ACHIEVEMENTS.map((achievement) => (
              <div key={achievement.id} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-slate-400">{achievement.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#00D1FF] font-semibold">{achievement.reward}</p>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-slate-400">
                        Progress
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold inline-block text-slate-400">
                        {achievement.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-700">
                    <div
                      style={{ width: `${achievement.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#00D1FF] to-[#0029FF]"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Earned;