import Description from '@/components/common/Description/Description';
import { IconFromHygraph } from '@/helpers/icon';
import { ServiceFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import styles from './WhatIdo.module.scss';

interface WhatIDoProps {
  service: ServiceFieldsFragment;
  index?: number;
}

const WhatIdo: React.FC<WhatIDoProps> = ({ service, index = 1, ...rest }) => {
  const t = useTranslations('WhatIdo');

  return (
    <article className={styles.container} {...rest}>
      <span className={styles.number}>{String(index).padStart(2, '0')}</span>

      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <IconFromHygraph icon={service.icon} class={styles.icon} />
        </div>

        <h3 className={styles.title}>{service.title}</h3>

        <Description class={styles.description}>{service.description}</Description>
      </div>

      <div className={styles.footer}>
        <Link href={`/orders/new?service=${service.title}`} className={styles.button}>
          {t('orderButton')}
        </Link>
        <Link href={`/orders/new?service=${service.title}`} className={styles.arrow}>
          →
        </Link>
      </div>
    </article>
  );
};

export default WhatIdo;
