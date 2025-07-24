import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="bg-black rounded-2xl flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-cyan-100 max-w-3xl mx-auto p-4 mt-24">
      <h2 className="text-4xl sm:text-5xl font-bold prime-color mb-6">
        About Me
      </h2>

      <p className="text-base sm:text-lg leading-relaxed text-orange-100">
        I’m <span className="font-semibold prime-color">Rafi</span>, a Full Stack Web Developer specializing in the{" "}
        <span className="prime-text font-medium">MERN Stack</span>.
        I’m constantly adapting to new technologies, staying up-to-date with the latest tools in the development world.
        I enjoy building real-world projects.
        Beyond coding, I’m driven by a passion for continuous learning and community contribution.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 md:self-start sm:self-center">
        {/* Scroll Button */}
        <button className="border border-orange-400 rounded-full py-2 px-6 text-base sm:text-lg text-white flex items-center gap-2 transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(253,186,116,0.5)] hover:scale-105">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            className="cursor-pointer"
          >
            My Projects
          </Link>
        </button>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-color text-black font-semibold rounded-full py-2 px-6 text-base sm:text-lg flex items-center gap-2 transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(253,186,116,0.5)] hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
