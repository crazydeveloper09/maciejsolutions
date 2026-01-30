import Image from 'next/image';
import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loader}>
      <div className={styles.logo}>
        <Image src={'/g79.png'} alt="logo" width={80} height={80} />
      </div>
    </div>
  );
}
