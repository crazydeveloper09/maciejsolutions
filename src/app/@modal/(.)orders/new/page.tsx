'use client';
import NewOrderForm from '@/app/orders/new/(components)/NewOrderForm/NewOrderForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.scss';

const NewOrderModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const chosenService = searchParams.get('service');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={() => router.back()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h3>Nowe zamówienie</h3>
            <p>{chosenService}</p>
          </div>
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              router.back();
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <NewOrderForm service={chosenService!} />
        </div>
      </div>
    </div>
  );
};

export default NewOrderModal;
