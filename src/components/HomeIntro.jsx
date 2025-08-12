import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

import AboutMeImage from "../AboutSection/AboutMeImage";

const HomeIntro = () => {
  return (
    <section
      id="home"
      className="bg-black rounded-2xl p-2 max-w-4xl mx-auto mt-24 px-6 py-20 select-none relative overflow-hidden"
    >
      <div className="wiping-mask absolute inset-0 bg-gradient-to-br from-black to-transparent pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Side */}
        <Motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full md:w-1/2 text-center md:text-left text-gray-100"
        >
          <p className="text-5xl font-extrabold prime-color mb-4">
            Hey, I am <span className="prime-color">'Md Rofi Uddin'</span>
          </p>
          <p className="text-3xl font-semibold mb-4">A Full Stack Web Developer</p>
          <p className="text-xl max-w-xl">
            Crafting modern web experiences with passion and precision.
          </p>
        </Motion.div>

        {/* Image Side */}
        <Motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1}}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <AboutMeImage></AboutMeImage>
        </Motion.div>
      </div>
    </section>
  );
};

export default HomeIntro;
