import { ServiceFieldsFragment } from '@/lib/graphql/sdk';
import React from 'react';
import WhatIdo from './WhatIdo/WhatIdo';
import styles from './WhatIDoSection.module.scss';

interface WhatIdoSectionProps {
  services: ServiceFieldsFragment[];
}

const WhatIDoSection: React.FC<WhatIdoSectionProps> = ({ services }) => {
  return (
    <section className={styles.container} id="whatIdo">
      <div className={styles.cards}>
        {services &&
          services.length > 0 &&
          services.map((service) => <WhatIdo service={service} key={service.id} />)}
      </div>
    </section>
  );
};

export default WhatIDoSection;
