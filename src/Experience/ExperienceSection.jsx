import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";
import { FaCheckCircle } from "react-icons/fa";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceItems = [
    "Built and deployed 10+ full-stack projects",
    "Strong in responsive design & accessibility",
    "Integrated payment systems like Stripe",
    "Familiar with Git, GitHub, and CI/CD practices",
  ];

  const educationItems = [
    {
      school: "Ahsanullah University of Science and Technology",
      gpa: "3.712",
    },
    {
      school: "Dhaka College",
      gpa: "5",
    },
    {
      school: "Ideal School and College",
      gpa: "5",
    },
  ];

  return (
    <Motion.div
      id="experience-education"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-[1000px] mx-auto mt-24 px-4 text-center rounded-2xl bg-black p-6"
    >
      <h2 className="text-4xl font-bold prime-color mb-8">Experience & Education</h2>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Experience and Education Tabs"
        className="inline-flex bg-gray-900 rounded-full p-1 mb-10"
      >
        <button
          role="tab"
          aria-selected={activeTab === "experience"}
          aria-controls="tab-experience"
          id="tab-btn-experience"
          tabIndex={activeTab === "experience" ? 0 : -1}
          onClick={() => setActiveTab("experience")}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            activeTab === "experience"
              ? "bg-color text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Experience
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "education"}
          aria-controls="tab-education"
          id="tab-btn-education"
          tabIndex={activeTab === "education" ? 0 : -1}
          onClick={() => setActiveTab("education")}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            activeTab === "education"
              ? "bg-color text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab panels */}
      <div>
      {/* Experience Panel */}
<div
  id="tab-experience"
  role="tabpanel"
  aria-labelledby="tab-btn-experience"
  hidden={activeTab !== "experience"}
  tabIndex={-1}
  className="text-left text-lg text-gray-300 max-w-2xl mx-auto grid md:grid-cols-2 gap-6"
>
  {experienceItems.map((item, idx) => (
    <p key={idx} className="flex items-center gap-3">
      <FaCheckCircle className="text-orange-300" />
      {item}
    </p>
  ))}
</div>


        {/* Education Panel */}
     <div
  id="tab-education"
  role="tabpanel"
  aria-labelledby="tab-btn-education"
  hidden={activeTab !== "education"}
  tabIndex={-1}
  className="text-left text-gray-300 max-w-md mx-auto space-y-6"
>
  {educationItems.map(({ school, gpa }, idx) => (
    <div
      key={idx}
      className="bg-gray-900 rounded-lg p-4 shadow-md flex justify-between items-center"
    >
      <h3 className="text-xl font-semibold prime-color flex-1">{school}</h3>
      <span className="prime-color font-bold ml-6 whitespace-nowrap">
        Grade: {gpa}
      </span>
    </div>
  ))}
</div>

      </div>
    </Motion.div>
  );
};

export default ExperienceSection;
