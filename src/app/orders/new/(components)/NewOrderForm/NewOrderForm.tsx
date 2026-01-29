'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { createOrder } from '@/actions/createOrder';
import Field from '@/components/common/Field/Field';
import { useTranslations } from 'next-intl';
import styles from './NewOrderForm.module.scss';

interface NewOrderFormProps {
  service: string;
}

const NewOrderForm: React.FC<NewOrderFormProps> = ({ service }) => {
  const router = useRouter();
  const t = useTranslations('NewOrderForm');
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await createOrder(formData);

      if (res?.success) {
        router.push('/?success=1', { scroll: false });
      } else {
        router.push('?error=1', { scroll: false });
      }
    });
  }

  return (
    <form action={onSubmit}>
      <Field label="Usługa" name="service" type="text" value={service} hidden />

      <Field
        label={t('projectNameLabel')}
        name="projectName"
        placeholder={t('projectNamePlaceholder')}
        required
      />

      <Field
        fieldType="textarea"
        label={t('projectDescriptionLabel')}
        name="projectDescription"
        placeholder={t('projectDescriptionPlaceholder')}
        required
        rows={5}
      />

      <Field label={t('budgetLabel')} name="budget" placeholder={t('budgetPlaceholder')} required />

      <Field label={t('deadlineLabel')} name="deadline" type="date" required />

      <Field
        name="name"
        label={t('nameLabel')}
        type="text"
        placeholder={t('namePlaceholder')}
        required
      />

      <Field
        name="email"
        label={t('emailLabel')}
        type="email"
        placeholder={t('emailPlaceholder')}
        required
      />

      <button type="submit" className={styles.submitButton} disabled={isPending}>
        {isPending ? t('submitLabelPlaceholder') : t('submitLabel')}
      </button>
    </form>
  );
};

export default NewOrderForm;
