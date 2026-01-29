'use client';

import { ProjectFieldsFragment } from '@/lib/graphql/sdk';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import styles from './MobileCarousel.module.scss';

interface Props {
  projects: ProjectFieldsFragment[];
}

const MobileCarousel: React.FC<Props> = ({ projects }) => {
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

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scrollByCard('left')}
        aria-label="Poprzedni"
      >
        ‹
      </button>

      <div className={styles.track} ref={trackRef}>
        {projects.map((p) => (
          <div className={styles.card} key={p.id}>
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
            <div className={styles.linkContainer}>
              <Link href={`/projects/${p.slug}`} className={styles.title}>
                {p.title}
              </Link>
            </div>
          </div>
        ))}
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
