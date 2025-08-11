
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";
import austLogo from "../assets/aust1.png";

const ExperienceSection = () => {
  // No need for tabs anymore, so no state for activeTab

  return (
    <Motion.div
      id="experience"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-[1000px] mx-auto mt-24 px-4 text-center rounded-2xl bg-black p-6"
    >
      <h2 className="text-4xl font-bold prime-color mb-8">
       Education
      </h2>

      {/* Only Education Panel */}
      <div
        className="text-left text-gray-300 max-w-4xl mx-auto space-y-6"
        role="region"
        aria-label="Education"
      >
        {/* Varsity Card */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-400/30 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition">
          <div className="flex items-center gap-4">
            <img
              src={austLogo}
              alt="AUST Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold prime-color">
                Ahsanullah University of Science and Technology
              </h3>
              <p className="text-orange-100">
                BSc in Computer Science & Engineering
              </p>
              <p className="text-gray-400 text-sm">Dec 2020 – Jan 2025</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-300">
            Specializing in Web Development & Software Engineering. Current CGPA:{" "}
            <span className="prime-color font-semibold">3.712/4.00</span>. Actively
            involved in programming contests, hackathons, and open-source
            contributions.
          </p>
          <ul className="list-disc list-inside mt-3 text-sm text-gray-300 space-y-1">
            <li>
              Relevant Coursework: Data Structures, Algorithms, Databases,
              Computer Networks and Cybersecurity Software Engineering
            </li>
            <li>Member of AUST Programming Club</li>
            <li>Built multiple projects</li>
            <li>
              Thesis: Deep Learning-Based Disease Classification in Wireless
              Capsule Endoscopy: A Comprehensive Study
            </li>
          </ul>
        </div>

        {/* College & School Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* College Card */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-400/30 rounded-xl p-6 shadow-md hover:shadow-cyan-400/30 transition">
            <h3 className="text-xl font-bold prime-color">Dhaka College</h3>
            <p className="text-orange-100">Higher Secondary Certificate (Science)</p>
            <p className="text-gray-400 text-sm">2019</p>
            <span className="mt-2 inline-block text-sm bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400">
              GPA: 5.00 / 5.00
            </span>
            <p className="mt-3 text-sm text-gray-300">
              Participated in science fairs and robotics workshops.
            </p>
          </div>

          {/* School Card */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-400/30 rounded-xl p-6 shadow-md hover:shadow-cyan-400/30 transition">
            <h3 className="text-xl font-bold prime-color">Ideal School and College</h3>
            <p className="text-orange-100">Secondary School Certificate (Science)</p>
            <p className="text-gray-400 text-sm">2017</p>
            <span className="mt-2 inline-block text-sm bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400">
              GPA: 5.00 / 5.00
            </span>
            <p className="mt-3 text-sm text-gray-300">Awarded for excellence in academics</p>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ExperienceSection;
