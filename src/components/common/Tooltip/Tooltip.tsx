'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className={styles.wrapper} onClick={() => setOpen((prev) => !prev)}>
      {children}

      {open && <div className={styles.tooltip}>{content}</div>}
    </div>
  );
}
