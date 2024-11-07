import React, { useState } from 'react';
import { Bell, AtSign, Heart, MessageCircle, UserPlus, Coins, Star, Filter, Check, Clock } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'mention',
    user: {
      name: 'CryptoWhale',
      handle: '@whale_trader',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150'
    },
    content: 'mentioned you in a post',
    post: 'Check out @user\'s amazing analysis on $CTE tokenomics!',
    time: '2m ago',
    isRead: false
  },
  {
    id: 2,
    type: 'like',
    user: {
      name: 'NFT Artist',
      handle: '@creative_nft',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150'
    },
    content: 'liked your post',
    post: 'Just launched my new NFT collection...',
    time: '15m ago',
    isRead: false
  },
  {
    id: 3,
    type: 'earning',
    amount: '50 CTE',
    content: 'earned from your viral post',
    time: '1h ago',
    isRead: true
  },
  {
    id: 4,
    type: 'follow',
    user: {
      name: 'Solana Builder',
      handle: '@sol_dev',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150'
    },
    content: 'started following you',
    time: '2h ago',
    isRead: true
  },
  {
    id: 5,
    type: 'achievement',
    achievement: {
      name: 'Rising Star',
      description: 'Reached 1,000 followers',
      reward: '100 CTE'
    },
    time: '3h ago',
    isRead: true
  }
];

function NotificationIcon({ type }: { type: string }) {
  switch (type) {
    case 'mention':
      return <AtSign className="w-5 h-5 text-blue-400" />;
    case 'like':
      return <Heart className="w-5 h-5 text-rose-400" />;
    case 'earning':
      return <Coins className="w-5 h-5 text-yellow-400" />;
    case 'follow':
      return <UserPlus className="w-5 h-5 text-green-400" />;
    case 'achievement':
      return <Star className="w-5 h-5 text-purple-400" />;
    default:
      return <Bell className="w-5 h-5 text-slate-400" />;
  }
}

function Notifications() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.isRead;
    return notif.type === filter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Bell className="w-8 h-8 text-[#00D1FF]" />
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>
          <button
            onClick={markAllAsRead}
            className="flex items-center space-x-1 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Check className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Mark all as read</span>
            <span className="sm:hidden">Mark all</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors whitespace-nowrap text-xs sm:text-sm ${
              filter === 'all'
                ? 'bg-[#00D1FF] text-white'
                : 'bg-slate-700/50 hover:bg-slate-700'
            }`}
          >
            <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>All</span>
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors whitespace-nowrap text-xs sm:text-sm ${
              filter === 'unread'
                ? 'bg-[#00D1FF] text-white'
                : 'bg-slate-700/50 hover:bg-slate-700'
            }`}
          >
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Unread</span>
          </button>
          <button
            onClick={() => setFilter('mention')}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors whitespace-nowrap text-xs sm:text-sm ${
              filter === 'mention'
                ? 'bg-[#00D1FF] text-white'
                : 'bg-slate-700/50 hover:bg-slate-700'
            }`}
          >
            <AtSign className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Mentions</span>
          </button>
          <button
            onClick={() => setFilter('earning')}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors whitespace-nowrap text-xs sm:text-sm ${
              filter === 'earning'
                ? 'bg-[#00D1FF] text-white'
                : 'bg-slate-700/50 hover:bg-slate-700'
            }`}
          >
            <Coins className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Earnings</span>
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-2">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl transition-colors ${
              notification.isRead ? 'bg-slate-800/50' : 'bg-slate-800/80 border-l-4 border-[#00D1FF]'
            }`}
          >
            <div className="flex items-start space-x-4">
              {notification.user ? (
                <img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  loading="lazy"
                />
              ) : (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-700/50 flex items-center justify-center">
                  <NotificationIcon type={notification.type} />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    {notification.user && (
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold truncate">{notification.user.name}</span>
                        <span className="text-slate-400 truncate hidden sm:block">{notification.user.handle}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 mt-1">
                      <NotificationIcon type={notification.type} />
                      <span className="text-slate-300 text-sm">
                        {notification.type === 'earning' && (
                          <span className="text-yellow-400 font-semibold">{notification.amount} </span>
                        )}
                        {notification.content}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap ml-2">
                    {notification.time}
                  </span>
                </div>

                {notification.post && (
                  <div className="mt-2 p-3 rounded-lg bg-slate-700/30">
                    <p className="text-sm text-slate-300 line-clamp-2">{notification.post}</p>
                  </div>
                )}

                {notification.achievement && (
                  <div className="mt-2 p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="font-semibold">{notification.achievement.name}</p>
                        <p className="text-sm text-slate-400">{notification.achievement.description}</p>
                        <p className="text-sm text-[#00D1FF] mt-1">Reward: {notification.achievement.reward}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;