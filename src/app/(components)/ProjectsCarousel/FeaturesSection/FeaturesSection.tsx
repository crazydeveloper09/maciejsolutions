import { useTranslations } from 'next-intl';
import { LuCodeXml, LuRocket, LuShieldCheck, LuUsers } from 'react-icons/lu';
import styles from './FeaturesSection.module.scss';

const FeaturesSection: React.FC = () => {
  const t = useTranslations('FeaturesSection');
  const features = [
    {
      icon: <LuCodeXml />,
      title: t('feature1Title'),
      desc: t('feature1Desc'),
    },
    {
      icon: <LuShieldCheck />,
      title: t('feature2Title'),
      desc: t('feature2Desc'),
    },
    {
      icon: <LuRocket />,
      title: t('feature3Title'),
      desc: t('feature3Desc'),
    },
    {
      icon: <LuUsers />,
      title: t('feature4Title'),
      desc: t('feature4Desc'),
    },
  ];
  return (
    <div className={styles.features}>
      {features.map((f) => (
        <div key={f.title} className={styles.feature}>
          <div className={styles.featureIcon}>{f.icon}</div>
          <div>
            <strong>{f.title}</strong>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
