'use client';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { ProjectFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './DesktopCarousel.module.scss';

interface Props {
  projects: ProjectFieldsFragment[];
}

const DesktopCarousel: React.FC<Props> = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const t = useTranslations('Projects');

  const slides: ProjectFieldsFragment[][] = [];
  for (let i = 0; i < projects?.length; i += 3) {
    slides.push(projects.slice(i, i + 3));
  }
  const total = slides.length;
  const progress = ((index + 1) / total) * 100;

  return (
    <section className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
        disabled={index === 0}
      >
        ‹
      </button>

      <div className={styles.center}>
        <SectionHeader>{t('title')}</SectionHeader>

        <div className={styles.window}>
          <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((group, i) => (
              <div className={styles.slide} key={i}>
                {group.map((project) => (
                  <div className={styles.card} key={project.id}>
                    <Link href={`/projects/${project.slug}`}>
                      {project.profilePicture ? (
                        <div className={styles.imageWrapper}>
                          <Image
                            src={project.profilePicture.url}
                            alt={project.title}
                            fill
                            className={styles.image}
                            sizes="(max-width: 1400px) 30vw, 520px"
                          />
                        </div>
                      ) : null}
                      <div className={styles.linkContainer}>{project.title}</div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.progress}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => setIndex((i) => Math.min(i + 1, slides.length - 1))}
        disabled={index === slides.length - 1}
      >
        ›
      </button>
    </section>
  );
};

export default DesktopCarousel;
