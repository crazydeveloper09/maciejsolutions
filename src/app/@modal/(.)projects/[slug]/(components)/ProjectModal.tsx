'use client';
import { IconFromHygraph } from '@/helpers/icon';
import { ProjectFieldsFragment } from '@/lib/graphql/sdk';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: ProjectFieldsFragment;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project }) => {
  const router = useRouter();
  const t = useTranslations('ProjectModal');

  return (
    <div className={styles.modalBackdrop} onClick={() => router.back()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <Image
            src={project.profilePicture && project.profilePicture.url}
            alt={project.title}
            className={styles.image}
            width={400}
            height={400}
          />
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              router.back();
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.titleContainer}>
            <h3>{project.title}</h3>
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
          <p>{project.description}</p>

          <div className={styles.linkContainer}>
            <Link
              href={`/projects/${project.slug}`}
              onClick={() => redirect(`/projects/${project.slug}`)}
            >
              {t('seeMoreLabel')} &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
