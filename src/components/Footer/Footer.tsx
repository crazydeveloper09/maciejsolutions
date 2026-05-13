import { IconFromHygraph } from '@/helpers/icon';
import { getTeamMemberFooter } from '@/lib/graphql/requests/teamMember';
import { Locale } from '@/lib/graphql/sdk';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { SiBuymeacoffee } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer: React.FC = async () => {
  const t = await getTranslations('Footer');
  const socialIcons = await getTeamMemberFooter(Locale.Pl);

  if (!socialIcons) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />

      <div className={styles.content}>
        <div className={styles.brand}>
          <img src={'/g45.png'} alt="logo" className={styles.logo} />
        </div>

        <div className={styles.center}>
          <span className={styles.socialLabel}>{t('socials')}</span>

          <div className={styles.socials}>
            <a
              href={socialIcons.bmcLink!}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <SiBuymeacoffee />
            </a>

            <a
              href={socialIcons.igLink!}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <IconFromHygraph icon="fa-instagram" class={styles.socialIcon} />
            </a>

            <a
              href={socialIcons.fbLink!}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <IconFromHygraph icon="fa-facebook" class={styles.socialIcon} />
            </a>

            <a href={`mailto:${socialIcons.email!}`} className={styles.social}>
              <IconFromHygraph icon="fa-envelope" class={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={styles.copyWrapper}>
          <div className={styles.copy}>
            <p>Maciej Solutions ©</p>
            <p>{t('copyright')}</p>

            <span>2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
