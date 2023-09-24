'use client';

import { useEffect } from 'react';

const VideoBackground = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const videoElement = document.querySelector('.video-background video');

    if (screenWidth <= 768) {
      videoElement.src = '/videos/a.mp4';
    } else {
      videoElement.src = '/videos/starry-night.mp4'; // Restore the original video for larger screens
    }
  }, []);

  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/videos/starry-night.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
