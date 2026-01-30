'use client';

import React, { useEffect, useRef, useState } from 'react';
//import { useTranslation } from "react-i18next";
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const navigationT = useTranslations('Navigation');
  const projectsT = useTranslations('Projects');
  const pathname = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [menuDisplay, setMenuDisplay] = useState<string>('none');
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(['projects', 'whatIdo']);

  useEffect(() => {
    if (menuRef == null) {
      return;
    }
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      menuRef.current!.style.display = menuDisplay;
    }
  }, [menuDisplay]);

  const collapseMenu = () => {
    if (menuDisplay === 'none') {
      setMenuDisplay('block');
    } else {
      setMenuDisplay('none');
    }
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/">
        <img src="/g79.png" alt="logo" className={styles.logo} />
      </Link>
      <ul className={styles.navLinks} ref={menuRef}>
        <li>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' && activeSection === null ? styles.active : ''}`}
            onClick={collapseMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/#projects"
            className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
            onClick={collapseMenu}
            scroll
          >
            {projectsT('title')}
          </Link>
        </li>

        <li>
          <Link
            href="/#whatIdo"
            className={`${styles.navLink} ${activeSection === 'whatIdo' ? styles.active : ''}`}
            onClick={collapseMenu}
            scroll
          >
            {navigationT('offer')}
          </Link>
        </li>
      </ul>

      <div
        className={`${styles.navIcon4} ${isHamburgerOpen ? styles.open : ''}`}
        onClick={collapseMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
