import React from 'react';
import type { Experience as ExperienceType } from '../../types/resume';
import SectionTitle from '../common/SectionTitle';
import Tag from '../common/Tag';
import styles from './Experience.module.css';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className={styles.experience}>
      <SectionTitle>Experience</SectionTitle>
      <div className={styles.timeline}>
        {experience.map((exp) => (
          <div key={exp.company} className={styles.item}>
            <div className={styles.companyHeader}>
              <span className={styles.company}>{exp.company}</span>
              <span className={styles.companyDesc}>{exp.companyDesc}</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.role}>{exp.role}</span>
              <span>{exp.period}</span>
            </div>
            <ul className={styles.descriptions}>
              {exp.descriptions.map((desc) => (
                <li key={desc} className={styles.descItem}>
                  {desc}
                </li>
              ))}
            </ul>
            <div className={styles.techKeywords}>
              {exp.techKeywords.map((keyword) => (
                <Tag key={keyword} label={keyword} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
