import { IconFromHygraph } from '@/helpers/icon';
import { getTeamMemberFooter } from '@/lib/graphql/requests/teamMember';
import { Locale } from '@/lib/graphql/sdk';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = async () => {
  const t = await getTranslations('Footer');
  const socialIcons = await getTeamMemberFooter(Locale.Pl);
  if (socialIcons) {
    return (
      <footer className={styles.footer}>
        <div>
          <Link href={socialIcons.igLink!}>
            <IconFromHygraph icon="fa-instagram" class={styles.icon} />
          </Link>
          <Link href={socialIcons.fbLink!}>
            <IconFromHygraph icon="fa-facebook" class={styles.icon} />
          </Link>
          <Link href={`mailto:${socialIcons.email!}`}>
            <IconFromHygraph icon="fa-envelope" class={styles.icon} />
          </Link>
        </div>
        <p className="footer_copyright">Maciej Solutions &copy; {t('copyright')}</p>
      </footer>
    );
  }
};

export default Footer;
