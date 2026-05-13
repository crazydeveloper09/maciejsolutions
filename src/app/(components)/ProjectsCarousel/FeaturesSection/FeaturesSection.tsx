import { LuCodeXml, LuRocket, LuShieldCheck, LuUsers } from 'react-icons/lu';
import styles from './FeaturesSection.module.scss';

const features = [
  {
    icon: <LuCodeXml />,
    title: 'Nowoczesne technologie',
    desc: 'Korzystam z aktualnych i sprawdzonych technologii webowych.',
  },
  {
    icon: <LuShieldCheck />,
    title: 'Wysoka jakość',
    desc: 'Dbam o czysty kod, wydajność i dobre praktyki.',
  },
  {
    icon: <LuRocket />,
    title: 'Ciągły rozwój',
    desc: 'Stale poszerzam swoje umiejętności i śledzę nowe trendy.',
  },
  {
    icon: <LuUsers />,
    title: 'Indywidualne podejście',
    desc: 'Każdy projekt traktuję indywidualnie i z pełnym zaangażowaniem.',
  },
];

const FeaturesSection: React.FC = () => {
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
