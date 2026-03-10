'use client';

import React from 'react';
import type TypeItInstance from 'typeit';
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
        <TypeIt
          options={{
            strings: [description],
            speed: 15,
            lifeLike: false,
            afterComplete: (instance: TypeItInstance) => {
              instance.destroy();
            },
          }}
        />
      </Description>
    </section>
  );
};

export default AboutSection;
