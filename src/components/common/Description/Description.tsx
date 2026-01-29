import React from 'react';
import styles from './Description.module.scss';

interface DescriptionProps {
  class?: string;
  children?: React.ReactNode;
}

const mapClasses = (cls?: string) => {
  if (!cls) return undefined;
  return cls
    .split(' ')
    .map((c) => (styles as any)[c] ?? c)
    .join(' ');
};

const Description: React.FC<DescriptionProps> = (props) => {
  const className = mapClasses(`${props.class} ${styles.description}`);
  return <p className={className}>{props.children}</p>;
};

export default Description;
