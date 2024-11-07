import React from 'react';
import { Award } from 'lucide-react';
import type { Achievement } from '../types/post';

interface PostAchievementProps {
  achievement: Achievement;
}

export function PostAchievement({ achievement }: PostAchievementProps) {
  return (
    <div className="mt-3 bg-slate-700/50 rounded-xl p-4 border border-slate-600">
      <div className="flex items-center space-x-3">
        <Award className="w-8 h-8 text-yellow-500" />
        <div>
          <h3 className="font-bold text-white">{achievement.title}</h3>
          <p className="text-sm text-slate-300">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}