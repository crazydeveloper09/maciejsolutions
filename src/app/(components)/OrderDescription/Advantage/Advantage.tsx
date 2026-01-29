import { useTranslations } from 'next-intl';
import React from 'react';
import styles from './Advantage.module.scss';

const Advantage: React.FC<{ text: string }> = (props) => {
  const t = useTranslations('advantages');
  return (
    <li className={styles.advantage}>
      <span className={styles.description}>{t(props.text)}</span>
    </li>
  );
};

export default Advantage;
