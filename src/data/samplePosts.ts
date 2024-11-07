import { Post } from '../types/post';
import { v4 as uuidv4 } from 'uuid';

export const SAMPLE_POSTS: Post[] = [
  {
    id: uuidv4(),
    author: "Sarah Chen",
    handle: "@sarahchen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    content: "Just earned 50 $CTE for my latest thread on Web3 innovations! 🚀\n\nLoving how Chat To Earn rewards quality content. Who else is building in the space? Let's connect! 💫",
    timestamp: "2h ago",
    likes: 234,
    comments: 56,
    reposts: 12,
    earnings: "50 $CTE",
    isLiked: false,
    isBookmarked: false,
    achievement: {
      title: "Top Earner",
      description: "Earned over 1000 $CTE this week"
    }
  },
  {
    id: uuidv4(),
    author: "Alex Rivera",
    handle: "@arivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "Check out my latest NFT collection dropping next week! 🎨✨",
    timestamp: "4h ago",
    image: "https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=800",
    likes: 567,
    comments: 89,
    reposts: 45,
    earnings: "75 $CTE",
    isLiked: false,
    isBookmarked: false
  },
  {
    id: uuidv4(),
    author: "Maria Thompson",
    handle: "@mariath",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    content: "Just launched my first dApp on Solana! Here's a sneak peek of the interface 👀",
    timestamp: "6h ago",
    gallery: [
      "https://images.unsplash.com/photo-1642751227050-feb02d648136?w=800",
      "https://images.unsplash.com/photo-1642751227053-e40b80cc5d73?w=800",
      "https://images.unsplash.com/photo-1642751227011-3bf7f711b10c?w=800"
    ],
    likes: 890,
    comments: 123,
    reposts: 67,
    earnings: "120 $CTE",
    isLiked: false,
    isBookmarked: false
  },
  {
    id: uuidv4(),
    author: "David Kim",
    handle: "@dkim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    content: "Just hit 1000 $CTE! 🎉 Thanks to everyone who's been engaging with my content. Here's to the next milestone! 🚀",
    timestamp: "8h ago",
    likes: 445,
    comments: 78,
    reposts: 23,
    earnings: "150 $CTE",
    isLiked: false,
    isBookmarked: false,
    achievement: {
      title: "Milestone Achieved",
      description: "Reached 1000 $CTE earnings"
    }
  }
];