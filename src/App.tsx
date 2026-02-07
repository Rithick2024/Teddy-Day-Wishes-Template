import { useEffect } from 'react';
import Hero from './components/Hero';
import TeddySelector from './components/TeddySelector';
import HugMeter from './components/HugMeter';
import CatchTeddy from './components/CatchTeddy';
import LoveNote from './components/LoveNote';
import FinalMessage from './components/FinalMessage';
import MusicToggle from './components/MusicToggle';

function App() {
  useEffect(() => {
    document.title = 'Happy Teddy Day 🧸❤️';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <TeddySelector />
      <HugMeter />
      <CatchTeddy />
      <LoveNote />
      <FinalMessage />
      <MusicToggle />
    </div>
  );
}

export default App;
