import React from "react";

const frontendSkills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "➡️" },
];

const backendSkills = [
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
];

const toolsSkills = [
  { name: "Firebase", icon: "🔥" },
  { name: "Git", icon: "🐙" },
  { name: "Figma", icon: "🎨" },
];

const SkillRow = ({ title, skills, alignLeft }) => {
  return (
    <div
      className={`w-full flex max-w-4xl mx-auto ${
        alignLeft ? "justify-start" : "justify-end"
      } mb-10`}
    >
      <div
        className={`
          flex items-center bg-black bg-opacity-80 border border-cyan-500
          shadow-[0_0_30px_rgba(0,255,255,0.5)]
          px-8 py-4 gap-8
          max-w-full
          ${
            alignLeft
              ? "rounded-tr-full rounded-br-full rounded-l-lg"
              : "rounded-tl-full rounded-bl-full rounded-r-lg"
          }
          overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent
          min-w-[300px]
        `}
        style={{ maxWidth: "100vw" }}
      >
        {/* Category label */}
        <div
          className={`text-cyan-400 font-extrabold text-2xl tracking-wide whitespace-nowrap flex-shrink-0 select-none ${
            alignLeft ? "" : "order-2"
          }`}
        >
          {title}
        </div>

        {/* Skills bubbles */}
        <div className="flex space-x-8">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer select-none min-w-[80px]"
            >
              <div className="relative flex flex-col items-center group">
                {/* Cylinder bar */}
                <div
                  className="w-16 bg-cyan-700 bg-opacity-40 rounded-full
                    h-16 group-hover:h-48
                    transition-all duration-500 ease-in-out
                    shadow-[0_0_20px_rgba(0,255,255,0.7)]
                    flex items-start justify-center
                    overflow-hidden
                    relative"
                  style={{ perspective: "600px" }}
                >
                  <span
                    className="text-4xl text-cyan-400 mt-4 group-hover:mt-8
                      transition-all duration-500 ease-in-out
                      drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  >
                    {icon}
                  </span>

                  {/* Glow effect on top */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 rounded-t-full
                      bg-cyan-400 opacity-40 group-hover:opacity-70
                      transition-opacity duration-500"
                  />
                </div>
              </div>
              <span className="mt-4 text-cyan-300 text-sm font-semibold tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center gap-12 px-6 py-20 bg-gradient-to-b from-black via-black/90 to-black"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <SkillRow title="Frontend" skills={frontendSkills} alignLeft={true} />
      <SkillRow title="Backend" skills={backendSkills} alignLeft={false} />
      <SkillRow title="Tools" skills={toolsSkills} alignLeft={true} />
    </section>
  );
}
