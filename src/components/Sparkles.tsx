import { useMemo } from "react";

const Sparkles = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 4 + Math.random() * 6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute text-gold"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animation: `sparkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
};

export default Sparkles;
