import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MuteButton = () => {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free birthday melody URL — replace with your own audio file
    const audio = new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (muted) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
    setMuted(!muted);
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      className="fixed top-4 right-4 z-50 w-11 h-11 rounded-full border-2 border-gold shadow-gold-glow bg-background/80 backdrop-blur-sm flex items-center justify-center text-gold transition-transform duration-300 hover:scale-110"
      aria-label={muted ? "Unmute music" : "Mute music"}
    >
      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  );
};

export default MuteButton;
