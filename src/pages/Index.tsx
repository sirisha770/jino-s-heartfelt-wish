import { useState, useEffect, useCallback, useRef } from "react";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import PhotoCollage from "@/components/PhotoCollage";
import MuteButton from "@/components/MuteButton";
import ClickHeart from "@/components/ClickHeart";

const photos = [photo2, photo1];

const Index = () => {
  const [clickHearts, setClickHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const id = Date.now();
    setClickHearts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setClickHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1200);
  }, []);

  return (
    <div
      className="min-h-screen bg-birthday-gradient relative overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      <FloatingHearts />
      <Sparkles />
      <MuteButton />

      {/* Click hearts */}
      {clickHearts.map((h) => (
        <ClickHeart key={h.id} x={h.x} y={h.y} />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12 md:py-20 max-w-2xl mx-auto">
        {/* Heading */}
        <h1
          className="font-display text-5xl md:text-5xl text-rose-deep text-center mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Happy Birthday, Jino(Fern) ❤️
        </h1>

        {/* Photo slideshow */}
        <div
          className="w-full mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <PhotoSlideshow photos={photos} />
        </div>

        {/* Birthday message */}
        <div
          className="text-center mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.3s" }}
        >
          <p className="font-display text-xl md:text-2xl text-rose-deep leading-relaxed">
            You have occupied a very special place in my life.
            <br />
            When I see your smile, I feel so happy.
            <br /><br />
            I wish you endless happiness, success, and peace.
            <br />
            Not only today, but every day of your life should be special for you.
            <br /><br />
            Stay blessed, stay happy always 😊
          </p>
        </div>

        {/* Photo collage */}
        <div
          className="w-full mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.8s" }}
        >
          <PhotoCollage photos={photos} />
        </div>

        {/* Footer */}
        <p
          className="font-body text-lg md:text-xl text-gold font-semibold tracking-wide opacity-0 animate-fade-in"
          style={{ animationDelay: "2.3s" }}
        >
          Forever memorable for me 💫
        </p>
      </div>
    </div>
  );
};

export default Index;
