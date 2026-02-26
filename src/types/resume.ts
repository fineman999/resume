// ===== 메인 이력서 데이터 =====
export interface ResumeData {
  personal: PersonalInfo;
  about: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: ProjectSummary[];
  education: Education[];
  certifications: Certification[];
  activities: Activity[];
}

export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  email: string;
  github: string;
  blog?: string;
  linkedin?: string;
  location?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  companyDesc: string;
  period: string;
  role: string;
  descriptions: string[];
  techKeywords: string[];
}

export interface ProjectSummary {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  techStack: string[];
  summary: string;
  status: 'completed' | 'in-progress';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Activity {
  name: string;
  period: string;
  description: string;
}

// ===== 프로젝트 상세 페이지 =====
export interface ProjectDetail {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  techStack: string[];
  status: 'completed' | 'in-progress';
  overview: string;
  background?: string;
  sections: ProjectSection[];
  results?: string[];
  lessons?: string[];
  images?: ProjectImage[];
}

export interface ProjectSection {
  title: string;
  content: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  image?: ProjectImage;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}