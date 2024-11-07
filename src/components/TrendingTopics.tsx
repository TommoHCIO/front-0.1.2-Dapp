import React, { useState, useEffect } from 'react';
import { TrendingUp, Coins } from 'lucide-react';

const TRENDING_TOPICS = [
  { 
    id: 1, 
    topic: 'ChatToEarn', 
    posts: '452K',
    earnings: '125K CHAT' 
  },
  { 
    id: 2, 
    topic: 'Solana', 
    posts: '128K',
    earnings: '89K CHAT'
  },
  { 
    id: 3, 
    topic: 'Web3Social', 
    posts: '89.2K',
    earnings: '67K CHAT'
  },
  { 
    id: 4, 
    topic: 'EarnRewards', 
    posts: '67.4K',
    earnings: '45K CHAT'
  },
];

function TrendingTopics() {
  const [topics, setTopics] = useState(TRENDING_TOPICS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setTopics(TRENDING_TOPICS);
      } catch (error) {
        console.error('Error loading trending topics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopics();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-[#00D1FF]" />
          Trending Topics
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-slate-700 rounded w-3/4 mb-2" />
              <div className="h-4 bg-slate-700 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <TrendingUp className="w-5 h-5 mr-2 text-[#00D1FF]" />
        Trending Topics
      </h2>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            className="hover:bg-slate-700/50 p-3 rounded-lg transition-colors cursor-pointer"
          >
            <p className="text-slate-400 text-sm">Trending in Chat To Earn</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white">#{topic.topic}</p>
                <p className="text-slate-400 text-sm">{topic.posts} posts</p>
              </div>
              <div className="flex items-center text-[#00D1FF] text-sm">
                <Coins className="w-4 h-4 mr-1" />
                {topic.earnings}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Earnings Card */}
      <div className="mt-6 bg-gradient-to-r from-[#00D1FF]/10 to-[#0029FF]/10 rounded-xl p-4 border border-[#00D1FF]/20">
        <h3 className="text-lg font-bold text-white mb-2">Platform Stats</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Total CHAT Earned</span>
            <span className="text-[#00D1FF] font-bold">326K CHAT</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Active Users</span>
            <span className="text-[#00D1FF] font-bold">52.8K</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Posts Today</span>
            <span className="text-[#00D1FF] font-bold">128.5K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTopics;