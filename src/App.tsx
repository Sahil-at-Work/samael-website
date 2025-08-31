import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import PublicationsSection from './components/PublicationsSection';
import GallerySection from './components/GallerySection';
import LearningSection from './components/LearningSection';
import ContactSection from './components/ContactSection';
import MyLectures from './components/MyLectures';
import FieldLabVisits from './components/FieldLabVisits';
import StarGazingSessions from './components/StarGazingSessions';

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <PublicationsSection />
      <MyLectures />
      <FieldLabVisits />
      <StarGazingSessions />
      <GallerySection />
      <LearningSection />
      <ContactSection />
    </div>
  );
}

export default App;