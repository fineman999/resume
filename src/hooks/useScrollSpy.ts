import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 80): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // 페이지 최하단 도달 시 마지막 섹션 활성화
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      if (isAtBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
