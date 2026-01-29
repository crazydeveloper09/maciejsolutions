import { getProjectBySlug } from '@/lib/graphql/requests/projects';
import { Locale } from '@/lib/graphql/sdk';
import { getLocale } from 'next-intl/server';
import ProjectModal from './(components)/ProjectModal';

interface ProjectModalPageProps {
  params: {
    slug: string;
  };
}

const ProjectModalPage: React.FC<ProjectModalPageProps> = async ({ params }) => {
  const { slug } = await params;

  const locale = await getLocale();
  const project = await getProjectBySlug(slug, locale === 'pl' ? Locale.Pl : Locale.En);

  return <ProjectModal project={project!} />;
};

export default ProjectModalPage;
