import { useState } from 'react';
import type { Teddy } from '../types';

const teddies: Teddy[] = [
  {
    id: 1,
    name: 'Classic Brown',
    color: 'from-[#8B4513] to-[#A0522D]',
    emoji: '🧸',
    message: 'This teddy is soft… but not as soft as my heart for you',
    animation: 'wave',
  },
  {
    id: 2,
    name: 'Pink Cutie',
    color: 'from-[#FFB6C1] to-[#FF6B9D]',
    emoji: '💖',
    message: 'Whenever you hug this teddy, imagine it\'s me',
    animation: 'bounce',
  },
  {
    id: 3,
    name: 'Hoodie Bear',
    color: 'from-[#D2691E] to-[#CD853F]',
    emoji: '🐻',
    message: 'Sending unlimited cuddles your way',
    animation: 'spin',
  },
  {
    id: 4,
    name: 'Sleepy Bear',
    color: 'from-[#DEB887] to-[#F5DEB3]',
    emoji: '😴',
    message: 'Your smile is my comfort place',
    animation: 'hug',
  },
  {
    id: 5,
    name: 'Heart Hugger',
    color: 'from-[#FF69B4] to-[#FFB6C1]',
    emoji: '💝',
    message: 'You\'re my favorite human to hug',
    animation: 'heart',
  },
  {
    id: 6,
    name: 'Cozy Panda',
    color: 'from-[#2F4F4F] to-[#696969]',
    emoji: '🐼',
    message: 'Forever wrapped in your warmth',
    animation: 'bounce',
  },
];

export default function TeddySelector() {
  const [selectedTeddy, setSelectedTeddy] = useState<Teddy | null>(null);
  const [animatingId, setAnimatingId] = useState<number | null>(null);

  const handleTeddyClick = (teddy: Teddy) => {
    setAnimatingId(teddy.id);
    setSelectedTeddy(teddy);
    setTimeout(() => setAnimatingId(null), 1000);
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-[#FFE8DD] to-[#FFF5F0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#8B4513]">
          Choose Your Teddy
        </h2>
        <p className="text-center text-[#A0522D] text-lg mb-12">
          Each one carries a special message just for you
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {teddies.map((teddy) => (
            <button
              key={teddy.id}
              onClick={() => handleTeddyClick(teddy)}
              className={`group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                animatingId === teddy.id ? `teddy-${teddy.animation}` : ''
              }`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${teddy.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative">
                <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform">
                  {teddy.emoji}
                </div>
                <div className="text-[#8B4513] font-bold text-lg">{teddy.name}</div>
              </div>
            </button>
          ))}
        </div>

        {selectedTeddy && (
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto message-appear">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{selectedTeddy.emoji}</div>
              <div className="text-2xl font-bold text-[#8B4513]">{selectedTeddy.name}</div>
            </div>
            <p className="text-xl text-[#A0522D] italic leading-relaxed">
              "{selectedTeddy.message}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
