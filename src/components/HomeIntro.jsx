// HomeIntro.jsx
import React from "react";

const HomeIntro = () => {
  return (
    <section className="max-w-4xl bg-black rounded-3xl mx-auto px-6 py-28 text-center text-gray-100 select-none relative overflow-hidden">
      <div className="wiping-mask absolute inset-0 bg-gradient-to-br from-black to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        <p className="text-5xl font-extrabold opacity-0 animate-text-fade-slide">
          Hey, I am <span className="prime-color">'Md Rofi Uddin'</span>
        </p>
        <p className="text-3xl font-semibold opacity-0 animate-text-fade-slide animation-delay-500">
          A Full Stack Web Developer
        </p>
        <p className="text-xl opacity-0 animate-text-fade-slide animation-delay-1000 max-w-xl mx-auto">
          Crafting modern web experiences with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default HomeIntro;
