import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion as Motion} from "framer-motion";
//import { fadeIn } from "../framerMotion/variant"
import { fadeIn } from "../framerMotion/variant"
import gymetry1 from '../assets/gymteryhome.jpg'
import gynetry2 from '../assets/link4.jpg'
import gynetry3 from '../assets/link5.jpg'
import plant1 from '../assets/plant.jpg'
import plant2 from '../assets/plant2.jpg'
import blog1 from '../assets/blogshare1.jpg'
import blog2 from '../assets/blogshare2.jpg'
import app1 from '../assets/appfinity1.jpg'
import app2 from '../assets/appfinity2.jpg'
import chat from '../assets/chat3.jpg'
import chat2 from '../assets/chat2.jpg'
const projects = [
  {
    name: "Gymetry",
    year: "July2025",
    align: "right",
    image: gymetry1,
    explore: "/project1",
     stackImage : [gynetry2,gynetry3],
      github: 'https://github.com/Rafi024124/Gymetry-fitness-client',
      live: 'https://gymetry-9566f.web.app/',
      description: "GYMETRY is a full-featured MERN stack Fitness Tracker web application that connects users with expert trainers, interactive classes, and a vibrant fitness community. Designed with performance, user experience, and modern aesthetics in mind, GYMETRY offers dynamic features for Admins, Trainers, and Members."

  },
  {
    name: "Cholo-Kotha-Boli",
    year: "July2025",
    align: "left",
    image: chat,
    explore: "#",
     stackImage : [chat2,gynetry3],
      github: 'https://github.com/Rafi024124/Cholo-Kotha-Boli-App',
      live: 'https://cholo-kotha-boli-app.onrender.com/login',
      description: "Cholo-Kotha-Boli is a real-time chat application designed for seamless and interactive communication. It allows users to connect with others, view online statuses, and engage in one-on-one conversations. Users can exchange both text messages and images in a clean, user-friendly interface. "

  },
  {
    name: "Blog Share",
    year: "June2025",
    align: "right",
    image: blog1,
    explore: "#",
    stackImage : [blog2,gynetry3],
     github:'https://github.com/Rafi024124/Blog-Share-Client',
     description: "Blog Share is a full-stack web application that allows users to share, explore, and engage with blogs.It includes ncludes secure authentication, enabling users to add their own blogs, browse posts shared by others, view categorized and featured blogs, search by title or category, comment on posts, and save favorites to a personal wishlist"
  },
  {
    name: "Plunt",
    year: "May2025",
    align: "left",
    image: plant1,
    explore: "#",
    stackImage : [plant2,gynetry3],
     github:'https://github.com/Rafi024124/Plant-Client',
     description: "PLUNT is a full-stack plant care platform that helps users manage their plant collection with ease. It features secure authentication, plant logging with custom schedules, edit/delete options, sorting by next watering date, and a responsive dark/light theme"   
  },
  {
    name: "Appfinity",
    year: "april2025",
    align: "right",
    image: app1,
    explore: "#",
    stackImage : [app2,gynetry3],
    github:'https://github.com/Rafi024124/Appfinity',
    description: "Appfinity is a sleek frontend-only platform that simulates an app store experience, allowing users to browse categorized apps and visualize the installation process with interactive effects. "
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1400px] mx-auto px-4">
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
              description={project.description}
              github={project.github}
              live={project.live}

            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
