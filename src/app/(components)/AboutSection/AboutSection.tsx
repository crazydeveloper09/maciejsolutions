import React from 'react';
import Description from '../../../components/common/Description/Description';
import styles from './AboutSection.module.scss';

interface AboutSectionProps {
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ description }) => {
  return (
    <section className={styles.container}>
      <Description class={styles.description}>{description}</Description>
    </section>
  );
};

export default AboutSection;
