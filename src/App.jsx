
import { Routes, Route } from "react-router-dom";

import CombinedBackgroundLayer from "./components/CombinedBackgroundLayer";
import Navbar from "./components/Shared/Navbar";
import GlitchTyping from "./components/GlitchTyping";
import HomeIntro from "./components/HomeIntro";

import SkillsMain from "./SkillsSection/SkillsMain";
import SubSkills from "./SkillsSection/SubSkills";
import AboutMeMain from "./AboutSection/AboutMeMain";

import ExperienceSection from "./Experience/ExperienceSection";
import Footer from "./Footer/Footer";
import ContactMe from "./components/contact/ContactMe";
import Project from "./Projects/Project";
import ProjectDetails from "./details/ProjectDetails";




function Home() {
 

 

  return (
    <>
      <CombinedBackgroundLayer />
      <div className="relative z-20">
        <Navbar />
        <GlitchTyping />
       
          <div>
            <HomeIntro></HomeIntro>
            <AboutMeMain />
            <SkillsMain />
            <SubSkills />
            <Project />
            <ExperienceSection />
            <ContactMe />
            <Footer />
          </div>
        
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails/>} />
    </Routes>
  );
}

export default App;
