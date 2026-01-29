import AboutSection from '@/app/(components)/AboutSection/AboutSection';
import { useTranslations } from 'next-intl';
import React from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  description: string;
}

const Header: React.FC<HeaderProps> = ({ description }) => {
  const t = useTranslations('Header');
  return (
    <header className={styles.container}>
      <div className={styles.info}>
        <code className={styles.tagline}>build().scale().deliver();</code>

        <h1>Maciej Solutions</h1>
        <h3>{t('whatIdo')}</h3>
        <AboutSection description={description} />
      </div>
    </header>
  );
};

export default Header;
