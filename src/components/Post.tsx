import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Repeat2, Heart, Share, Award, Coins, Bookmark } from 'lucide-react';
import { PostGallery } from './PostGallery';
import { PostAchievement } from './PostAchievement';
import type { Post as PostType } from '../types/post';

interface PostProps {
  post: PostType;
  onLike: (id: string) => void;
  onBookmark: (id: string) => void;
}

const Post = memo(({ post, onLike, onBookmark }: PostProps) => {
  // Preload images
  React.useEffect(() => {
    if (post.image) {
      const img = new Image();
      img.src = post.image;
    }
    if (post.gallery) {
      post.gallery.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [post]);

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 sm:p-4 hover:border-slate-600 transition-colors">
      <div className="flex space-x-3">
        <Link to={`/${post.handle.substring(1)}`} className="flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
            <img 
              src={post.avatar} 
              alt={post.author}
              className="w-full h-full object-cover"
              loading="lazy"
              width={48}
              height={48}
            />
          </div>
        </Link>
        <div className="flex-grow min-w-0">
          <div className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
            <Link 
              to={`/${post.handle.substring(1)}`}
              className="font-bold text-white hover:text-[#00D1FF] transition-colors truncate"
            >
              {post.author}
            </Link>
            <Link 
              to={`/${post.handle.substring(1)}`}
              className="text-slate-400 hover:text-[#00D1FF] transition-colors truncate hidden sm:block"
            >
              {post.handle}
            </Link>
            <span className="text-slate-400">·</span>
            <span className="text-slate-400 truncate">{post.timestamp}</span>
            {post.earnings && (
              <div className="ml-auto flex items-center text-[#00D1FF] text-sm">
                <Coins className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="font-medium">{post.earnings}</span>
              </div>
            )}
          </div>
          <p className="text-white mt-2 text-sm sm:text-base whitespace-pre-line break-words">{post.content}</p>
          
          {post.image && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-auto object-cover hover:opacity-90 transition-opacity cursor-pointer"
                loading="lazy"
              />
            </div>
          )}

          {post.gallery && <PostGallery images={post.gallery} postId={post.id} />}
          {post.achievement && <PostAchievement achievement={post.achievement} />}

          <div className="flex justify-between mt-3 text-slate-400 text-sm">
            <button 
              className="flex items-center space-x-1 hover:text-[#00D1FF] transition-colors group"
              aria-label="Comment"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>{post.comments}</span>
            </button>
            <button 
              className="flex items-center space-x-1 hover:text-emerald-500 transition-colors group"
              aria-label="Repost"
            >
              <Repeat2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>{post.reposts}</span>
            </button>
            <button 
              className={`flex items-center space-x-1 transition-colors group ${
                post.isLiked ? 'text-rose-500' : 'hover:text-rose-500'
              }`}
              onClick={() => onLike(post.id)}
              aria-label="Like"
            >
              <Heart 
                className={`w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform ${
                  post.isLiked ? 'fill-current' : ''
                }`}
              />
              <span>{post.likes}</span>
            </button>
            <button 
              className="flex items-center space-x-1 hover:text-[#00D1FF] transition-colors group"
              aria-label="Share"
            >
              <Share className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              className={`flex items-center space-x-1 transition-colors group ${
                post.isBookmarked ? 'text-[#00D1FF]' : 'hover:text-[#00D1FF]'
              }`}
              onClick={() => onBookmark(post.id)}
              aria-label="Bookmark"
            >
              <Bookmark 
                className={`w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform ${
                  post.isBookmarked ? 'fill-current' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Post.displayName = 'Post';

export default Post;