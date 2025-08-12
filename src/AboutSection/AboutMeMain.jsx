import AboutMeText from "./AboutMeText";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex justify-center px-4 max-w-[900px] mx-auto mt-[100px]"
    >
      <Motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.09 }}
        className="w-full"
      >
        <AboutMeText />
      </Motion.div>
    </div>
  );
};

export default AboutMeMain;
