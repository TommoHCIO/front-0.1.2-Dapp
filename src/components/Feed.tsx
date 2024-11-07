import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import Post from './Post';
import { SAMPLE_POSTS } from '../data/samplePosts';
import type { Post as PostType } from '../types/post';
import { v4 as uuidv4 } from 'uuid';

function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();
  const loadingRef = useRef<HTMLDivElement>(null);
  const loadingTimeout = useRef<NodeJS.Timeout>();
  const postsPerPage = 4;

  // Post buffering
  const [buffer, setBuffer] = useState<PostType[]>([]);
  const isBuffering = useRef(false);

  const loadBuffer = useCallback(async () => {
    if (isBuffering.current) return;
    isBuffering.current = true;

    try {
      const startIndex = (page - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const newPosts = SAMPLE_POSTS.slice(startIndex, endIndex).map(post => ({
        ...post,
        id: uuidv4() // Ensure unique IDs
      }));
      setBuffer(prev => [...prev, ...newPosts]);
    } catch (error) {
      console.error('Error loading buffer:', error);
    } finally {
      isBuffering.current = false;
    }
  }, [page]);

  const loadPosts = useCallback(async () => {
    if (loadingTimeout.current) {
      clearTimeout(loadingTimeout.current);
    }

    try {
      setIsLoading(true);
      setError(null);

      // Add artificial delay only for initial load
      if (page === 1) {
        await new Promise(resolve => {
          loadingTimeout.current = setTimeout(resolve, 800);
        });
      }

      // Take posts from buffer
      const postsToAdd = buffer.slice(0, postsPerPage);
      setBuffer(prev => prev.slice(postsPerPage));
      setPosts(prev => [...prev, ...postsToAdd]);

      // Check if we have more posts to load
      const totalPosts = SAMPLE_POSTS.length;
      const loadedPosts = (page * postsPerPage);
      setHasMore(loadedPosts < totalPosts);

    } catch (err) {
      setError('Failed to load posts. Please try again.');
      console.error('Error loading posts:', err);
    } finally {
      setIsLoading(false);
    }
  }, [buffer, page]);

  // Initial buffer load
  useEffect(() => {
    loadBuffer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load posts when buffer is ready
  useEffect(() => {
    if (buffer.length >= postsPerPage) {
      loadPosts();
    }
  }, [buffer, loadPosts]);

  // Intersection Observer setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !isLoading && !isBuffering.current) {
        setPage(prev => prev + 1);
      }
    }, options);

    if (loadingRef.current) {
      observer.current.observe(loadingRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      if (loadingTimeout.current) {
        clearTimeout(loadingTimeout.current);
      }
    };
  }, [hasMore, isLoading]);

  // Preload images for better UX
  useEffect(() => {
    const preloadImages = (posts: PostType[]) => {
      posts.forEach(post => {
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
        if (post.avatar) {
          const img = new Image();
          img.src = post.avatar;
        }
      });
    };

    if (buffer.length > 0) {
      preloadImages(buffer);
    }
  }, [buffer]);

  const handleLike = useCallback((postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  }, []);

  const handleBookmark = useCallback((postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isBookmarked: !post.isBookmarked
        };
      }
      return post;
    }));
  }, []);

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => {
            setPage(1);
            setPosts([]);
            setBuffer([]);
            loadBuffer();
          }}
          className="px-4 py-2 bg-[#00D1FF] text-white rounded-lg hover:bg-[#0029FF] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onBookmark={handleBookmark}
        />
      ))}
      
      <div ref={loadingRef} className="py-4">
        {isLoading && <LoadingSpinner />}
      </div>
      
      {!hasMore && posts.length > 0 && (
        <div className="text-center py-4 text-slate-400">
          No more posts to load
        </div>
      )}
    </div>
  );
}

export default memo(Feed);