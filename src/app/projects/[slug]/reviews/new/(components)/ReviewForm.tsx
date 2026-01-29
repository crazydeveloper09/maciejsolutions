'use client';

import { addReview } from '@/actions/addReview';
import Field from '@/components/common/Field/Field';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';
import styles from './ReviewForm.module.scss';

interface ReviewFormProps {
  projectSlug: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ projectSlug }) => {
  const router = useRouter();
  const t = useTranslations('ReviewForm');
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await addReview(formData, projectSlug);

      if (res?.success) {
        router.push(`/projects/${projectSlug}?success=2`, { scroll: false });
      } else {
        router.push('?error=1', { scroll: false });
      }
    });
  }
  return (
    <form action={onSubmit}>
      <Field label={t('ratingLabel')} name="rating" fieldType="stars">
        <div className={styles.stars}>
          {[5, 4, 3, 2, 1].map((value) => (
            <React.Fragment key={value}>
              <input type="radio" name="rating" id={`star${value}`} value={value} required />
              <label htmlFor={`star${value}`}>★</label>
            </React.Fragment>
          ))}
        </div>
      </Field>
      <Field
        type="text"
        name="nickname"
        label={t('nicknameLabel')}
        placeholder={t('nicknamePlaceholder')}
      />
      <Field
        fieldType="textarea"
        name="description"
        label={t('descriptionLabel')}
        rows={5}
        placeholder={t('descriptionPlaceholder')}
      />
      <button disabled={isPending} className={styles.submitButton}>
        {isPending ? t('submitPendingLabel') : t('submitLabel')}
      </button>
    </form>
  );
};

export default ReviewForm;
