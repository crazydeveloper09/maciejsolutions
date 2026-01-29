import { Review as IReview } from '@/lib/db/models/Review';
import React from 'react';
import styles from './Review.module.scss';
import StarsDisplay from './StarsDisplay';

const Review: React.FC<{ review: IReview }> = ({ review }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <StarsDisplay value={review.rating} />
      </div>
      <p className={styles.author}>{review.nickname}</p>
      <p className={styles.text}>{review.comment}</p>
      <p className={styles.date}>{new Date(review.createdAt).toLocaleDateString()}</p>
      <hr />
    </div>
  );
};

export default Review;
