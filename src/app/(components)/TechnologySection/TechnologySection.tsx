import { TechnologyFieldsFragment } from '@/lib/graphql/sdk';
import React from 'react';
import Technology from './Technology/Technology';
import styles from './TechnologySection.module.scss';

interface TechnologySectionProps {
  technologies: TechnologyFieldsFragment[];
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ technologies }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles['marquee-track']}>
        {[...technologies, ...technologies].map((technology, index) => (
          <div className={styles.logo} key={index}>
            <Technology technology={technology} key={technology.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;
