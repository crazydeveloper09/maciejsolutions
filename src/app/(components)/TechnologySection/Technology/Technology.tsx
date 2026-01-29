import Description from '@/components/common/Description/Description';
import { IconFromHygraph } from '@/helpers/icon';
import { TechnologyFieldsFragment } from '@/lib/graphql/sdk';
import React from 'react';
import styles from './Technology.module.scss';

interface TechnologyProps {
  technology: TechnologyFieldsFragment;
}

const Technology: React.FC<TechnologyProps> = ({ technology }) => {
  return (
    <div className={styles.container}>
      <IconFromHygraph icon={technology.icon} class={styles.icon} />
      <Description class="description">{technology.name}</Description>
    </div>
  );
};

export default Technology;
