import React, { useState, useCallback } from 'react';
import { Camera, X, Pencil, Link as LinkIcon, MapPin, Calendar } from 'lucide-react';
import { Modal } from './Modal';

interface ProfileEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileEditor({ isOpen, onClose }: ProfileEditorProps) {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    handle: '@johndoe',
    bio: 'Web3 enthusiast | NFT collector | Building the future of social media',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
    avatar: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=150&h=150',
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=300',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Profile update coming soon!');
      onClose();
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-2xl mx-auto bg-slate-800 rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <button onClick={onClose}>
              <X className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
            </button>
            <h2 className="text-xl font-bold">Edit Profile</h2>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 bg-[#00D1FF] text-white rounded-lg font-medium hover:bg-[#0029FF] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>

        {/* Cover Image */}
        <div className="relative h-48">
          <img
            src={profile.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-800 transition-colors group">
            <Camera className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Avatar */}
        <div className="relative -mt-16 ml-6">
          <div className="relative inline-block">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-slate-800"
            />
            <button className="absolute bottom-2 right-2 p-2 bg-slate-900/80 rounded-full hover:bg-slate-800 transition-colors group">
              <Camera className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full bg-slate-700/50 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Handle</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">@</span>
              <input
                type="text"
                value={profile.handle.replace('@', '')}
                onChange={(e) => setProfile({ ...profile, handle: `@${e.target.value}` })}
                className="w-full bg-slate-700/50 rounded-lg pl-8 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Bio</label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              rows={3}
              className="w-full bg-slate-700/50 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="w-full bg-slate-700/50 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Website</label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="url"
                  value={profile.website}
                  onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                  className="w-full bg-slate-700/50 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}