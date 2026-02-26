import React from 'react';
import type { SkillCategory } from '../../types/resume';
import SectionTitle from '../common/SectionTitle';
import Tag from '../common/Tag';
import styles from './Skills.module.css';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className={styles.skills}>
      <SectionTitle>Skills</SectionTitle>
      <div className={styles.grid}>
        {skills.map((skillCat) => (
          <div key={skillCat.category} className={styles.category}>
            <p className={styles.categoryName}>{skillCat.category}</p>
            <div className={styles.tagList}>
              {skillCat.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
