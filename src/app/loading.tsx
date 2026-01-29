import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loader}>
      <div className={styles.logo}>
        <span>M</span>
      </div>
      <p className={styles.text}>Maciej Solutions</p>
    </div>
  );
}
