import Description from '@/components/common/Description/Description';
import { IconFromHygraph } from '@/helpers/icon';
import { ServiceFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import styles from './WhatIdo.module.scss';

interface WhatIDoProps {
  service: ServiceFieldsFragment;
}

const WhatIdo: React.FC<WhatIDoProps> = ({ service }) => {
  const t = useTranslations('WhatIdo');
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{service.title}</h3>
        <Link href={`/orders/new?service=${service.title}`}>{t('orderButton')} &#8594;</Link>
      </div>
      <div className={styles.iconContainer}>
        <IconFromHygraph icon={service.icon} class={styles.icon} />
      </div>

      <Description class={styles.description}>{service.description}</Description>
    </div>
  );
};

export default WhatIdo;
