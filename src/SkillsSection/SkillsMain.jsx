import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative z-30 py-12 px-4 bg-black p-4">
      <div className="max-w-[1200px] mx-auto min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        {/* Skills Title */}
        <Motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full text-center"
        >
          <SkillsText />
        </Motion.div>

        {/* Skills Grid */}
        {/* Large screens */}
        <div className="hidden lg:block mt-12 w-full">
          <AllSkills />
        </div>

        {/* Small to medium screens */}
        <div className="block lg:hidden mt-10 w-full">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
