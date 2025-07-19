import React, { useState, useEffect } from "react";
import CombinedBackgroundLayer from "./components/CombinedBackgroundLayer";
import Navbar from "./components/Shared/Navbar";
import GlitchTyping from "./components/GlitchTyping";
import HomeIntro from "./components/HomeIntro";

import SkillsSection from "./components/SkillsSection";
import SkillsMain from "./SkillsSection/SkillsMain";
import SubSkills from "./SkillsSection/SubSkills";
import AboutMeMain from "./AboutSection/AboutMeMain";
import ProjectsMain from "./ProjectsSection/ProjectsMain";
import ExperienceSection from "./Experience/ExperienceSection";
import Footer from "./Footer/Footer";

function App() {
  const [showHomeIntro, setShowHomeIntro] = useState(false);

  useEffect(() => {
    // Show HomeIntro after 5 seconds
    const timer = setTimeout(() => {
      setShowHomeIntro(true);
    }, 5500);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <CombinedBackgroundLayer />

      {/* Content container */}
      <div className="relative z-20">
        <Navbar />
        <GlitchTyping />
        {showHomeIntro && (
          <div>
            <HomeIntro></HomeIntro>
            <AboutMeMain></AboutMeMain>

            <SkillsMain></SkillsMain>
            <SubSkills></SubSkills>
            <ProjectsMain></ProjectsMain>
      
  <ExperienceSection />


            <Footer></Footer>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
