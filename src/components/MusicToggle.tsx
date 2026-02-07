import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-[#FF6B9D] to-[#FFB6C1] text-white rounded-full shadow-2xl hover:scale-110 transform transition-all duration-300"
      aria-label="Toggle music"
    >
      {isPlaying ? <Volume2 size={28} /> : <VolumeX size={28} />}
    </button>
  );
}
