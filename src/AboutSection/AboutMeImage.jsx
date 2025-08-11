
import mainimg from '../assets/portimg.png';

const AboutMeImage = () => {
  return (
   <div className="relative w-60 h-60 flex items-center justify-center  p-3">
            {/* Darker egg-shaped glowing oval (left-tilted) */}
            <div
                className="absolute z-0"
                style={{
                    width: '260px',
                    height: '160px',
                    top: '100px',
                    transform: 'rotate(-20deg)',
                    borderRadius: '60% 40% 60% 40% / 50% 60% 40% 50%', // egg shape
                    
                    background: 'linear-gradient(to bottom, #fdba74, #f97316)'

,
                    //boxShadow: '0 0 25px 10px rgba(204, 0, 0, 0.5)',
                }}
            ></div>

            {/* Lighter egg-shaped glowing oval (right-tilted) */}
            <div
                className="absolute z-0"
                style={{
                    width: '260px',
                    height: '160px',
                    top: '100px',
                    transform: 'rotate(20deg)',
                    borderRadius: '60% 40% 60% 40% / 50% 60% 40% 50%',
                    background: 'linear-gradient(to bottom, #fed7aa, #fdba74)'

,
                    //boxShadow: '0 0 25px 10px rgba(255, 77, 77, 0.4)',
                }}
            ></div>

            {/* Image on top */}
            <img
                src={mainimg}
                alt=""
                className="w-full relative z-10"
                style={{ filter: 'brightness(97%)' }}
            />
        </div>
  );
};

export default AboutMeImage;
