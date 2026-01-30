import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== '/') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSection(null);
      return;
    }

    let observer: IntersectionObserver | null = null;
    const visibleSections = new Set<string>();
    let interval: NodeJS.Timeout;

    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id;

            if (entry.isIntersecting) {
              visibleSections.add(id);
            } else {
              visibleSections.delete(id);
            }
          });

          const next = visibleSections.size === 0 ? null : [...visibleSections].at(-1)!;

          setActiveSection((prev) => (prev !== next ? next : prev));
        },
        {
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0,
        },
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer!.observe(el);
      });
    };

    // eslint-disable-next-line prefer-const
    interval = setInterval(() => {
      const allExist = sectionIds.every((id) => document.getElementById(id));
      if (allExist) {
        clearInterval(interval);
        initObserver();
      }
    }, 50);

    return () => {
      clearInterval(interval);
      observer?.disconnect();
    };
  }, [pathname, sectionIds]);

  return activeSection;
};
