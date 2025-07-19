
import img from "../assets/subSkills.jpg"
const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative ">
      <div className="absolute bg-gradient-to-r from-orange-300 to-cyan-400 opacity-50 w-full h-full"></div>
      <img
        src={img}
        alt="subSkills image"
        className=""
      />
    </div>
  );
};

export default SubSkills;
