import React, { MouseEventHandler } from 'react';
//import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
  type: string;
  class: string;
  children: string;
  redirect?: string;
  click?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  //const { t } = useTranslation();
  const mapClasses = (cls?: string) => {
    if (!cls) return undefined;
    return cls
      .split(' ')
      .map((c) => (styles as unknown as string)[c as unknown as number] ?? c)
      .join(' ');
  };
  const className = mapClasses(props.class);
  if (props.type === 'link') {
    return (
      <Link className={`${className} ${styles.button}`} href={props.redirect!}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={`${className} ${styles.button}`} onClick={props.click!}>
        {props.children}
      </button>
    );
  }
};

export default Button;
