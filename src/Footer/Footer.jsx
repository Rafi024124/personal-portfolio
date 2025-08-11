import { Link } from "react-scroll";

const Footer = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Education",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  return (
    <div className="px-4 bg-black">
      {/* Footer Line */}
      <div className="w-full h-[1px] bg-orange-200 mt-24"></div>

      {/* Footer Content */}
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl prime-color">Md Rofi Uddin Rafi</p>
        <ul className="flex gap-4 prime-color text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
             className="cursor-pointer border-b-2 border-transparent hover:border-orange-300 transition-all duration-500"


              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Md Rofi Uddin Rafi | All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
