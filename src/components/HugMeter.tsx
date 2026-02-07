import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function HugMeter() {
  const [hugCount, setHugCount] = useState(0);
  const maxHugs = 10;
  const isFull = hugCount >= maxHugs;

  const handleSendHug = () => {
    if (!isFull) {
      setHugCount((prev) => prev + 1);
    }
  };

  const resetMeter = () => {
    setHugCount(0);
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-[#FFF5F0] to-[#FFE8DD]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513]">
          Hug Meter
        </h2>
        <p className="text-[#A0522D] text-lg mb-8">
          Fill my heart with your hugs
        </p>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {[...Array(maxHugs)].map((_, i) => (
              <Heart
                key={i}
                className={`transform transition-all duration-300 ${
                  i < hugCount
                    ? 'text-[#FF6B9D] scale-110 heart-pulse'
                    : 'text-gray-300'
                }`}
                size={40}
                fill={i < hugCount ? '#FF6B9D' : 'none'}
              />
            ))}
          </div>

          <div className="mb-6">
            <div className="text-2xl font-bold text-[#8B4513] mb-2">
              {hugCount} / {maxHugs} Hugs Received
            </div>
            {isFull && (
              <div className="text-[#FF6B9D] text-xl font-bold animate-bounce">
                Warning: Maximum love received 🧸❤️
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleSendHug}
              disabled={isFull}
              className={`px-8 py-4 text-white text-lg font-bold rounded-full shadow-lg transform transition-all duration-300 ${
                isFull
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#FF6B9D] to-[#FFB6C1] hover:scale-105 hover:shadow-2xl'
              }`}
            >
              {isFull ? 'Heart Full' : 'Send me a hug'}
            </button>

            {isFull && (
              <button
                onClick={resetMeter}
                className="px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
              >
                Start Over
              </button>
            )}
          </div>
        </div>

        {isFull && (
          <div className="bg-[#FFB6C1] rounded-3xl p-6 text-white text-xl font-medium message-appear">
            My heart is overflowing with your love! 💕
          </div>
        )}
      </div>
    </div>
  );
}
