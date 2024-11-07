export interface User {
  id: string;
  name: string;
  handle: string;
  bio: string;
  avatar: string;
  coverImage: string;
  location?: string;
  website?: string;
  joinDate: string;
  followers: string;
  following: string;
  totalEarned: string;
  isVerified: boolean;
  level?: number;
}