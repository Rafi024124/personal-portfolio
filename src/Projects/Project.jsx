import React, { useState } from 'react';
import gymetry1 from '../assets/gymteryhome.jpg';
import { FaGithub } from 'react-icons/fa';
import plant1 from '../assets/plant.jpg';
import blog1 from '../assets/blogshare1.jpg';
import app1 from '../assets/appfinity1.jpg';
import chat from '../assets/chat3.jpg';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const baseRadius = 300;
const baseCardWidth = 300;
const baseCardHeight = 380;

const projects = [
 {
    name: "Gymetry",
    year: "July2025",
    align: "right",
    image: gymetry1,
    explore: "/project1",
    github: 'https://github.com/Rafi024124/Gymetry-fitness-client',
    live: 'https://gymetry-9566f.web.app/',
    description:
     "GYMETRY is a full-featured MERN stack Fitness Tracker web application that connects users with expert trainers, interactive classes, and a vibrant fitness community. Designed with performance, user experience, and modern aesthetics in mind, GYMETRY offers dynamic features for Admins, Trainers, and Members."
  },
  {
    name: "Cholo-Kotha-Boli",
    year: "July2025",
    align: "left",
    image: chat,
    explore: "#",
    github: 'https://github.com/Rafi024124/Cholo-Kotha-Boli-App',
    live: 'https://cholo-kotha-boli-app.onrender.com/login',
    description:
     "Cholo-Kotha-Boli is a real-time chat application designed for seamless and interactive communication. It allows users to connect with others, view online statuses, and engage in one-on-one conversations. Users can exchange both text messages and images in a clean, user-friendly interface. "
  },
  {
    name: "Blog Share",
    year: "June2025",
    align: "right",
    image: blog1,
    explore: "#",
    github: 'https://github.com/Rafi024124/Blog-Share-Client',
    description:
      "Blog Share is a full-stack web application that allows users to share, explore, and engage with blogs.Users can add their own blogs, browse posts shared by others, view categorized and featured blogs,comment on posts, and save favorites to a personal wishlist"
  },
  {
    name: "Plunt",
    year: "May2025",
    align: "left",
    image: plant1,
    explore: "#",
    github: 'https://github.com/Rafi024124/Plant-Client',
    description:
      "PLUNT is a full-stack plant care platform that helps users manage their plant collection with ease. It features secure authentication, plant logging with custom schedules, edit/delete options, sorting by next watering date, and a responsive dark/light theme"   
  },
  {
    name: "Appfinity",
    year: "april2025",
    align: "right",
    image: app1,
    explore: "#",
    github: 'https://github.com/Rafi024124/Appfinity',
    description:
     "Appfinity is a sleek frontend-only platform that simulates an app store experience, allowing users to browse categorized apps and visualize the installation process with interactive effects. "
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [radius, setRadius] = useState(baseRadius);
  const [cardWidth, setCardWidth] = useState(baseCardWidth);
  const [cardHeight, setCardHeight] =useState(baseCardHeight);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const updateSizes = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setRadius(baseRadius * 0.5);      // smaller radius on mobile
        setCardWidth(baseCardWidth * 0.6); // smaller card width
        setCardHeight(baseCardHeight * 0.6); // smaller card height
      } else {
        setRadius(baseRadius);
        setCardWidth(baseCardWidth);
        setCardHeight(baseCardHeight);
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const cardCount = projects.length;
  const theta = 360 / cardCount;

  const rotateCarousel = (direction) => {
    setActiveIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % cardCount
        : (prev - 1 + cardCount) % cardCount
    );
  };

  return (
    <div
    className='bg-black'
      style={{
        perspective: 1200,
        width: isMobile ? '100%' : `${cardWidth * 3}px`, // full width on mobile
        height: isMobile ? `${cardHeight * 2}px` : `${cardHeight * 1.5}px`, // enough height for mobile
        margin: '50px auto',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', // center on mobile and desktop
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2
      className='prime-color'
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        ⚡ My Projects
      </h2>

      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 1s cubic-bezier(0.05, 0.83, 0.43, 0.96)',
          transform: `translateZ(-${radius}px) rotateY(${-activeIndex * theta}deg)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {projects.map((app, i) => {
          const angle = theta * i;
          const isHovered = i === hoveredIndex;
          const isFlipped = i === flippedIndex;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                left: '50%',
                top: '50%',
                marginLeft: `-${cardWidth / 2}px`,
                marginTop: `-${cardHeight / 2}px`,
                transform: `
                  rotateY(${angle}deg)
                  translateZ(${radius}px)
                  ${i === activeIndex ? 'scale(1.1)' : 'scale(0.9)'}
                `,
                transition: 'transform 1s cubic-bezier(0.05, 0.83, 0.43, 0.96)',
                cursor: 'pointer',
                zIndex: i === activeIndex ? 10 : 1,
                userSelect: 'none',
              }}
              onClick={() => {
                setFlippedIndex(i === flippedIndex ? null : i);
                setActiveIndex(i);
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side */}
                <div
                  className={`
                    absolute w-full h-full rounded-[20px] p-4 flex flex-col justify-between
                    border-2
                    ${isHovered ? 'border-[#FFB74D]' : 'border-transparent'}
                    bg-black bg-opacity-70
                     md:backdrop-blur-lg
                    ${isHovered || i === activeIndex ? 'shadow-[0_0_20px_#FFB74D]' : 'shadow-[0_8px_15px_rgba(0,0,0,0.3)]'}
                  `}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    style={{
                      width: '100%',
                      height: cardHeight * 0.42, // scales with card height
                      objectFit: 'cover',
                      borderRadius: '15px',
                      marginBottom: '10px',
                    }}
                    draggable={false}
                  />
                  <h3
                    className='prime-color'
                    style={{
                      fontSize: '1 rem',
                    }}
                  >
                    {app.name}
                  </h3>
                  <p 
                    className='text-xs text-center mb-2'
                    style={{  color: '#ddd' }}
                  >
                    Click on the card!
                  </p>
                  <div className='flex gap-2 '>
                    <a
                      className='text-xs flex gap-1 justify-center items-center'
                      href={app.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(app.live, '_blank', 'noopener,noreferrer');
                      }}
                      style={{
                        padding: '10px 15px',
                        background: 'rgba(255, 179, 67, 0.10)',
                        borderRadius: '10px',
                        color: '#FFB74D',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        boxShadow: '0 0 10px #FFB74D',
                        transition: 'background 0.3s',
                      }}
                    >
                      Live <BsFillArrowUpRightCircleFill className="lg:text-xl text-xs text-orange-300" />
                    </a>
                    <a
                      className=' flex text-xs  gap-1 justify-center items-center'
                      href={app.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(app.github, '_blank', 'noopener,noreferrer');
                      }}
                      style={{
                        padding: '10px 10px',
                        background: 'rgba(255, 179, 67, 0.10)',
                        borderRadius: '10px',
                        color: '#FFB74D',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        boxShadow: '0 0 10px #FFB74D',
                        transition: 'background 0.3s',
                      }}
                    >
                      Github <FaGithub className="lg:text-xl text-xs text-orange-300" />
                    </a>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'rgba(0, 0, 0, 0.70)',
                    borderRadius: '20px',
                    color: '#FFB74D',
                    padding: '20px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: '8px',
                    lineHeight: '1.6',
                   

                  }}
                >
                  {app.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => rotateCarousel('prev')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: '#FFB74D',
          fontSize: '24px',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 0 8px #FFB74D',
          userSelect: 'none',
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={() => rotateCarousel('next')}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: '#FFB74DFF',
          fontSize: '24px',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 0 8px #FFB74D',
          userSelect: 'none',
        }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

export default Project;
