import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  style?: React.CSSProperties;
  class?: string;
  children: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <h2 className={`${styles.header} ${props.class}`} style={props.style}>
      {props.children}
    </h2>
  );
};

export default SectionHeader;
