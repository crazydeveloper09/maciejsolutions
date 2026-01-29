import Alert, { ALERT_TYPES } from '@/components/common/Alert/Alert';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { TechnologyFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import React from 'react';
import Technology from './Technology/Technology';
import styles from './TechnologySection.module.scss';

interface TechnologySectionProps {
  technologies: TechnologyFieldsFragment[];
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ technologies }) => {
  const t = useTranslations('TechnologySection');
  return (
    <section className={styles.container}>
      <SectionHeader>{t('header')}</SectionHeader>

      {technologies?.length ? (
        <div className={styles.cards}>
          {technologies.map((technology) => (
            <Technology technology={technology} key={technology.id} />
          ))}
        </div>
      ) : (
        <Alert type={ALERT_TYPES.INFO} message="Na razie nie dodaliśmy żadnych technologii" />
      )}
    </section>
  );
};

export default TechnologySection;
