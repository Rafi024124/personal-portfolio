import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <Motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2"
      >
        <AboutMeText />
      </Motion.div>

      <Motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <AboutMeImage />
      </Motion.div>
    </div>
  );
};

export default AboutMeMain;
