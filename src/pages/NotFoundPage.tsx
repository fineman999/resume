import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>페이지를 찾을 수 없습니다.</p>
        <Link to="/" className={styles.link}>
          이력서로 돌아가기 →
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
