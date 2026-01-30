'use client';

import { sendSupportEmail } from '@/actions/sendSupportEmail';
import Field from '@/components/common/Field/Field';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('ContactForm');

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await sendSupportEmail(formData);

      if (res?.success) {
        router.push('/?success=1', { scroll: false });
      } else {
        router.push('/?error=1', { scroll: false });
      }
    });
  }
  return (
    <section className={styles.container}>
      <SectionHeader>{t('title')}</SectionHeader>
      <form action={onSubmit}>
        <Field
          fieldType="select"
          name="topic"
          label={t('topicLabel')}
          required
          className={styles.select}
        >
          <option value="" disabled selected hidden>
            {t('chooseTopic')}
          </option>
          <option value="inquiry">{t('inquiry')}</option>
          <option value="support">{t('support')}</option>
          <option value="other">{t('other')}</option>
        </Field>
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
        <Field
          fieldType="textarea"
          name="message"
          label={t('messageLabel')}
          placeholder={t('messagePlaceholder')}
          rows={5}
          required
        />
        <button className={styles.submitButton} disabled={isPending}>
          {isPending ? t('buttonLoading') : t('buttonLabel')}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
