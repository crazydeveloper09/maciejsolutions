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
  if (socialIcons) {
    return (
      <footer className={styles.footer}>
        <div>
          <a href={socialIcons.bmcLink!}>
            <SiBuymeacoffee className={styles.icon} />
          </a>
          <a href={socialIcons.igLink!}>
            <IconFromHygraph icon="fa-instagram" class={styles.icon} />
          </a>
          <a href={socialIcons.fbLink!}>
            <IconFromHygraph icon="fa-facebook" class={styles.icon} />
          </a>
          <a href={`mailto:${socialIcons.email!}`}>
            <IconFromHygraph icon="fa-envelope" class={styles.icon} />
          </a>
        </div>
        <p className="footer_copyright">Maciej Solutions &copy; {t('copyright')}</p>
      </footer>
    );
  }
};

export default Footer;
