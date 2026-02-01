import Header from '@/components/Header/Header';
import { getProjects } from '@/lib/graphql/requests/projects';
import { getTeamMember } from '@/lib/graphql/requests/teamMember';
import { Locale } from '@/lib/graphql/sdk';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import ContactForm from './(components)/ContactForm/ContactForm';
import OfferSection from './(components)/OfferSection/OfferSection';
import ProjectsCarousel from './(components)/ProjectsCarousel/ProjectsCarousel';
import TechnologySection from './(components)/TechnologySection/TechnologySection';

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
      <Header description={member?.description || ''} />
      <OfferSection services={member?.services || []} />
      <TechnologySection technologies={member?.technologies || []} />
      <ProjectsCarousel projects={projects?.reverse() || []} />
      <ContactForm />
    </main>
  );
}
