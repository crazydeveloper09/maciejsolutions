'use client';

import { fireConfetti } from '@/lib/confetti';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './SuccessModal.module.scss';

const SuccessModal: React.FC = () => {
  const params = useSearchParams();
  const router = useRouter();
  const fired = useRef(false);
  const t = useTranslations('SuccessModal');

  const isOpen = params.get('success') === '1';

  useEffect(() => {
    if (isOpen && !fired.current) {
      fired.current = true;

      requestAnimationFrame(() => {
        fireConfetti();
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>{t('header')}</h2>
          <p>{t('info')}</p>

          <button
            onClick={() => router.replace('/', { scroll: false })}
            className={styles.closeButton}
          >
            {t('closeLabel')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
