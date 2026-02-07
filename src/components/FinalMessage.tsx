import { useState } from 'react';

export default function FinalMessage() {
  const [showPopup, setShowPopup] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleTeddyClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount + 1 >= 5) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      setClickCount(0);
    }
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-[#FFE8DD] via-[#FFB6C1]/30 to-[#FF6B9D]/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          >
            {i % 2 === 0 ? '💕' : '✨'}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#8B4513] leading-tight">
          No matter how far we are,
          <br />
          <span className="text-[#FF6B9D]">my hugs always reach you</span>
        </h2>

        <button
          onClick={handleTeddyClick}
          className="text-9xl mb-8 animate-float-slow transform hover:scale-110 transition-transform cursor-pointer"
        >
          🧸
        </button>

        <div className="text-6xl mb-8 animate-pulse">💝</div>

        <p className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
          Forever your human teddy
        </p>

        <div className="flex justify-center gap-3 text-4xl">
          <span>❤️</span>
          <span>🧸</span>
          <span>💕</span>
          <span>🤗</span>
          <span>✨</span>
        </div>

        {clickCount > 0 && clickCount < 5 && (
          <div className="mt-6 text-sm text-[#A0522D]">
            Click the teddy {5 - clickCount} more times for a surprise!
          </div>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#FF6B9D] to-[#FFB6C1] text-white rounded-3xl p-10 shadow-2xl max-w-md mx-4 transform scale-0 animate-popup">
            <div className="text-7xl mb-4 animate-bounce">📦</div>
            <div className="text-3xl font-bold mb-2">
              Emergency Hug Delivery
            </div>
            <div className="text-xl">
              Completed! 🧸💕
            </div>
            <div className="mt-4 text-sm opacity-90">
              Special delivery just for you!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
