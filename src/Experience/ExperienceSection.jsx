import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";
import { FaCheckCircle } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <Motion.div
      id="experience"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-[1000px] mx-auto mt-24 px-4 text-center rounded-2xl bg-black  p-4"
    >
      <h2 className="text-4xl font-bold prime-color mb-4">Experience</h2>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        With over <span className="text-orange font-semibold">1 year</span> of hands-on experience in building full-stack applications, I’ve worked with modern technologies like{" "}
        <span className="prime-color">React, Express.js, MongoDB, TailwindCSS</span> and more.
        I’m passionate about creating performant, accessible, and responsive user experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left text-sm text-gray-300">
        <p className="flex items-center gap-3">
          <FaCheckCircle className="text-orange-300" />
          Built and deployed 10+ full-stack projects
        </p>
        <p className="flex items-center gap-3">
          <FaCheckCircle className="text-orange-300" />
          Strong in responsive design & accessibility
        </p>
        <p className="flex items-center gap-3">
          <FaCheckCircle className="text-orange-300" />
          Integrated payment systems like Stripe
        </p>
        <p className="flex items-center gap-3">
          <FaCheckCircle className="text-orange-300" />
          Familiar with Git, GitHub, and CI/CD practices
        </p>
      </div>
    </Motion.div>
  );
};

export default ExperienceSection;
