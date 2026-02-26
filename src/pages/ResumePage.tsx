import React from 'react';
import { resumeData } from '../data/resume';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import ProjectList from '../components/Projects/ProjectList';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/common/BackToTop';

const ResumePage: React.FC = () => {
  const { personal, about, skills, experience, projects, education, certifications, activities } = resumeData;

  return (
    <>
      <Header personal={personal} />
      <main className="container">
        <About personal={personal} about={about} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <ProjectList projects={projects} />
        <Education education={education} certifications={certifications} activities={activities} />
        <Contact personal={personal} />
      </main>
      <div className="container">
        <Footer />
      </div>
      <BackToTop />
    </>
  );
};

export default ResumePage;
