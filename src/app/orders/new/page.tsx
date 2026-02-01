import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop';
import { getTranslations } from 'next-intl/server';
import NewOrderForm from './(components)/NewOrderForm/NewOrderForm';
import styles from './page.module.scss';

interface NewOrderPageProps {
  searchParams: {
    service: string;
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
