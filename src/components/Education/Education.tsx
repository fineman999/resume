import React from 'react';
import type { Activity, Certification, Education as EducationType } from '../../types/resume';
import SectionTitle from '../common/SectionTitle';
import styles from './Education.module.css';

interface EducationProps {
  education: EducationType[];
  certifications: Certification[];
  activities: Activity[];
}

const Education: React.FC<EducationProps> = ({ education, certifications, activities }) => {
  return (
    <section id="education" className={styles.education}>
      <SectionTitle>Education</SectionTitle>

      <p className={styles.subTitle}>학력</p>
      <div className={styles.list}>
        {education.map((edu) => (
          <div key={edu.institution} className={styles.item}>
            <div className={styles.itemLeft}>
              <span className={styles.institution}>{edu.institution}</span>
              <span className={styles.degree}>{edu.degree}</span>
            </div>
            <span className={styles.period}>{edu.period}</span>
          </div>
        ))}
      </div>

      <p className={styles.subTitle}>자격증</p>
      <div className={styles.list}>
        {certifications.map((cert) => (
          <div key={cert.name} className={styles.item}>
            <span className={styles.certName}>{cert.name}</span>
            <span className={styles.period}>{cert.date}</span>
          </div>
        ))}
      </div>

      <p className={styles.subTitle}>활동</p>
      <div className={styles.list}>
        {activities.map((activity) => (
          <div key={activity.name} className={styles.item}>
            <div className={styles.itemLeft}>
              <span className={styles.institution}>{activity.name}</span>
              <span className={styles.activityDesc}>{activity.description}</span>
            </div>
            <span className={styles.period}>{activity.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
