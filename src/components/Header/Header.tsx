import React from 'react';
import type { PersonalInfo } from '../../types/resume';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';

interface HeaderProps {
  personal: PersonalInfo;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Header: React.FC<HeaderProps> = ({ personal }) => {
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.nameBlock}>
          <button className={styles.name} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {personal.name}
          </button>
          <span className={styles.title}>{personal.title}</span>
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${activeId === item.id ? styles.active : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
            title={theme === 'light' ? '다크모드' : '라이트모드'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
