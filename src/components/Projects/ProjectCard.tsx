import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectSummary } from '../../types/resume';
import Tag from '../common/Tag';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: ProjectSummary;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <span
          className={`${styles.statusBadge} ${
            project.status === 'completed' ? styles.statusCompleted : styles.statusInProgress
          }`}
        >
          {project.status === 'completed' ? '완료' : '진행중'}
        </span>
      </div>
      <div className={styles.cardMeta}>
        <span>{project.company}</span>
        <span>·</span>
        <span>{project.period}</span>
      </div>
      <p className={styles.cardSummary}>{project.summary}</p>
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
      <span className={styles.arrowHint}>자세히 보기 →</span>
    </Link>
  );
};

export default ProjectCard;
