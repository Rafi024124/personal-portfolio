import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

// Skill categories
const skills = {
  frontend: [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3Alt },
    { skill: "TailwindCSS", icon: RiTailwindCssFill },
    { skill: "JavaScript", icon: IoLogoJavascript },
    { skill: "TypeScript", icon: SiTypescript },
    { skill: "ReactJS", icon: FaReact },
    { skill: "Redux", icon: SiRedux },
    { skill: "NextJS", icon: SiNextdotjs },
  ],
  backend: [
    { skill: "NodeJS", icon: FaNodeJs },
    { skill: "ExpressJS", icon: SiExpress },
  ],
  database: [
    { skill: "MongoDB", icon: SiMongodb },
  ],
};

const AllSkills = () => {
  // Helper to render category
  const renderCategory = (title, items, gradient) => (
    <div
      className="mb-8 p-6 rounded-xl shadow-lg"
      style={{
        background: gradient,
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <h2 className="text-2xl font-bold prime-color mb-6">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <Motion.div
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
          </Motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {renderCategory("Frontend", skills.frontend, "linear-gradient(135deg, #0f172a, #1e293b)")}
      {renderCategory("Backend", skills.backend, "linear-gradient(135deg, #1e293b, #334155)")}
      {renderCategory("Database", skills.database, "linear-gradient(135deg, #0f172a, #14532d)")}
    </div>
  );
};

export default AllSkills;
