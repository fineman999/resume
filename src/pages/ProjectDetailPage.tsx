import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projectDetails } from '../data/projects/index';
import { resumeData } from '../data/resume';
import Tag from '../components/common/Tag';
import styles from './ProjectDetailPage.module.css';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? projectDetails[projectId] : undefined;

  if (!project) {
    navigate('/404', { replace: true });
    return null;
  }

  const projectIds = resumeData.projects.map((p) => p.id);
  const currentIndex = projectIds.indexOf(project.id);
  const prevId = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
  const nextId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          ← 이력서로 돌아가기
        </Link>

        {/* 헤더 */}
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            <span className={styles.company}>{project.company}</span>
            <span className={styles.dot}>·</span>
            <span>{project.period}</span>
            <span className={styles.dot}>·</span>
            <span>{project.role}</span>
            <span
              className={`${styles.statusBadge} ${
                project.status === 'completed' ? styles.statusCompleted : styles.statusInProgress
              }`}
            >
              {project.status === 'completed' ? '완료' : '진행중'}
            </span>
          </div>
          <div className={styles.techStack}>
            {project.techStack.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </header>

        {/* 개요 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📋 개요</h2>
          <p className={styles.text}>{project.overview}</p>
        </section>

        {/* 배경 */}
        {project.background && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🔧 배경</h2>
            <p className={styles.text}>{project.background}</p>
          </section>
        )}

        {/* 주요 작업 섹션들 */}
        {project.sections.map((sec, idx) => (
          <section key={idx} className={styles.section}>
            <h2 className={styles.sectionTitle}>{sec.title}</h2>
            <p className={styles.text}>{sec.content}</p>
            {sec.image && (
              <figure className={styles.figure}>
                <img src={sec.image.src} alt={sec.image.alt} className={styles.image} />
                {sec.image.caption && <figcaption className={styles.caption}>{sec.image.caption}</figcaption>}
              </figure>
            )}
            {sec.codeSnippet && (
              <div className={styles.codeBlock}>
                <div className={styles.codeLang}>{sec.codeSnippet.language}</div>
                <pre className={styles.code}>
                  <code>{sec.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}

        {/* 성과 */}
        {project.results && project.results.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🏆 성과</h2>
            <ul className={styles.bulletList}>
              {project.results.map((result, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  {result}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 배운 점 */}
        {project.lessons && project.lessons.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>💡 배운 점</h2>
            <ul className={styles.bulletList}>
              {project.lessons.map((lesson, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 프로젝트 네비게이션 */}
        <nav className={styles.projectNav}>
          {prevId ? (
            <Link to={`/projects/${prevId}`} className={styles.navBtn}>
              ← {resumeData.projects.find((p) => p.id === prevId)?.title}
            </Link>
          ) : (
            <span />
          )}
          {nextId ? (
            <Link to={`/projects/${nextId}`} className={`${styles.navBtn} ${styles.navBtnRight}`}>
              {resumeData.projects.find((p) => p.id === nextId)?.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
