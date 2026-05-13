'use client';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { ProjectFieldsFragment } from '@/lib/graphql/sdk';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import styles from './ProjectsCarousel.module.scss';

interface Props {
  projects: ProjectFieldsFragment[];
}

const ProjectsCarousel: React.FC<Props> = ({ projects }) => {
  const safeProjects = projects ?? [];

  const [activeIndex, setActiveIndex] = useState(1);
  const t = useTranslations('Projects');

  const next = () => setActiveIndex((prev) => (prev + 1) % safeProjects.length);
  const prev = () => setActiveIndex((prev) => (prev === 0 ? safeProjects.length - 1 : prev - 1));

  const slides = useMemo(() => {
    return safeProjects.map((project, index) => {
      let offset = index - activeIndex;
      if (offset > 1) offset -= safeProjects.length;
      if (offset < -1) offset += safeProjects.length;
      return { ...project, offset };
    });
  }, [activeIndex, safeProjects]);

  return (
    <section className={styles.wrapper}>
      <SectionHeader title={t('title')} label={t('label')} description={t('description')} />

      <motion.div
        className={styles.carousel}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          const swipeThreshold = 50;

          if (info.offset.x < -swipeThreshold) {
            next();
          }

          if (info.offset.x > swipeThreshold) {
            prev();
          }
        }}
      >
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={prev}
          aria-label={t('ariaPrev')}
        >
          <LuChevronLeft size={22} />
        </button>
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={next}
          aria-label={t('ariaNext')}
        >
          <LuChevronRight size={22} />
        </button>
        {slides.map((slide) => {
          const isActive = slide.offset === 0;
          const isVisible = Math.abs(slide.offset) <= 1;

          return (
            <motion.div
              key={slide.id}
              className={styles.slide}
              animate={{
                x: slide.offset === -1 ? '-68%' : slide.offset === 1 ? '68%' : '0%',
                scale: isActive ? 1 : 0.88,
                opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                zIndex: isActive ? 10 : 1,
              }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
                <Link href={`/projects/${slide.slug}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={slide.profilePicture?.url}
                      alt={slide.title}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.content}>
                    {slide.types?.[0] && <span className={styles.badge}>{slide.types[0]}</span>}

                    <h3 className={styles.title}>{slide.title}</h3>
                    <p className={styles.description}>{slide.shortDescription}</p>

                    <div className={styles.stack}>
                      {slide.stack.map((tech) => (
                        <span key={tech.id} className={styles.pill}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${((activeIndex + 1) / safeProjects.length) * 100}%` }}
        />
      </div>

      <FeaturesSection />
    </section>
  );
};

export default ProjectsCarousel;
