export interface Achievement {
  title: string;
  description: string;
}

export interface Post {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
  earnings: string;
  isLiked: boolean;
  isBookmarked: boolean;
  image?: string;
  gallery?: string[];
  achievement?: Achievement;
}