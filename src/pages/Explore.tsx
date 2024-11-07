import React, { useState } from 'react';
import { Compass, Flame, Users, Hash, Search, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'NFTs', count: '1.2M posts', color: 'from-purple-500 to-pink-500' },
  { id: 2, name: 'DeFi', count: '892K posts', color: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Gaming', count: '754K posts', color: 'from-green-500 to-emerald-500' },
  { id: 4, name: 'DAOs', count: '521K posts', color: 'from-orange-500 to-red-500' },
];

const TRENDING_POSTS = [
  {
    id: 1,
    author: 'CryptoArtist',
    handle: '@nft_creator',
    avatar: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&w=150&h=150',
    content: 'Just dropped my latest NFT collection! Each piece comes with exclusive $CTE rewards for collectors 🎨',
    image: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?auto=format&fit=crop&w=800&q=80',
    likes: '12.5K',
    comments: '2.8K',
    earnings: '2.5K CHAT'
  },
  {
    id: 2,
    author: 'GameFiDev',
    handle: '@gamefi_builder',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&h=150',
    content: 'Sneak peek of our new blockchain game integration with Chat To Earn! Play, chat, and earn $CTE tokens 🎮',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    likes: '8.9K',
    comments: '1.2K',
    earnings: '1.8K CHAT'
  },
  {
    id: 3,
    author: 'DeFiWhale',
    handle: '@defi_master',
    avatar: 'https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?auto=format&fit=crop&w=150&h=150',
    content: 'New liquidity pool for $CTE/SOL is live! Provide liquidity and earn extra rewards while chatting 📈',
    likes: '15.2K',
    comments: '3.1K',
    earnings: '3.2K CHAT'
  }
];

const SUGGESTED_USERS = [
  {
    id: 1,
    name: 'Solana Expert',
    handle: '@sol_expert',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    followers: '125K',
    earnings: '450K CHAT'
  },
  {
    id: 2,
    name: 'NFT Queen',
    handle: '@nft_queen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
    followers: '89K',
    earnings: '380K CHAT'
  },
  {
    id: 3,
    name: 'Crypto Guru',
    handle: '@crypto_guru',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
    followers: '234K',
    earnings: '820K CHAT'
  }
];

function Explore() {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search topics, users, or posts"
          className="w-full bg-slate-800/50 text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 border border-slate-700 focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] focus:outline-none"
        />
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b border-slate-700">
        <button
          onClick={() => setActiveTab('trending')}
          className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
            activeTab === 'trending' ? 'text-[#00D1FF]' : 'text-slate-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Flame className="w-4 h-4" />
            <span>Trending</span>
          </div>
          {activeTab === 'trending' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D1FF]"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
            activeTab === 'users' ? 'text-[#00D1FF]' : 'text-slate-400 hover:text-white'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Top Users</span>
          </div>
          {activeTab === 'users' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D1FF]"></div>
          )}
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((category) => (
          <div
            key={category.id}
            className={`bg-gradient-to-r ${category.color} p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-transform`}
          >
            <div className="flex justify-between items-start">
              <div>
                <Hash className="w-8 h-8 text-white/90 mb-2" />
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <p className="text-sm text-white/80">{category.count}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/90" />
            </div>
          </div>
        ))}
      </div>

      {activeTab === 'trending' ? (
        /* Trending Posts */
        <div className="space-y-4">
          {TRENDING_POSTS.map((post) => (
            <div key={post.id} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
              <div className="flex space-x-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{post.author}</span>
                    <span className="text-slate-400">{post.handle}</span>
                  </div>
                  <p className="mt-2 text-slate-200">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="mt-4 rounded-xl w-full object-cover max-h-96"
                      loading="lazy"
                    />
                  )}
                  <div className="flex items-center justify-between mt-4 text-slate-400">
                    <div className="flex space-x-6">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                    <div className="text-[#00D1FF]">🪙 {post.earnings}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Suggested Users */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUGGESTED_USERS.map((user) => (
            <div key={user.id} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold">{user.name}</h3>
                  <p className="text-slate-400 text-sm">{user.handle}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span className="text-slate-300">{user.followers} followers</span>
                    <span className="text-[#00D1FF]">{user.earnings} earned</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-[#00D1FF] text-white rounded-lg font-medium hover:bg-[#0029FF] transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;