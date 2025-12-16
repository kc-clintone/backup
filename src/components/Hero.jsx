import React from "react";
import { useNavigate } from "react-router-dom";
import HeroOrbitCarousel from "./HeroOrbitCarousel";
import { heroImages } from "./heroImages";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative bg-black w-full min-h-screen pt-40 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroOrbitCarousel images={heroImages} className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto h-full max-w-5xl items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl text-center pt-16 sm:pt-24 lg:pt-28">
          <h1 className="font-clash text-balance text-5xl font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-5xl">
            Discover.Explore.
            <br />
            Support.Connect.
          </h1>

          <p className="font-lato mx-auto mt-5 sm:mt-6 max-w-2xl text-pretty leading-relaxed text-white/80 text-base sm:text-lg lg:text-xl">
            Sanaa is where Kenyan talent meets global opportunity. It is a bold
            space for creators to shine and fans to connect.
          </p>

          <div className="font-lato mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => navigate("/sign-up")}
              className="rounded-full bg-red-600 px-7 sm:px-10 lg:px-12 py-2.5 text-sm sm:text-base font-semibold hover:bg-red-500"
            >
              Discover Creators Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
