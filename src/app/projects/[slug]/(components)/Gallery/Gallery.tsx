import Alert, { ALERT_TYPES } from '@/components/common/Alert/Alert';
import { useTranslations } from 'next-intl';

interface GalleryProps {
  gallery: {
    __typename?: 'Asset' | undefined;
    url: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const t = useTranslations('Gallery');
  return (
    <section>
      <h3>{t('header')}</h3>
      {gallery.length === 0 ? (
        <Alert type={ALERT_TYPES.INFO} message={t('noPicture')} />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Gallery;
