'use client';

import Alert, { ALERT_TYPES } from '@/components/common/Alert/Alert';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Gallery.module.scss';

interface GalleryProps {
  gallery: {
    __typename?: 'Asset' | undefined;
    url: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const t = useTranslations('Gallery');
  const [active, setActive] = useState<string | null>(null);

  return (
    <section>
      <h3>{t('header')}</h3>
      {gallery.length === 0 ? (
        <Alert type={ALERT_TYPES.INFO} message={t('noPicture')} />
      ) : (
        <div className={styles.grid}>
          {gallery.map((img, i) => (
            <>
              <button key={i} className={styles.item} onClick={() => setActive(img.url)}>
                <Image
                  src={img.url}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </button>
              {active && (
                <div className={styles.lightbox} onClick={() => setActive(null)}>
                  <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
                    <Image src={active} alt="" fill quality={95} sizes="100vw" />
                    <button className={styles.close} onClick={() => setActive(null)}>
                      ×
                    </button>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
