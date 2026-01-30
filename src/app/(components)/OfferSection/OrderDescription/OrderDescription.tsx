import Description from '@/components/common/Description/Description';
import React from 'react';
import styles from './OrderDescription.module.scss';

import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { useTranslations } from 'next-intl';
import Advantage from './Advantage/Advantage';
import { advantages } from './advantages';

const OrderDescription: React.FC = () => {
  const t = useTranslations('OrderDescription');
  return (
    <section className={styles.container}>
      <SectionHeader>{t('header')}</SectionHeader>
      <ul>
        {advantages.map((advantage, index) => (
          <Advantage text={`advantage${index + 1}`} key={index} />
        ))}
      </ul>
      <strong>
        <Description class={styles.description}>{t('info')}</Description>
      </strong>
    </section>
  );
};

export default OrderDescription;
