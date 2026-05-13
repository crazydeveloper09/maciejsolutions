'use client';

import { sendSupportEmail } from '@/actions/sendSupportEmail';
import Field from '@/components/common/Field/Field';
import SectionHeader from '@/components/common/SectionHeader/SectionHeader';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';
import { LuClock3, LuMail, LuMapPin, LuPhone, LuSendHorizontal } from 'react-icons/lu';
import styles from './ContactSection.module.scss';

const ContactSection: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('ContactSection');

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
    <section className={styles.container} id="contact">
      <SectionHeader
        title={t('title')}
        label={t('label')}
        description={t('description')}
        isDivider
        isCentered
      />

      <div className={styles.content}>
        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>{t('formTitle')}</h3>

          <form action={onSubmit} className={styles.form}>
            <Field
              fieldType="select"
              name="topic"
              label={t('topicLabel')}
              required
              className={styles.select}
              defaultValue={t('chooseTopic')}
            >
              <option value="" disabled hidden>
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
              rows={6}
              required
            />

            <button className={styles.submitButton} disabled={isPending}>
              <LuSendHorizontal size={18} />

              {isPending ? t('buttonLoading') : t('buttonLabel')}
            </button>
          </form>
        </div>

        <div className={styles.infoCard}>
          <h3 className={styles.cardTitle}>{t('contactTitle')}</h3>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <LuPhone size={20} />
              </div>

              <div>
                <span>{t('phone')}</span>
                <div className={styles.phone}>
                  <a href="tel:+48724383096">+48 724 383 096</a>
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <LuMail size={20} />
              </div>

              <div>
                <span>Email</span>
                <p>admin@maciejsolutions.pl</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <LuClock3 size={20} />
              </div>

              <div>
                <span>{t('workingHours')}</span>
                <p>Pon. - Pt.: 8:00 - 17:00</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <LuMapPin size={20} />
              </div>

              <div>
                <span>{t('address')}</span>
                <p>67-200 Głogów</p>
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
              mode="place"
              q="Głogów, Poland"
              width="100%"
              height={250}
              zoom="15"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
