import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionIds.length) return;

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
        });

        // 👉 jeśli żadna sekcja nie jest widoczna
        if (visibleSections.size === 0) {
          setActiveSection(null);
        } else {
          // 👉 bierzemy tę, która pojawiła się NAJOSTATNIEJ
          setActiveSection([...visibleSections].at(-1)!);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
