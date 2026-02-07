import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const messages = [
  'You caught my heart!',
  'Caught with love!',
  'Every hug counts!',
  'You make me smile!',
  'Cuddles incoming!',
  'Forever yours!',
];

export default function CatchTeddy() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCatch = () => {
    setScore((prev) => prev + 1);
    const message = messages[Math.floor(Math.random() * messages.length)];
    setShowMessage(message);

    const newHearts = [...Array(8)].map((_, i) => ({
      id: Date.now() + i,
      x: position.x,
      y: position.y,
    }));
    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => setShowMessage(null), 2000);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !newHearts.find((nh) => nh.id === h.id)));
    }, 1000);
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-[#FFE8DD] to-[#FFF5F0]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#8B4513]">
          Catch the Teddy
        </h2>
        <p className="text-center text-[#A0522D] text-lg mb-8">
          Click the floating teddy to catch hugs!
        </p>

        {!isPlaying ? (
          <div className="text-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="px-10 py-5 bg-gradient-to-r from-[#FF6B9D] to-[#FFB6C1] text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Game
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl shadow-xl mb-6 relative overflow-hidden" style={{ height: '400px' }}>
              <div className="absolute top-4 left-4 text-2xl font-bold text-[#8B4513]">
                Score: {score}
              </div>

              <button
                onClick={handleCatch}
                className="absolute text-6xl cursor-pointer transform hover:scale-110 transition-transform teddy-float"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                🧸
              </button>

              {hearts.map((heart) => (
                <Heart
                  key={heart.id}
                  className="absolute text-[#FF6B9D] heart-burst-catch"
                  style={{
                    left: `${heart.x}%`,
                    top: `${heart.y}%`,
                  }}
                  size={30}
                  fill="#FF6B9D"
                />
              ))}

              {showMessage && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-[#FF6B9D] animate-bounce z-10">
                  {showMessage}
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setScore(0);
                }}
                className="px-8 py-3 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Reset Game
              </button>
            </div>
          </>
        )}

        {score > 0 && (
          <div className="mt-6 text-center text-xl text-[#A0522D] font-medium">
            You've caught {score} {score === 1 ? 'hug' : 'hugs'}! 💕
          </div>
        )}
      </div>
    </div>
  );
}
