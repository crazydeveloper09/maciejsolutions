import { useTranslations } from 'next-intl';
import React from 'react';
import styles from './Advantage.module.scss';

type Props = {
  text: string;
  icon: React.ReactNode;
};

const Advantage: React.FC<Props> = ({ text, icon, ...rest }) => {
  const t = useTranslations('advantages');

  return (
    <div className={styles.card} {...rest}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>{icon}</div>
      </div>

      <p className={styles.description}>{t(text)}</p>
    </div>
  );
};

export default Advantage;
