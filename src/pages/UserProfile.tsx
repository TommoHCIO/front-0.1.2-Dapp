import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Link as LinkIcon } from 'lucide-react';

function UserProfile() {
  const { username } = useParams();

  // Example user data - in a real app, this would come from an API
  const user = {
    name: "Sarah Chen",
    handle: "@sarahchen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Web3 Developer | Building on Solana | Chat To Earn enthusiast 🚀",
    location: "San Francisco, CA",
    website: "https://sarahchen.dev",
    joinDate: "Joined March 2024",
    followers: "12.5K",
    following: "1.2K",
    totalEarned: "45.8K CTE",
    level: 42,
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200"
  };

  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden">
      {/* Cover Image */}
      <div className="h-48 sm:h-64 relative">
        <img
          src={user.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-800/80 to-transparent" />
      </div>

      {/* Profile Info */}
      <div className="relative px-4 pb-6">
        {/* Avatar */}
        <div className="absolute -top-16 left-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-slate-900"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end pt-4">
          <button className="px-6 py-2 bg-[#00D1FF] text-white rounded-full font-semibold hover:bg-[#0029FF] transition-colors">
            Follow
          </button>
        </div>

        {/* User Info */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-slate-400">{user.handle}</p>

          <p className="mt-4 text-slate-200">{user.bio}</p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-slate-400">
              <MapPin className="w-4 h-4 mr-2" />
              {user.location}
            </div>
            <div className="flex items-center text-slate-400">
              <LinkIcon className="w-4 h-4 mr-2" />
              <a href={user.website} className="text-[#00D1FF] hover:underline">
                {user.website}
              </a>
            </div>
            <div className="flex items-center text-slate-400">
              <Calendar className="w-4 h-4 mr-2" />
              {user.joinDate}
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-6">
            <div>
              <span className="font-bold text-white">{user.following}</span>
              <span className="text-slate-400 ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold text-white">{user.followers}</span>
              <span className="text-slate-400 ml-1">Followers</span>
            </div>
            <div>
              <span className="font-bold text-[#00D1FF]">{user.totalEarned}</span>
              <span className="text-slate-400 ml-1">Earned</span>
            </div>
          </div>

          {/* Level Badge */}
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00D1FF]/20 to-[#0029FF]/20 rounded-full border border-[#00D1FF]/20">
            <span className="text-[#00D1FF] font-semibold">Level {user.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;