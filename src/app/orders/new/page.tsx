import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NewOrderForm from './(components)/NewOrderForm/NewOrderForm';
import styles from './page.module.scss';

interface NewOrderPageProps {
  searchParams: {
    service: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('NewOrderPage');
  return {
    title: t('header'),
    openGraph: {
      title: t('header'),
    },
  };
}

const NewOrderPage: React.FC<NewOrderPageProps> = async ({ searchParams }) => {
  const { service } = await searchParams;
  const t = await getTranslations('NewOrderPage');
  return (
    <>
      <ScrollToTop />
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>{t('header')}</h2>
          <p>{service}</p>
        </div>
        <div className={styles.formContainer}>
          <NewOrderForm service={service} />
        </div>
      </div>
    </>
  );
};

export default NewOrderPage;
