import React from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  style?: React.CSSProperties;
  stylesClass?: string;
  title: string;
  description?: string;
  label?: string;
  isDivider?: boolean;
  isCentered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  stylesClass,
  style,
  title,
  description,
  label,
  isDivider,
  isCentered,
}) => {
  return (
    <div
      className={`${styles.header} ${stylesClass} ${isCentered ? styles.centered : ''}`}
      style={style}
    >
      <div className={styles.headerText}>
        <span className={styles.label}>{label}</span>
        <h2>{title}</h2>
        {description && (
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>

      {isDivider && isCentered && <div className={styles.divider} />}
    </div>
  );
};

export default SectionHeader;
