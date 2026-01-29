'use client';

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
        <h2 className={styles.title}>{t('title')}</h2>

        <div className={styles.window}>
          <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((group, i) => (
              <div className={styles.slide} key={i}>
                {group.map((project) => (
                  <div className={styles.card} key={project.id}>
                    {project.profilePicture ? (
                      <Image
                        src={project.profilePicture.url}
                        alt={project.title}
                        className={styles.image}
                        width={500}
                        height={200}
                      />
                    ) : null}

                    <div className={styles.linkContainer}>
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
