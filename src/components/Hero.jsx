import React from "react";
import { FlipWords } from "./ui/flip-words";

function Hero() {
  return (
    <section className=" flex justify-center items-center min-h-[80vh] sm:min-h-screen px-6 xl:w-screen">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl font-bold md:text-7xl md:font-bold tracking-tight text-white leading-tight">
          Hello, I'm <br />
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Kaibalya Sahoo
          </span>
        </h1>
        <p className="mt-4 text-md md:text-2xl text-gray-300">
          A passionate Full-Stack Developer <br />
          Find me Mostly in
          <FlipWords
            words={[
              "GitHub",
              "Fiverr",
              "LinkedIn",
              "VS Code",
              "Hackathons",
              "Discord",
              "Stack Overflow",
            ]}
            duration={100}
          />
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/about"
            className="bg-blue-500 text-white md:px-6 md:py-3 px-3 py-2 rounded hover:bg-blue-600 transition-all duration-300"
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
