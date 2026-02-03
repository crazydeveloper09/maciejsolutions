import { findReviews } from '@/actions/findReviews';
import { IconFromHygraph } from '@/helpers/icon';
import { getProjectBySlug } from '@/lib/graphql/requests/projects';
import { Locale } from '@/lib/graphql/sdk';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa6';
import Gallery from './(components)/Gallery/Gallery';
import MetaItem from './(components)/MetaItem/MetaItem';
import Reviews from './(components)/Reviews/Reviews';
import styles from './page.module.scss';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProjectBySlug(slug, locale === 'pl' ? Locale.Pl : Locale.En);

  return {
    title: project?.title,
    description: project?.description,

    openGraph: {
      title: project?.title,
      description: project?.description,
    },
  };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProjectBySlug(slug, locale === 'pl' ? Locale.Pl : Locale.En);
  const { reviews } = await findReviews(slug);
  console.log(reviews);

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
              <a href={project.webLink} target="_blank" rel="noopener noreferrer">
                <IconFromHygraph icon={'fa-globe'} />
              </a>
            )}
            {project.androidLink && (
              <a href={project.androidLink} target="_blank" rel="noopener noreferrer">
                <IconFromHygraph icon={'fa-android'} />
              </a>
            )}
            {project.iosLink && (
              <a href={project.iosLink} target="_blank" rel="noopener noreferrer">
                <IconFromHygraph icon={'fa-ios'} />
              </a>
            )}
            <div className={styles.metaMobile}>
              <MetaItem
                icon={<FaTag />}
                tooltip={project.categories.map((c) => c.title).join(', ')}
              >
                {project.categories.map((category, index) => (
                  <span key={category.slug}>
                    {category.title}
                    {index < project.categories.length - 1 && ', '}
                  </span>
                ))}
              </MetaItem>

              <MetaItem icon={<FaInfoCircle />} tooltip={project.projectStatus}>
                {project.projectStatus}
              </MetaItem>
            </div>
          </div>
        </div>
        <div className={styles.meta}>
          <MetaItem icon={<FaTag />} tooltip={project.categories.map((c) => c.title).join(', ')}>
            {project.categories.map((category, index) => (
              <span key={category.slug}>
                {category.title}
                {index < project.categories.length - 1 && ', '}
              </span>
            ))}
          </MetaItem>

          <MetaItem icon={<FaInfoCircle />} tooltip={project.projectStatus}>
            {project.projectStatus}
          </MetaItem>
        </div>

        <p className={styles.description}>{project.description}</p>
        <Gallery gallery={project.gallery} />
        <Reviews reviews={reviews || []} projectSlug={project.slug || ''} />
      </div>
    );
  }
};

export default ProjectPage;
