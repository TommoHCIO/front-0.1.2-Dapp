import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { WalletButton } from './WalletButton';
import { ProfileEditor } from './ProfileEditor';

export function Navbar() {
  const [notifications] = useState([
    { id: 1, text: 'You earned 50 CHAT tokens!', time: '2m ago' },
    { id: 2, text: '@whale_trader mentioned you', time: '5m ago' },
    { id: 3, text: 'Your post is trending!', time: '15m ago' },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileEditor, setShowProfileEditor] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close notifications
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md text-white border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-auto px-2 sm:px-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Chat To Earn"
                  className="w-full bg-slate-800/50 text-white placeholder-slate-400 rounded-full py-2 pl-10 pr-4 border border-slate-700 focus:border-[#00D1FF] focus:ring-1 focus:ring-[#00D1FF] focus:outline-none transition-colors text-sm sm:text-base"
                  style={{
                    fontSize: '16px',
                    borderRadius: '9999px',
                    WebkitAppearance: 'none'
                  }}
                />
                <div className="hidden group-focus-within:block absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-lg border border-slate-700 shadow-lg">
                  <div className="p-2">
                    <div className="text-sm text-slate-400 px-3 py-2">Try searching for:</div>
                    <button className="w-full text-left px-3 py-2 hover:bg-slate-700/50 rounded-lg">People</button>
                    <button className="w-full text-left px-3 py-2 hover:bg-slate-700/50 rounded-lg">Posts</button>
                    <button className="w-full text-left px-3 py-2 hover:bg-slate-700/50 rounded-lg">Topics</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <button 
                  ref={buttonRef}
                  className="flex items-center space-x-2 text-[#00D1FF] hover:text-[#0029FF] transition-colors p-2"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </button>
                
                {showNotifications && (
                  <div 
                    ref={notificationsRef}
                    className="absolute right-0 mt-2 w-screen sm:w-80 bg-slate-800 rounded-lg border border-slate-700 shadow-lg max-h-[80vh] overflow-y-auto"
                    style={{
                      maxWidth: 'calc(100vw - 1rem)',
                      right: '-0.5rem',
                      '@media (min-width: 640px)': {
                        right: '0'
                      }
                    }}
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                      <div className="space-y-3">
                        {notifications.map((notification) => (
                          <div 
                            key={notification.id}
                            className="flex items-start space-x-3 p-2 hover:bg-slate-700/50 rounded-lg cursor-pointer"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm line-clamp-2">{notification.text}</p>
                              <p className="text-xs text-slate-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="hidden sm:block">
                <WalletButton />
              </div>

              {/* Profile Menu */}
              <button
                onClick={() => setShowProfileEditor(true)}
                className="flex items-center space-x-2 hover:bg-slate-800/50 rounded-full p-1 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=150&h=150"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ProfileEditor
        isOpen={showProfileEditor}
        onClose={() => setShowProfileEditor(false)}
      />
    </>
  );
}