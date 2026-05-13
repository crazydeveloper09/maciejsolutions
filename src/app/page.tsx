import Header from '@/components/Header/Header';
import { getProjects } from '@/lib/graphql/requests/projects';
import { getTeamMember } from '@/lib/graphql/requests/teamMember';
import { Locale } from '@/lib/graphql/sdk';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import ContactSection from './(components)/ContactSection/ContactSection';
import OfferSection from './(components)/OfferSection/OfferSection';
import ProjectsCarousel from './(components)/ProjectsCarousel/ProjectsCarousel';

export const metadata: Metadata = {
  title: 'Home',
  openGraph: {
    title: 'Home',
  },
};

export default async function asyncHome() {
  const locale = await getLocale();
  const member = await getTeamMember(locale === 'pl' ? Locale.Pl : Locale.En);
  const projects = await getProjects(locale === 'pl' ? Locale.Pl : Locale.En);

  return (
    <main>
      <Header description={member?.description || ''} technologies={member?.technologies || []} />
      <OfferSection services={member?.services || []} />
      <ProjectsCarousel projects={projects?.reverse() || []} />
      <ContactSection />
    </main>
  );
}
