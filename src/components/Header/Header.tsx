import AboutSection from '@/app/(components)/AboutSection/AboutSection';
import TechnologySection from '@/app/(components)/TechnologySection/TechnologySection';
import { TechnologyFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  description: string;
  technologies: TechnologyFieldsFragment[];
}

const Header: React.FC<HeaderProps> = ({ description, technologies }) => {
  const t = useTranslations('Header');
  return (
    <header className={styles.container}>
      <div className={styles.info}>
        <div className={styles.textContainer}>
          <h1>{t('whatIdo')}</h1>
          <AboutSection description={description} />
          <div className={styles.buttonContainer}>
            <Link href="/#contact" className={`${styles.button} ${styles.contactButton}`}>
              {t('contactButton')} <span className={styles.arrow}>→</span>
            </Link>

            <Link href="/#projects" className={`${styles.button} ${styles.projectsButton}`}>
              {t('projectsButton')} <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/heroImage.png"
            alt="header image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <TechnologySection technologies={technologies} />
    </header>
  );
};

export default Header;
