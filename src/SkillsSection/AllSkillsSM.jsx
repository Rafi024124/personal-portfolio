import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

// Categorized skills
const skills = {
  frontend: [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3Alt },
    { skill: "JavaScript", icon: IoLogoJavascript },
    { skill: "ReactJS", icon: FaReact },
    { skill: "NextJS", icon: SiNextdotjs },
    { skill: "TailwindCSS", icon: RiTailwindCssFill },
  ],
  backend: [
    { skill: "NodeJS", icon: FaNodeJs },
    { skill: "ExpressJS", icon: SiExpress },
  ],
  database: [
    { skill: "MongoDB", icon: SiMongodb },
  ],
};

const AllSkillsSM = () => {
  // Render each category
  const renderCategory = (title, items) => (
    <div className="mb-10">
      <h2 className="text-lg sm:text-xl font-bold prime-color text-center border-2  mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <Motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-6xl sm:text-7xl text-orange-300" />
            <p className="text-center mt-2 text-orange-300 text-sm sm:text-base">
              {item.skill}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-12">
      {renderCategory("Frontend", skills.frontend)}
      {renderCategory("Backend", skills.backend)}
      {renderCategory("Database", skills.database)}
    </div>
  );
};

export default AllSkillsSM;
