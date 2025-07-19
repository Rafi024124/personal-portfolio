import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion as Motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variant";

const SingleProject = ({ name, year, align, image, link, stackImages = [] }) => {
  const isLeft = align === "left";

  return (
    <Motion.div
      variants={fadeIn("top", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full items-center gap-10 flex-col md:flex-row ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text Content */}
      <div className="flex flex-col gap-2 text-center md:text-left">
        <h2 className="text-3xl prime-color font-bold">{name}</h2>
        <p className="prime-color tracking-wide">{year}</p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 prime-color hover:text-orange transition duration-300 mt-3 text-lg"
        >
          View Project <BsFillArrowUpRightCircleFill className="text-xl text-orange-300" />
        </a>
      </div>

      {/* Image Stack Container */}
      <div className="relative w-full max-w-[400px] h-[240px] group cursor-pointer">
        {/* Third Image (bottom layer) */}
        {stackImages[2] && (
          <img
            src={stackImages[2]}
            alt="stacked preview"
            className=" border border-orange-300 absolute top-6 left-6  lg:w-full lg:h-full w-[80%] object-cover rounded-xl shadow-md z-0 transition-all duration-300 ease-in-out group-hover:top-10 group-hover:left-10"
          />
        )}

        {/* Second Image (middle layer) */}
        {stackImages[1] && (
          <img
            src={stackImages[1]}
            alt="stacked preview"
            className="border border-orange-300 absolute top-3 left-3  lg:w-full lg:h-full w-[80%] object-cover rounded-xl shadow-md z-10 transition-all duration-300 ease-in-out group-hover:top-6 group-hover:left-6"
          />
        )}

        {/* Main Image (top layer) */}
        <img
          src={image}
          alt="project"
          className=" border border-orange-300 relative lg:w-full lg:h-full w-[80%] object-cover rounded-xl  shadow-lg z-20"
        />
      </div>
    </Motion.div>
  );
};

export default SingleProject;