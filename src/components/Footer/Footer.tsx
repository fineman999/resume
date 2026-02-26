import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {year} Chan Park. Built with React + Vite. Deployed on GitHub Pages.</p>
    </footer>
  );
};

export default Footer;
