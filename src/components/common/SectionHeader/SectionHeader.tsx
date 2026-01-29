import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  style?: React.CSSProperties;
  children: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <h2 className={styles.header} style={props.style}>
      {props.children}
    </h2>
  );
};

export default SectionHeader;
