import React from 'react';
import type { PersonalInfo } from '../../types/resume';
import SectionTitle from '../common/SectionTitle';
import styles from './Contact.module.css';

interface ContactProps {
  personal: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personal }) => {
  return (
    <section id="contact" className={styles.contact}>
      <SectionTitle>Contact</SectionTitle>
      <div className={styles.list}>
        <div className={styles.item}>
          <span className={styles.label}>Email</span>
          <a href={`mailto:${personal.email}`} className={styles.link}>
            {personal.email}
          </a>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>GitHub</span>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {personal.github}
          </a>
        </div>
        {personal.blog && (
          <div className={styles.item}>
            <span className={styles.label}>Blog</span>
            <a href={personal.blog} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {personal.blog}
            </a>
          </div>
        )}
        {personal.linkedin && (
          <div className={styles.item}>
            <span className={styles.label}>LinkedIn</span>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {personal.linkedin}
            </a>
          </div>
        )}
        {personal.location && (
          <div className={styles.item}>
            <span className={styles.label}>Location</span>
            <span className={styles.text}>{personal.location}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
