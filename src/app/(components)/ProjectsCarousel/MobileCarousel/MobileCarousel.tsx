'use client';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { ProjectFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from './MobileCarousel.module.scss';

interface Props {
  projects: ProjectFieldsFragment[];
}

const MobileCarousel: React.FC<Props> = ({ projects }) => {
  const [progress, setProgress] = useState(0);
  const t = useTranslations('Projects');

  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;

    const card = trackRef.current.querySelector(`.${styles.card}`);
    if (!card) return;

    const width = card.clientWidth;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  const updateProgress = () => {
    if (!trackRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;

    const percent = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setProgress(percent);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scrollByCard('left')}
        aria-label="Poprzedni"
      >
        ‹
      </button>
      <div className={styles.content}>
        <SectionHeader>{t('title')}</SectionHeader>
        <div className={styles.track} ref={trackRef} onScroll={updateProgress}>
          {projects.map((p) => (
            <div className={styles.card} key={p.id}>
              <Link href={`/projects/${p.slug}`} className={styles.title}>
                <div className={styles.imageWrap}>
                  {p.profilePicture ? (
                    <Image
                      src={p.profilePicture.url}
                      alt={p.title}
                      width={400}
                      height={200}
                      sizes="90vw"
                    />
                  ) : (
                    <div className={styles.placeholder}>Brak zdjęcia</div>
                  )}
                </div>
                <div className={styles.linkContainer}>{p.title}</div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.progress}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => scrollByCard('right')}
        aria-label="Następny"
      >
        ›
      </button>
    </div>
  );
};

export default MobileCarousel;
