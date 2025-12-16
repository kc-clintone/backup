import React from 'react';

export default function AboutSanaaCreate() {
  const backgroundText = Array(14).fill("CREATE \u25A0 CONNECT");

  return (
    <section className="relative w-full min-h-[700px] bg-black overflow-hidden flex items-center justify-center py-20 px-4">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <div className="flex flex-col items-center justify-center transform -rotate-6 scale-110 text-white/60 opacity-100">
          {backgroundText.map((text, index) => (
            <div 
              key={index} 
              className="whitespace-nowrap font-clash font-semibold text-stroke"
              style={{
                fontSize: 'clamp(60px, 10vw, 145px)', 
                lineHeight: '0.9', 
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* RED CARD OVERLAY */}
      <div className="relative z-10 max-w-[86vw] max-h-[26rem] bg-[#E10600] text-white rounded-[20px]">
        
        {/* Inner Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-[3.5rem] md:gap-[56px] p-8 md:py-16 md:px-12 ">
          
          {/* Left Column: Title */}
          <div className="max-w-[31.75rem] md:w-1/2 text-center md:text-right">
            <h2 className="font-clash font-bold text-[1rem] md:text-[2.3125rem] leading-[1.6]">
              The Story Behind Sanaa:<br />
              A Space Designed to<br />
              Nurture Creativity and<br />
              Empower Kenyan Talent
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="max-w-[37.3125rem] min-h-[288px] flex flex-col justify-center gap-8 md:w-1/2 text-center md:text-left">
            <p className="font-lato text-[28px] md:text-[18px] leading-[2.8] m-0 opacity-90 max-w-prose mx-auto md:mx-0">
              Rooted in Kenya’s vibrant culture, Sanaa gives creators a space to be seen, heard, and supported. We connect talent with fans, ideas with opportunities, and dreams with possibilities. Across music, fashion, art, and storytelling, Sanaa is here to amplify the voices that matter.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}