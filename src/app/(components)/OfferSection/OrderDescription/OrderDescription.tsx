'use client';

import Description from '@/components/common/Description/Description';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { LuBadgeCheck } from 'react-icons/lu';
import Advantage from './Advantage/Advantage';
import styles from './OrderDescription.module.scss';
import { advantages } from './advantages';

const OrderDescription: React.FC = () => {
  const t = useTranslations('OrderDescription');

  const MotionAdvantage = motion(Advantage);

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

  return (
    <section className={styles.container}>
      <SectionHeader label={t('label')} title={t('title')} isDivider isCentered />

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {advantages.map((advantage, index) => (
          <MotionAdvantage key={index} text={advantage.key} icon={advantage.icon} variants={item} />
        ))}
      </motion.div>

      <div className={styles.infoBox}>
        <div className={styles.infoIconContainer}>
          <LuBadgeCheck size={22} className={styles.infoIcon} />
        </div>

        <strong>
          <Description class={styles.description}>{t('info')}</Description>
        </strong>
      </div>

      <div className={styles.blurLeft} />
      <div className={styles.blurRight} />
    </section>
  );
};

export default OrderDescription;
