import styles from './loading.module.scss';

export default function ModalLoading() {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader} />
        <div className={styles.modalContent}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonBlock} />
          <div className={styles.skeletonBlock} />
        </div>
      </div>
    </div>
  );
}
