import React from 'react';
import type { ProjectSummary } from '../../types/resume';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

interface ProjectListProps {
  projects: ProjectSummary[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle>Projects</SectionTitle>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
