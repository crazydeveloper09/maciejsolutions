'use client';

import React from 'react';
import TypeIt from 'typeit-react';
import Description from '../../../components/common/Description/Description';
import styles from './AboutSection.module.scss';

interface AboutSectionProps {
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ description }) => {
  return (
    <section className={styles.container}>
      <Description class={styles.description}>
        <TypeIt options={{ strings: [description], speed: 20, lifeLike: false }} />
      </Description>
    </section>
  );
};

export default AboutSection;
