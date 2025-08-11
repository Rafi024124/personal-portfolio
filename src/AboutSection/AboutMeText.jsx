import { Button, Link } from "react-scroll";
import NetflixButton from "../components/NetflixButton";

const AboutMeText = () => {
  return (
    <div className="bg-black rounded-2xl flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-cyan-100 max-w-3xl mx-auto p-4 mt-24">
      <h2 className="text-4xl sm:text-5xl font-bold prime-color mb-6 text-center">
        About Me
      </h2>

      <p className="text-base sm:text-lg leading-relaxed text-orange-100">
  I’m <span className="font-semibold prime-color">Rafi</span>, a passionate <span className="font-semibold prime-color">Full Stack Web Developer</span> specializing in the{" "}
  <span className="prime-text font-medium prime-color">MERN Stack</span>. 
  I enjoy building dynamic, user-friendly, and impactful applications that solve real-world problems, 
  and I’m always eager to explore the latest technologies to sharpen my skills.
  <br /><br />
  My journey into web development started when I realized the power of creating things that people can interact with instantly. What began as curiosity quickly turned into passion as I built my first projects, discovering the joy of bringing ideas to life through code.
  <br /><br />
  Outside of programming, I’m an <span className="font-semibold prime-color">artist</span> who loves drawing sketches as a creative hobby, and I also enjoy <span className="font-semibold prime-color">dancing</span> whenever I get the chance. I believe balancing tech skills with artistic expression keeps my creativity flowing — and yes, I’m still the guy who’ll suggest a late-night brainstorming session over coffee.
  .
</p>



      <div className="mt-10 flex lg:flex-row flex-col justify-center items-center gap-4 md:self-start sm:self-center">
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

        
      </div>
    </div>
  );
};

export default AboutMeText;
