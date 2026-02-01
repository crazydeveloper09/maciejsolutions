import { ServiceFieldsFragment } from '@/lib/graphql/sdk';
import OrderDescription from './OrderDescription/OrderDescription';
import WhatIDoSection from './WhatIdoSection/WhatIDoSection';

interface OfferSectionProps {
  services: ServiceFieldsFragment[];
}

const OfferSection: React.FC<OfferSectionProps> = ({ services }) => {
  return (
    <section id="offer">
      <OrderDescription />
      <WhatIDoSection services={services} />
    </section>
  );
};

export default OfferSection;
