import { getProjectBySlug } from '@/lib/graphql/requests/projects';
import { Locale } from '@/lib/graphql/sdk';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import ReviewForm from './(components)/ReviewForm';
import styles from './page.module.scss';

interface NewReviewPageProps {
  params: {
    slug: string;
  };
}

const NewReviewPage: React.FC<NewReviewPageProps> = async ({ params }) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug, Locale.Pl);
  const t = await getTranslations('NewReviewPage');

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{t('header')}</h2>
        <p>{project?.title}</p>
      </div>
      <div className={styles.formContainer}>
        <ReviewForm projectSlug={slug} />
      </div>
    </div>
  );
};

export default NewReviewPage;
