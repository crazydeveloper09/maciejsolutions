'use client';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { ServiceFieldsFragment } from '@/lib/graphql/sdk';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import WhatIdo from './WhatIdo/WhatIdo';
import styles from './WhatIDoSection.module.scss';

interface WhatIdoSectionProps {
  services: ServiceFieldsFragment[];
}

const WhatIDoSection: React.FC<WhatIdoSectionProps> = ({ services }) => {
  const t = useTranslations('WhatIdo');

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const MotionWhatIdo = motion(WhatIdo);

  return (
    <motion.section
      className={styles.container}
      id="whatIdo"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <SectionHeader class={styles.header}>{t('header')}</SectionHeader>
      <div className={styles.cards}>
        {services &&
          services.length > 0 &&
          services.map((service) => (
            <MotionWhatIdo key={service.id} service={service} variants={item} />
          ))}
      </div>
    </motion.section>
  );
};

export default WhatIDoSection;
