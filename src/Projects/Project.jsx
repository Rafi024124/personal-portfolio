import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gymetry1 from '../assets/gymteryhome.jpg';
import { FaGithub } from 'react-icons/fa';
import plant1 from '../assets/plant.jpg';
import blog1 from '../assets/blogshare1.jpg';
import apple from '../assets/apple.jpg';
import chat from '../assets/chat3.jpg';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const baseRadius = 300;
const baseCardWidth = 300;
const baseCardHeight = 380;

const projects = [
  {
    id: 1,
    name: "Gymetry",
    year: "July2025",
    align: "right",
    image: gymetry1,
    explore: "/project1",
    github: 'https://github.com/Rafi024124/Gymetry-fitness-client',
    live: 'https://gymetry-9566f.web.app/',
    tech: {
      "Frontend": ["HTML", "CSS", "Tailwind CSS", "React.js"],
      "Backend": ["Node.js", "Express.js", "Firebase Authentication"],
      "Database": ["MongoDB"],
    },
    description:
      "GYMETRY is a full-featured MERN stack Fitness Tracker web application that connects users with expert trainers, interactive classes, and a vibrant fitness community. Designed with performance, user experience, and modern aesthetics in mind, GYMETRY offers dynamic features for Admins, Trainers, and Members.",
    challenges: "Managing real-time class bookings and ensuring smooth user authentication with Firebase.",
    futurePlans: "Add workout tracking analytics, mobile app support, and AI-powered trainer recommendations."
  },
  {
    id: 2,
    name: "Cholo-Kotha-Boli",
    year: "July2025",
    align: "left",
    image: chat,
    explore: "/project2",
    github: 'https://github.com/Rafi024124/Cholo-Kotha-Boli-App',
    live: 'https://cholo-kotha-boli-app.onrender.com/login',
    tech: {
      "Frontend": ["HTML", "CSS", "Tailwind CSS", "React.js", "Zustand"],
      "Backend": ["Node.js", "Express.js", "Socket.io"],
      "Database": ["Mongoose"],
    },
    description:
      "Cholo-Kotha-Boli is a real-time chat application designed for seamless and interactive communication. It allows users to connect with others, view online statuses, and engage in one-on-one conversations. Users can exchange both text messages and images in a clean, user-friendly interface.",
    challenges: "Ensuring real-time synchronization and handling image uploads efficiently.",
    futurePlans: "Implement group chats, voice messages, and enhanced moderation tools."
  },
  {
    id: 3,
    name: "Blog Share",
    year: "June2025",
    align: "right",
    image: blog1,
    explore: "/project3",
    github: 'https://github.com/Rafi024124/Blog-Share-Client',
    live: 'https://blog-share-7363d.web.app/',
    tech: {
      "Frontend": ["HTML", "CSS", "Tailwind CSS", "React.js"],
      "Backend": ["Node.js", "Express.js", "Firebase Authentication"],
      "Database": ["MongoDB"],
    },
    description:
      "Blog Share is a full-stack web application that allows users to share, explore, and engage with blogs.Users can add their own blogs, browse posts shared by others, view categorized and featured blogs,comment on posts, and save favorites to a personal wishlist",
    challenges: "Handling rich text editing and securing user comments from spam.",
    futurePlans: "Add advanced search filters, user profile customization, and social sharing features."
  },
  {
    id: 4,
    name: "Plunt",
    year: "May2025",
    align: "left",
    image: plant1,
    explore: "/project4",
    github: 'https://github.com/Rafi024124/Plant-Client',
    live: 'https://plant-care-tracker-f7dda.web.app/',
    tech: {
      "Frontend": ["HTML", "CSS", "Tailwind CSS", "React.js"],
      "Backend": ["Node.js", "Express.js", "Firebase Authentication"],
      "Database": ["MongoDB"],
    },
    description:
      "PLUNT is a full-stack plant care platform that helps users manage their plant collection with ease. It features secure authentication, plant logging with custom schedules, edit/delete options, sorting by next watering date, and a responsive dark/light theme",
    challenges: "Implementing reliable scheduling notifications and syncing data in real-time.",
    futurePlans: "Integrate AI plant health diagnostics and community sharing features."
  },
  {
    id: 5,
    name: "Apple-Attires",
    year: "August2025",
    align: "right",
    image: apple,
    explore: "/project5",
    github: 'https://github.com/Rafi024124/Apple-Attires',
     live: 'https://appleattires.vercel.app/',
    tech: {
  "Frontend": ["HTML", "CSS", "Tailwind CSS", "Next.js"],
  "Backend": ["Next.js API Routes (built-in backend features)"],
  "Database": ["MongoDB"],
}
,
    description:
      "Apple Attires is an e-commerce platform built with Next.js for selling mobile accessories. Users can browse products by model and color, add items to cart, and place orders, while admins can manage products, handle orders, detect fraud, and create consignments with Steadfast courier service.",
    challenges: "Integrating Steadfast courier service API for automatic consignment creation and Implementing fraud order detection to ensure business security.",
    futurePlans: "Implement online payment integration (e.g., Stripe, SSLCOMMERZ, or bKash) and Add order tracking for customers."
  },
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [radius, setRadius] = useState(baseRadius);
  const [cardWidth, setCardWidth] = useState(baseCardWidth);
  const [cardHeight, setCardHeight] = useState(baseCardHeight);
  const [isMobile, setIsMobile] = useState(false);
  const [rotationY, setRotationY] = useState(0);

  const navigate = useNavigate();
  const dragState = useRef({ dragging: false, startX: 0, currentRotation: 0 });

  const cardCount = projects.length;
  const theta = 360 / cardCount;

  // Handle resizing and responsive card sizing
  useEffect(() => {
    const updateSizes = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setRadius(baseRadius * 0.5);
        setCardWidth(baseCardWidth * 0.6);
        setCardHeight(baseCardHeight * 0.75);
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

  // Update active card based on rotation
  useEffect(() => {
    let rot = ((rotationY % 360) + 360) % 360;
    let index = Math.round(rot / theta) % cardCount;
    const active = (cardCount - index) % cardCount;
    setActiveIndex(active);
  }, [rotationY, cardCount, theta]);

  // Keyboard navigation with left/right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setRotationY((r) => r - theta);
      } else if (e.key === 'ArrowRight') {
        setRotationY((r) => r + theta);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theta]);

  const onDragStart = useCallback((e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.clientX || (e.touches && e.touches[0].clientX);
    dragState.current.currentRotation = rotationY;
  }, [rotationY]);

  const onDragMove = useCallback((e) => {
    if (!dragState.current.dragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = currentX - dragState.current.startX;
    const sensitivity = 0.5;
    const newRotation = dragState.current.currentRotation + deltaX * sensitivity;
    setRotationY(newRotation);
  }, []);

  const onDragEnd = useCallback(() => {
    dragState.current.dragging = false;
  }, []);

  return (
    <div
      id="projects"
      className="bg-black select-none"
      style={{
        perspective: 1200,
        width: '100%',
        maxWidth: isMobile ? `${cardWidth * 2.2}px` : `${cardWidth * 3}px`,
        height: isMobile ? `${cardHeight * 1.5}px` : `${cardHeight * 1.5}px`,
        margin: '50px auto',
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        touchAction: 'pan-y',
        padding: isMobile ? '0 20px' : '0',
      }}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <h2
        className="prime-color"
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          userSelect: 'none',
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
          transition: dragState.current.dragging ? 'none' : 'transform 1s cubic-bezier(0.05, 0.83, 0.43, 0.96)',
          transform: `translateZ(-${radius}px) rotateY(${rotationY}deg)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: dragState.current.dragging ? 'grabbing' : 'grab',
          overflow: 'visible',
        }}
      >
        {projects.map((app, i) => {
          const angle = theta * i;
          const isHovered = i === hoveredIndex;
          const isFlipped = i === flippedIndex;

          return (
            <article
              key={app.id}
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
                transition: dragState.current.dragging ? 'none' : 'transform 1s cubic-bezier(0.05, 0.83, 0.43, 0.96)',
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
              tabIndex={0} // Make card focusable for accessibility
              aria-pressed={isFlipped}
              aria-label={`Project card: ${app.name}. Click to flip and see description.`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setFlippedIndex(i === flippedIndex ? null : i);
                  setActiveIndex(i);
                }
              }}
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
                    alt={`${app.name} screenshot`}
                    style={{
                      width: '100%',
                      height: cardHeight * 0.42,
                      objectFit: 'cover',
                      borderRadius: '15px',
                      marginBottom: '10px',
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                    draggable={false}
                  />
                  <h3
                    className='prime-color'
                    style={{ fontSize: '1rem', userSelect: 'text' }}
                  >
                    {app.name}
                  </h3>
                  <p
                    className='text-xs text-center mb-2'
                    style={{ color: '#ddd', userSelect: 'text' }}
                  >
                    Click on the card!
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 justify-center">
                      <a
                        className="text-xs flex gap-1 justify-center items-center px-3 py-2 rounded-lg bg-[rgba(255,179,67,0.10)] text-[#FFB74D] font-bold shadow-[0_0_10px_#FFB74D] hover:bg-[rgba(255,179,67,0.25)] transition"
                        href={app.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live <BsFillArrowUpRightCircleFill className="lg:text-xl text-xs text-orange-300" />
                      </a>
                      <a
                        className="text-xs flex gap-1 justify-center items-center px-3 py-2 rounded-lg bg-[rgba(255,179,67,0.10)] text-[#FFB74D] font-bold shadow-[0_0_10px_#FFB74D] hover:bg-[rgba(255,179,67,0.25)] transition"
                        href={app.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Github <FaGithub className="lg:text-xl text-xs text-orange-300" />
                      </a>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`project/${app.id}`, { state: { project: app } });
                      }}
                      className="w-full py-2 rounded-lg bg-[#FFB74D] text-black font-semibold hover:bg-[#ffaa33] transition"
                      aria-label={`View details of ${app.name}`}
                    >
                      View Details
                    </button>
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
                    fontSize: '0.8rem',
                    lineHeight: '1.6',
                    userSelect: 'text',
                  }}
                >
                  {app.description}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
