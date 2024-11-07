import React, { useState } from 'react';
import { Modal } from './Modal';
import { 
  Moon, 
  Sun, 
  Bell, 
  Shield, 
  Eye, 
  Globe, 
  Volume2, 
  Smartphone,
  X,
  ChevronRight,
  ToggleLeft 
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState({
    all: true,
    mentions: true,
    follows: true,
    earnings: true
  });
  const [volume, setVolume] = useState(80);
  const [language, setLanguage] = useState('English');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-2xl mx-auto bg-slate-800 rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <button onClick={onClose}>
              <X className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
            </button>
            <h2 className="text-xl font-bold">Settings</h2>
          </div>
        </div>

        {/* Settings Content */}
        <div className="p-4 max-h-[80vh] overflow-y-auto">
          {/* Theme Settings */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Sun className="w-5 h-5 mr-2 text-[#00D1FF]" />
              Appearance
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setTheme('light')}
                className={`p-4 rounded-lg border ${
                  theme === 'light' 
                    ? 'border-[#00D1FF] bg-[#00D1FF]/10' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <Sun className="w-6 h-6 mb-2" />
                <span>Light</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-4 rounded-lg border ${
                  theme === 'dark' 
                    ? 'border-[#00D1FF] bg-[#00D1FF]/10' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <Moon className="w-6 h-6 mb-2" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-[#00D1FF]" />
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>All Notifications</span>
                <button
                  onClick={() => setNotifications({ ...notifications, all: !notifications.all })}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    notifications.all ? 'bg-[#00D1FF]' : 'bg-slate-600'
                  }`}
                >
                  <span className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                    notifications.all ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Mentions</span>
                <button
                  onClick={() => setNotifications({ ...notifications, mentions: !notifications.mentions })}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    notifications.mentions ? 'bg-[#00D1FF]' : 'bg-slate-600'
                  }`}
                >
                  <span className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                    notifications.mentions ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>New Followers</span>
                <button
                  onClick={() => setNotifications({ ...notifications, follows: !notifications.follows })}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    notifications.follows ? 'bg-[#00D1FF]' : 'bg-slate-600'
                  }`}
                >
                  <span className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                    notifications.follows ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Earnings Updates</span>
                <button
                  onClick={() => setNotifications({ ...notifications, earnings: !notifications.earnings })}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    notifications.earnings ? 'bg-[#00D1FF]' : 'bg-slate-600'
                  }`}
                >
                  <span className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-transform ${
                    notifications.earnings ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Sound & Volume */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Volume2 className="w-5 h-5 mr-2 text-[#00D1FF]" />
              Sound & Volume
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">App Volume</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-400 mt-1">
                  <span>0%</span>
                  <span>{volume}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-[#00D1FF]" />
              Language
            </h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>

          {/* Privacy & Security */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-[#00D1FF]" />
              Privacy & Security
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-3 text-slate-400" />
                  <span>Privacy Settings</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-slate-400" />
                  <span>Security Settings</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Mobile Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-[#00D1FF]" />
              Mobile Settings
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50">
                <div className="flex items-center">
                  <ToggleLeft className="w-5 h-5 mr-3 text-slate-400" />
                  <span>Data Usage</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}