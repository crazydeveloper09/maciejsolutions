import React from 'react';
import { CiCirclePlus, CiMobile3, CiServer } from 'react-icons/ci';
import {
  FaApple,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaGooglePlay,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { PiLaptopThin, PiRocketLaunchLight } from 'react-icons/pi';
import { RiNextjsFill } from 'react-icons/ri';

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'fa-plus': CiCirclePlus,
  'fa-desktop': PiLaptopThin,
  'fa-arrow-up': PiRocketLaunchLight,
  'fa-server': CiServer,
  'fa-mobile': CiMobile3,
  'fa-react': FaReact,
  'fa-js': FaJs,
  'fa-node-js': FaNodeJs,
  'fa-sass': FaSass,
  'fa-css3-alt': FaCss3Alt,
  'fa-html5': FaHtml5,
  'fa-npm': FaNpm,
  'fa-database': FaDatabase,
  'fa-facebook': FaFacebook,
  'fa-instagram': FaInstagram,
  'fa-envelope': FaEnvelope,
  'fa-nextjs': RiNextjsFill,
  'fa-graphql': GrGraphQl,
  'fa-globe': FaGlobe,
  'fa-android': FaGooglePlay,
  'fa-ios': FaApple,
};

interface IconFromHygraphProps {
  icon?: string;
  class?: string;
}

export const IconFromHygraph: React.FC<IconFromHygraphProps> = ({ icon, class: className }) => {
  if (!icon) return null;

  const key = icon.split(' ').find((c) => c.startsWith('fa-'));
  if (!key) return null;

  const Icon = ICON_MAP[key];
  if (!Icon) return null;

  return <Icon className={className} />;
};
