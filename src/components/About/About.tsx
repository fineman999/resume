import React from 'react';
import type { PersonalInfo } from '../../types/resume';
import SectionTitle from '../common/SectionTitle';
import styles from './About.module.css';

interface AboutProps {
  personal: PersonalInfo;
  about: string;
}

const About: React.FC<AboutProps> = ({ personal, about }) => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.intro}>
        <div className={styles.profilePlaceholder}>👨‍💻</div>
        <div className={styles.nameBlock}>
          <h1 className={styles.koreanName}>{personal.name}</h1>
          <span className={styles.englishName}>{personal.nameEn}</span>
          <span className={styles.jobTitle}>{personal.title}</span>
        </div>
      </div>
      <SectionTitle>About</SectionTitle>
      <p className={styles.description}>{about}</p>
    </section>
  );
};

export default About;
