import React from 'react';
import styles from './common.module.css';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};

export default SectionTitle;
