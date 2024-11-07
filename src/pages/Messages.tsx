import React, { useState } from 'react';
import { MessageCircle, Search, Phone, Video, Info, Image, Smile, Send, MoreVertical, Pin, Star, Clock, ArrowLeft } from 'lucide-react';

const INITIAL_CHATS = [
  {
    id: 1,
    user: {
      name: 'CryptoWhale',
      handle: '@whale_trader',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150',
      status: 'online'
    },
    lastMessage: 'What do you think about the new CTE staking pool?',
    timestamp: '2m ago',
    unread: 2,
    pinned: true
  },
  {
    id: 2,
    user: {
      name: 'NFT Artist',
      handle: '@creative_nft',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150',
      status: 'offline'
    },
    lastMessage: 'Thanks for the feedback on my latest collection! 🎨',
    timestamp: '1h ago',
    unread: 0,
    pinned: true
  },
  {
    id: 3,
    user: {
      name: 'Solana Builder',
      handle: '@sol_dev',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150',
      status: 'online'
    },
    lastMessage: 'The integration is ready for testing',
    timestamp: '3h ago',
    unread: 0,
    pinned: false
  }
];

const INITIAL_MESSAGES = {
  1: [
    {
      id: 1,
      sender: 'CryptoWhale',
      content: 'Hey! Have you seen the latest CTE price action? 📈',
      timestamp: '2:30 PM',
      type: 'text'
    },
    {
      id: 2,
      sender: 'user',
      content: 'Yes! The new staking mechanism is really driving adoption',
      timestamp: '2:31 PM',
      type: 'text'
    },
    {
      id: 3,
      sender: 'CryptoWhale',
      content: 'What do you think about the new CTE staking pool?',
      timestamp: '2:32 PM',
      type: 'text'
    }
  ],
  2: [
    {
      id: 1,
      sender: 'NFT Artist',
      content: 'Thanks for the feedback on my latest collection! 🎨',
      timestamp: '1:00 PM',
      type: 'text'
    }
  ],
  3: [
    {
      id: 1,
      sender: 'Solana Builder',
      content: 'The integration is ready for testing',
      timestamp: '11:30 AM',
      type: 'text'
    }
  ]
};

function Messages() {
  const [chats, setChats] = useState(INITIAL_CHATS);
  const [selectedChat, setSelectedChat] = useState<typeof INITIAL_CHATS[0] | null>(null);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojis = ['😊', '👍', '🎉', '❤️', '🚀', '💡', '✨', '🔥'];

  const handleSendMessage = () => {
    if (!message.trim() || !selectedChat) return;

    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = {
      id: messages[selectedChat.id].length + 1,
      sender: 'user',
      content: message.trim(),
      timestamp,
      type: 'text'
    };

    setMessages(prev => ({
      ...prev,
      [selectedChat.id]: [...prev[selectedChat.id], newMessage]
    }));

    setChats(prev => prev.map(chat => {
      if (chat.id === selectedChat.id) {
        return {
          ...chat,
          lastMessage: message.trim(),
          timestamp: 'Just now'
        };
      }
      return chat;
    }));

    setMessage('');
    setShowEmojiPicker(false);

    setTimeout(() => {
      const response = {
        id: messages[selectedChat.id].length + 2,
        sender: selectedChat.user.name,
        content: `Thanks for your message! This is an automated response from ${selectedChat.user.name}. 🤖`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };

      setMessages(prev => ({
        ...prev,
        [selectedChat.id]: [...prev[selectedChat.id], response]
      }));
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="grid grid-cols-12 gap-0 h-[calc(100vh-8rem)]">
      {/* Chat List - Hidden when chat is selected on mobile */}
      <div className={`col-span-12 lg:col-span-4 bg-slate-800/50 rounded-xl overflow-hidden ${
        selectedChat ? 'hidden lg:block' : 'block'
      }`}>
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Messages</h2>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search messages"
              className="w-full bg-slate-700/50 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-5rem)]">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex items-start space-x-3 hover:bg-slate-700/50 transition-colors ${
                selectedChat?.id === chat.id ? 'bg-slate-700/50' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={chat.user.avatar}
                  alt={chat.user.name}
                  className="w-12 h-12 rounded-full"
                  loading="lazy"
                />
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-800 ${
                  chat.user.status === 'online' ? 'bg-green-500' : 'bg-slate-500'
                }`}></div>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{chat.user.name}</span>
                  <span className="text-xs text-slate-400">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-slate-400 truncate">{chat.lastMessage}</p>
                <div className="flex items-center mt-1 space-x-2">
                  {chat.pinned && <Pin className="w-3 h-3 text-[#00D1FF]" />}
                  {chat.unread > 0 && (
                    <span className="px-2 py-0.5 bg-[#00D1FF] text-white text-xs rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window - Full width on mobile when chat is selected */}
      <div className={`col-span-12 lg:col-span-8 bg-slate-800/50 rounded-xl overflow-hidden flex flex-col ${
        selectedChat ? 'block' : 'hidden lg:block'
      }`}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedChat(null)}
                  className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <img
                  src={selectedChat.user.avatar}
                  alt={selectedChat.user.name}
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold">{selectedChat.user.name}</h3>
                  <p className="text-sm text-slate-400">{selectedChat.user.handle}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[selectedChat.id].map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${msg.sender === 'user' ? 'bg-[#00D1FF]' : 'bg-slate-700'} rounded-lg p-3`}>
                    <p className="text-white">{msg.content}</p>
                    <span className="text-xs text-slate-300 mt-1 flex items-center justify-end">
                      <Clock className="w-3 h-3 mr-1" />
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="w-full bg-slate-700/50 rounded-lg px-4 py-2 pr-10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
                  />
                  <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-600/50 rounded transition-colors"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                  {showEmojiPicker && (
                    <div className="absolute bottom-full right-0 mb-2 p-2 bg-slate-700 rounded-lg shadow-lg">
                      <div className="flex gap-2">
                        {emojis.map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => {
                              setMessage(message + emoji);
                              setShowEmojiPicker(false);
                            }}
                            className="hover:bg-slate-600 p-1 rounded"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="p-2 bg-[#00D1FF] hover:bg-[#0029FF] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;