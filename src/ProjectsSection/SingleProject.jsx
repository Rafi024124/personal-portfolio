import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";


const SingleProject = ({ name, year, align, image, stackImages = [], github, live, description = "" }) => {
  const isLeft = align === "left";

  return (
    <Motion.div
      variants={fadeIn("top", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full items-center gap-10 flex-col-reverse md:flex-row ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } text-center md:text-left`}
    >
      {/* Text Content */}
      <div className="flex flex-col gap-3 items-center md:items-start">
        <h2 className="text-3xl prime-color font-bold lg:max-w-[140px]">{name}</h2>
        <p className="prime-color tracking-wide">{year}</p>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 prime-color hover:text-orange transition duration-300 mt-3 text-lg"
        >
          Github <BsFillArrowUpRightCircleFill className="text-xl text-orange-300" />
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 prime-color hover:text-orange transition duration-300 mt-3 text-lg"
        >
          Live <BsFillArrowUpRightCircleFill className="text-xl text-orange-300" />
        </a>
      </div>

      {/* Image Stack Container */}
      <div className="relative w-full max-w-[400px] h-[240px] group cursor-pointer flex items-center justify-center">
        {/* Stack Image (bottom layer) */}
        {stackImages[0] && (
          <img
            src={stackImages[0]}
            alt="stacked preview"
            className="border border-orange-300 absolute top-6 left-6 w-[80%] h-[80%] md:w-full md:h-full object-cover rounded-xl shadow-md z-0 transition-all duration-300 ease-in-out group-hover:top-10 group-hover:left-10"
          />
        )}

        {/* Main Image (top layer) */}
        <img
          src={image}
          alt="project"
          className="border border-orange-300 relative w-[80%] h-[80%] md:w-full md:h-full object-cover rounded-xl shadow-lg z-20"
        />

        {/* Description Overlay */}
        <div className=" absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-xl z-30 flex items-center justify-center p-4">
          <p className="text-white text-center text-sm md:text-base">{description}</p>
        </div>
      </div>
    </Motion.div>
  );
};

export default SingleProject;
