import React from "react";
import { findInspoImages } from "./findInspoImages";

export default function FindInspo() {
  const trackImages = [...findInspoImages, ...findInspoImages];

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-clash text-center text-xl sm:text-2xl lg:text-3xl font-semibold">
          Find Inspiration in Every Moment
        </h2>

        {/* Clip for the whole band */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="curveBandClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.08 C 0.25 0.18, 0.75 0.18, 1 0.08 L 1 0.92 C 0.75 0.82, 0.25 0.82, 0 0.92 Z" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="relative overflow-hidden"
          style={{ WebkitClipPath: "url(#curveBandClip)", clipPath: "url(#curveBandClip)" }}
        >
          {/* Gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" />

          {/* 3D stage */}
          <div className="mx-auto max-w-5xl" style={{ perspective: "1200px" }}>
            <div className="flex w-[200%] animate-inspo-marquee" style={{ transformStyle: "preserve-3d" }}>
              {trackImages.map((img, i) => {
                const total = trackImages.length;
                const center = (total - 1) / 2;
                const offset = (i - center) / center; // -1..1
                const rotateY = offset * 8;

                return (
                  <div
                    key={`${img.src}-${i}`}
                    className="shrink-0 px-1 sm:px-2"
                    style={{ width: "clamp(160px, 42vw, 280px)" }}
                  >
                    <div
                      className="h-full w-full overflow-hidden bg-black shadow-[0_18px_40px_rgba(0,0,0,0.28)] transform-gpu"
                      style={{ transform: `rotateY(${rotateY.toFixed(2)}deg)`, backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="block h-52 w-full object-cover sm:h-64 lg:h-96"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
