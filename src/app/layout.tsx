import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import { getTeamMember } from '@/lib/graphql/requests/teamMember';
import { Locale } from '@/lib/graphql/sdk';
import '@/styles/main.scss';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Inter, Poppins } from 'next/font/google';
import SuccessModal from './orders/new/(components)/SuccessModal/SuccessModal';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '600', '700'],
  variable: '--font-poppins',
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const member = await getTeamMember(locale === 'pl' ? Locale.Pl : Locale.En);

  return {
    metadataBase: new URL('https://maciejsolutions.pl'),

    title: {
      default: 'Maciej Solutions',
      template: `%s | Maciej Solutions`,
    },

    description: member?.description,

    openGraph: {
      title: '%s | Maciej Solutions',
      description: member?.description,
      locale,
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Navigation />
          {children}
          <Footer />
          {modal}
          <SuccessModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
