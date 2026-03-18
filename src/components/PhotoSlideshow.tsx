import { useState, useEffect } from "react";

interface Props {
  photos: string[];
}

const PhotoSlideshow = ({ photos }: Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div
      className="relative w-full mx-auto rounded-2xl overflow-hidden border-2 border-gold shadow-gold-glow"
      style={{
        aspectRatio: "4/5",
        maxWidth: "400px",
        animation: "gentle-pulse 4s ease-in-out infinite",
      }}
    >
      {photos.map((photo, i) => (
        <img
          key={i}
          src={photo}
          alt={`Birthday photo ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          style={{
            opacity: current === i ? 1 : 0,
            transition: "opacity 3s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default PhotoSlideshow;
