import React, { useState, useCallback } from 'react';
import { Image, Link, Smile, X } from 'lucide-react';

function CreatePost() {
  const [post, setPost] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!post.trim() && !selectedImage || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      alert('Post creation coming soon!');
      setPost('');
      setSelectedImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [post, selectedImage, isSubmitting]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const emojis = ['😊', '👍', '🎉', '❤️', '🚀', '💡', '✨', '🔥'];

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 sm:p-4">
      <div className="flex space-x-3">
        <img
          src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          loading="lazy"
        />
        <div className="flex-grow">
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's happening?"
            className="w-full bg-transparent text-white placeholder-slate-400 outline-none resize-none text-sm sm:text-base"
            rows={3}
            maxLength={280}
          />
          
          {selectedImage && (
            <div className="relative mt-2">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-64 rounded-lg object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-1 bg-slate-900/80 rounded-full hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4 text-[#00D1FF]">
              <label className="cursor-pointer hover:text-[#0029FF] transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageSelect}
                />
                <Image className="w-5 h-5" />
              </label>
              <button className="hover:text-[#0029FF] transition-colors" disabled={isSubmitting}>
                <Link className="w-5 h-5" />
              </button>
              <div className="relative">
                <button
                  className="hover:text-[#0029FF] transition-colors"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  disabled={isSubmitting}
                >
                  <Smile className="w-5 h-5" />
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-full left-0 mb-2 p-2 bg-slate-800 rounded-lg border border-slate-700 shadow-lg">
                    <div className="flex gap-2">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => {
                            setPost(post + emoji);
                            setShowEmojiPicker(false);
                          }}
                          className="hover:bg-slate-700 p-1 rounded"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm text-slate-400">
                {post.length}/280
              </span>
              <button
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#00D1FF] to-[#0029FF] text-white rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 text-sm sm:text-base"
                onClick={handleSubmit}
                disabled={(!post.trim() && !selectedImage) || isSubmitting}
              >
                {isSubmitting ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;