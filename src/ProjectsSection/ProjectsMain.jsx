import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion as Motion} from "framer-motion";
//import { fadeIn } from "../framerMotion/variant"
import { fadeIn } from "../framerMotion/variant"
import gymetry1 from '../assets/gymteryhome.jpg'
import gynetry2 from '../assets/link4.jpg'
import gynetry3 from '../assets/link5.jpg'
const projects = [
  {
    name: "Gymetry",
    year: "July2025",
    align: "right",
    image: gymetry1,
    explore: "/project1",
     stackImage : [gynetry2,gynetry3]

  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    explore: "#",
    stackImage : [gynetry2,gynetry3]
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    explore: "#",
    stackImage : [gynetry2,gynetry3]   
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    explore: "#",
    stackImage : [gynetry2,gynetry3]
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <Motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
       
      >
        <ProjectsText />
      </Motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 rounded-2xl bg-black 
 p-4">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              stackImages = { project.stackImage

              }

            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
