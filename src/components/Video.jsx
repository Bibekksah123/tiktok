import React, { useEffect, useRef } from "react";

function Video({ videoData, playing, setPlaying }) {
  const { url, caption, id } = videoData;
  const videoRef = useRef();

  const handlePlayVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .catch(() => console.error("Video playback failed"));
      setPlaying(id);
    } else {
      videoRef.current.pause();
      setPlaying(null);
    }
  };

  useEffect(() => {
    if (playing !== id && videoRef.current) {
      videoRef.current.pause();
    }
  }, [playing, id]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play()
          setPlaying(id)
        }
      });
     }, {
      threshold:0.5
    })
    if(videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  },[id,setPlaying])

  return videoData && (
    <div className="videoWrap">
      <video
        loop
        ref={videoRef}
        className="videoPlay"
        onClick={handlePlayVideo}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handlePlayVideo()
        }
        src={url}
        preload="metadata"
        aria-label={`Video: ${caption}`}
        tabIndex={0}
      />
    </div>
  );
}

export default Video;
