import Alert, { ALERT_TYPES } from '@/components/common/Alert/Alert';
import { Review as IReview } from '@/lib/db/models/Review';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';
import Review from './Review/Review';
import styles from './Reviews.module.scss';

interface ReviewsProps {
  reviews: IReview[];
  projectSlug: string;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, projectSlug }) => {
  const t = useTranslations('Reviews');
  return (
    <section>
      <div className={styles.titleContainer}>
        <h3>{t('header')}</h3>
        <Link href={`/projects/${projectSlug}/reviews/new`}>
          <FaPlus />
        </Link>
      </div>

      {reviews?.length === 0 ? (
        <Alert type={ALERT_TYPES.INFO} message={t('noReview')} />
      ) : (
        reviews.map((review) => <Review review={review} key={review._id} />)
      )}
    </section>
  );
};

export default Reviews;
