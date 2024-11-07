import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Coins, Compass, Bell, MessageCircle, Star, MoreHorizontal, Settings } from 'lucide-react';
import { SettingsModal } from './SettingsModal';

function Logo() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-16 h-16 bg-gradient-to-r from-[#00D1FF] to-[#0029FF] rounded-2xl flex items-center justify-center relative group hover:scale-105 transition-transform cursor-pointer">
        <div className="text-white font-bold text-3xl">CTE</div>
        <div className="absolute -right-1 -top-1 w-4 h-4 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
        <div className="absolute -left-1 -bottom-1 w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);

  const navigationItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Explore', href: '/explore' },
    { icon: Coins, label: 'Earned $CTE', href: '/earned' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: MessageCircle, label: 'Messages', href: '/messages' },
    { icon: Star, label: 'Premium', href: '/premium' },
    { icon: MoreHorizontal, label: 'More', href: '/more' },
  ];

  const socialLinks = [
    { 
      name: 'X Socials',
      href: 'https://x.com/ChatTE_Official',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: 'https://t.me/+Gh8EG4sdj1NhMzJk',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.48.79-.74 3.08-1.34 5.15-2.23 6.19-2.66 2.95-1.23 3.56-1.44 3.97-1.44.09 0 .28.02.41.09.11.06.19.14.22.24.03.11.05.21.05.3z" />
        </svg>
      )
    },
    {
      name: 'Discord',
      href: '/discord',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      )
    },
    {
      name: 'Reddit',
      href: '/reddit',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8zm4.8 5.8c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM7.2 9.8c.44 0 .8.36.8.8 0 .44-.36.8-.8.8-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8zM12 15.6c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 h-full bg-[#15202B] text-white w-64 transform transition-transform duration-200 ease-in-out z-50 -translate-x-full lg:translate-x-0">
        <div className="flex flex-col h-full">
          <Logo />
          
          <nav className="px-4">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <NavLink 
                    to={item.href}
                    className={({ isActive }) => `
                      flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors
                      ${isActive ? 'bg-white/10' : ''}
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Settings and Social Links */}
          <div className="mt-auto">
            <div className="px-4">
              <button
                onClick={() => setShowSettings(true)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </div>

            <div className="mt-4 border-t border-slate-700/50">
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
}