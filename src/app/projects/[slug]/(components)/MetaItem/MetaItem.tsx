'use client';

import Tooltip from '@/components/common/Tooltip/Tooltip';
import styles from './MetaItem.module.scss';

interface MetaItemProps {
  icon: React.ReactNode;
  tooltip: string;
  children: React.ReactNode;
}

export default function MetaItem({ icon, tooltip, children }: MetaItemProps) {
  return (
    <div className={styles.item}>
      <Tooltip content={tooltip}>
        <span className={styles.icon}>{icon}</span>
      </Tooltip>

      <span className={styles.text}>{children}</span>
    </div>
  );
}
