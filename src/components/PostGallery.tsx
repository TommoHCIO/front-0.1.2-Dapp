import React from 'react';

interface PostGalleryProps {
  images: string[];
  postId: string;
}

export function PostGallery({ images, postId }: PostGalleryProps) {
  // Preload images
  React.useEffect(() => {
    images.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, [images]);

  return (
    <div className="mt-3 grid grid-cols-3 gap-2">
      {images.map((img, index) => (
        <div 
          key={`${postId}-gallery-${index}`} 
          className="aspect-square rounded-xl overflow-hidden bg-slate-700/30"
        >
          <img 
            src={img} 
            alt={`Gallery item ${index + 1}`} 
            className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}