export default function LoveNote() {
  return (
    <div className="py-20 px-6 bg-gradient-to-b from-[#FFF5F0] to-[#FFE8DD]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFE8DD] rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#D2691E]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl opacity-10 transform rotate-12">
            🧸
          </div>
          <div className="absolute bottom-0 left-0 text-8xl opacity-10 transform -rotate-12">
            💕
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#FF6B9D] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                A Note From My Heart
              </div>
            </div>

            <div className="text-center font-handwriting text-2xl md:text-3xl text-[#8B4513] leading-relaxed mb-8">
              <p className="mb-6" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                If I could, I'd send you a real teddy
              </p>
              <p className="mb-6" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                with all my hugs stitched inside.
              </p>
              <p className="text-[#A0522D]" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                Every thread would whisper "I love you"
              </p>
              <p className="text-[#A0522D]" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                and every button would hold a kiss.
              </p>
            </div>

            <div className="flex justify-center gap-2 text-4xl">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>💝</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🧸</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
            </div>

            <div className="mt-8 text-right text-[#A0522D] text-xl font-medium italic">
              Forever yours,
              <br />
              Your Human Teddy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
