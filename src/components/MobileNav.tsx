import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Coins, Bell, MessageCircle, Star } from 'lucide-react';

export function MobileNav() {
  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Explore', href: '/explore' },
    { icon: Coins, label: 'Earned', href: '/earned' },
    { icon: Star, label: 'Premium', href: '/premium' },
    { icon: MessageCircle, label: 'Chat', href: '/messages' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-800 backdrop-blur-lg lg:hidden z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) => `
              flex flex-col items-center justify-center w-16 h-16 text-xs
              ${isActive ? 'text-[#00D1FF]' : 'text-slate-400 hover:text-white'}
              transition-colors
            `}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-[10px]">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}