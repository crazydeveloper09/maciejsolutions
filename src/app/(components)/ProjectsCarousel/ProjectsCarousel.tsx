import { ProjectFieldsFragment } from '@/lib/graphql/sdk';
import React from 'react';
import DesktopCarousel from './DesktopCarousel/DesktopCarousel';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import styles from './ProjectsCarousel.module.scss';

interface Props {
  projects: ProjectFieldsFragment[];
}

const ProjectsCarousel: React.FC<Props> = ({ projects }) => {
  const safeProjects = projects ?? [];

  return (
    <div id="projects">
      <div className={styles.desktopCarousel}>
        <DesktopCarousel projects={safeProjects} />
      </div>

      <div className={styles.mobileCarousel}>
        <MobileCarousel projects={safeProjects} />
      </div>
    </div>
  );
};

export default ProjectsCarousel;
