import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import type { FloatingElement } from '../types';

export default function Hero() {
  const [showHugAnimation, setShowHugAnimation] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const elements: FloatingElement[] = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
      });
    }
    setFloatingElements(elements);
  }, []);

  const handleSendHug = () => {
    setShowHugAnimation(true);
    setTimeout(() => setShowHugAnimation(false), 4000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF5F0] via-[#FFE8DD] to-[#FFD4C4]">
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute floating-element"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.id % 3 === 0 ? '🧸' : el.id % 3 === 1 ? '💕' : '✨'}
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#8B4513] hero-title">
          Happy Teddy Day,
          <br />
          <span className="text-[#FF6B9D]">My Cuddle Partner</span>
          <span className="inline-block ml-2 animate-bounce">🧸❤️</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#A0522D] mb-10 font-medium">
          Sending you infinite hugs wrapped in warmth and comfort
        </p>

        <button
          onClick={handleSendHug}
          className="group relative px-10 py-5 bg-gradient-to-r from-[#FF6B9D] to-[#FFB6C1] text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="relative z-10">Send a Hug</span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
      </div>

      {showHugAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative">
            <div className="text-9xl animate-hug-teddy">🧸</div>
            <div className="absolute inset-0 hearts-burst">
              {[...Array(12)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-[#FF6B9D] heart-float"
                  style={{
                    left: '50%',
                    top: '50%',
                    animationDelay: `${i * 0.1}s`,
                  }}
                  size={30}
                  fill="#FF6B9D"
                />
              ))}
            </div>
            <div className="mt-8 text-2xl text-white font-bold text-center px-6 animate-fade-in">
              This teddy carries all my hugs for you 💕
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
