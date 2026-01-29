import { findReviews } from '@/actions/findReviews';
import { IconFromHygraph } from '@/helpers/icon';
import { getProjectBySlug } from '@/lib/graphql/requests/projects';
import { Locale } from '@/lib/graphql/sdk';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from './(components)/Gallery/Gallery';
import Reviews from './(components)/Reviews/Reviews';
import styles from './page.module.scss';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProjectBySlug(slug, locale === 'pl' ? Locale.Pl : Locale.En);
  const { reviews } = await findReviews(slug);

  if (project) {
    return (
      <div className={styles.container}>
        <Image
          src={project.profilePicture.url}
          alt={project.title}
          width={400}
          height={400}
          className={styles.image}
        />
        <div className={styles.titleContainer}>
          <h2>{project.title}</h2>
          <div className={styles.iconLinks}>
            {project.webLink && (
              <Link href={project.webLink} target="_blank" rel="noopener noreferrer">
                <IconFromHygraph icon={'fa-globe'} />
              </Link>
            )}
            {project.androidLink && (
              <Link href={project.androidLink} target="_blank" rel="noopener noreferrer">
                <IconFromHygraph icon={'fa-android'} />
              </Link>
            )}
            {project.iosLink && (
              <Link href={project.iosLink} target="_blank" rel="noopener noreferrer">
                <IconFromHygraph icon={'fa-ios'} />
              </Link>
            )}
          </div>
        </div>
        <p className={styles.description}>{project.description}</p>
        <Gallery gallery={project.gallery} />
        <Reviews reviews={reviews || []} projectSlug={project.slug || ''} />
      </div>
    );
  }
};

export default ProjectPage;
