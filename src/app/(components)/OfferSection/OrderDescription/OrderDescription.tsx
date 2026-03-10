'use client';

import Description from '@/components/common/Description/Description';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Advantage from './Advantage/Advantage';
import styles from './OrderDescription.module.scss';
import { advantages } from './advantages';

const OrderDescription: React.FC = () => {
  const t = useTranslations('OrderDescription');

  const MotionAdvantage = motion(Advantage);

  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.container}>
      <SectionHeader>{t('header')}</SectionHeader>

      <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {advantages.map((advantage, index) => (
          <MotionAdvantage key={index} text={`advantage${index + 1}`} variants={item} />
        ))}
      </motion.ul>

      <strong>
        <Description class={styles.description}>{t('info')}</Description>
      </strong>
    </section>
  );
};

export default OrderDescription;
